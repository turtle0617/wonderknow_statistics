<template>
<!-- <ul>
  <li v-for="(detail, speaker) in showMember" v-model="showMember" v-bind:key="speaker" >
    <div class="speaker">
      <img v-bind:src="detail.photo" v-on:click="checkChart(detail)" alt=""> {{ speaker }}
    </div>
    <h3>總演講次數: {{detail.talk_count}}</h3>
    <h3>showChart: {{detail.showChart}}</h3>
    <div v-if="detail.showChart">
      <ve-line  :data="detail.chartData" width="800px"></ve-line>
    </div>
  </li>
</ul> -->
</template>
<script>
// v-on:click="showChart(detail.talks)"
import "v-charts/lib/style.css";
export default {
  props: ["talks"],
  // data() {
  //   return {
  //     chartData: {
  //       columns: ["month", "month_talks_count"],
  //       rows: []
  //     }
  //   };
  // },
  mounted: function() {
    let member_List = this.MemberTalkStatistics();
    let list_length = Object.keys(member_List).length;
    if (list_length != 0) {
      console.log("mounted", member_List);
      this.$emit("send-member-List", member_List);
    }
  },
  methods: {
    checkChart: function(member) {
      console.log("checkChart", member.showChart);
      member.showChart = !member.showChart;
    },
    MemberTalkStatistics: function() {
      let talks = this.talks;
      let member_list = {};
      // let month_talk_statistic = this.getMonthInYears();
      talks.forEach(talk => {
        // this.memberDetailStatistics(talk, member_list, month_talk_statistic);
        this.memberDetailStatistics(talk, member_list);
      });
      for (let member in member_list) {
        this.monthTalksStatistic(member_list[member]);
      }
      // console.log(member_list);
      return member_list;
    },
    // memberDetailStatistics: function(talk, member_list, month_talk_statistic) {
    memberDetailStatistics: function(talk, member_list) {
      let member = talk.speaker;
      let hasMember = Object.keys(member_list).includes(member);
      let hasPhoto = talk.speaker_img.includes("imgur");
      let month_talk_statistic = this.getMonthInYears();
      if (!hasMember) {
        if (!hasPhoto) {
          talk.speaker_img = "/goodidea.png";
        }
        member_list[member] = {
          talk_count: 0,
          chartData: {
            columns: ["month", "month_talks_count"],
            rows: month_talk_statistic
          },
          speaker: member,
          photo: talk.speaker_img,
          talks: [],
          showChart: true
        };
        // return;
      }
      member_list[member].talk_count += 1;
      member_list[member].talks.push(talk);
    },
    monthTalksStatistic: function(member) {
      member.talks.forEach(talk => {
        let talkDate = talk.speech_date.slice(0, 7);
        member.chartData.rows.forEach(talkCount => {
          if (talkDate.includes(talkCount.month)) {
            talkCount.month_talks_count++;
          }
        });
      });
    },
    getMonthInYears: function() {
      let date = new Date();
      let earliestYear = "2017";
      let nowMonth =
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
      let nowYear = date.getFullYear();
      let yearRange = nowYear - earliestYear;
      let monthRange = 6 + parseInt(nowMonth) + 1;
      let monthAndTalk = [];
      // console.log("getMonthInYears monthAndTalk 剛宣告完",monthAndTalk);
      let yearForloop = 2017;
      let monthForloop = 6;
      if (yearRange > 1) {
        monthRange += 12;
      }
      for (let i = 0; i < monthRange; i++) {
        if (monthForloop < 10) {
          monthForloop = "0" + monthForloop;
        }

        if (monthForloop > 12) {
          yearForloop++;
          monthForloop -= 12;
          monthAndTalk.push({
            month: yearForloop + "-0" + monthForloop,
            month_talks_count: 0
          });
          monthForloop++;
        } else {
          monthAndTalk.push({
            month: yearForloop + "-" + monthForloop,
            month_talks_count: 0
          });
          monthForloop++;
        }
      }
      // console.log("getMonthInYears return",monthAndTalk);
      return monthAndTalk;
    }
  }
};

// function memberDetailStatistics(talk, member_list) {
//   let speaker = talk.speaker;
//   let hasSpeaker = Object.keys(member_list).includes(speaker);
//   if (hasSpeaker) {
//     member_list[speaker].talk_count++;
//     member_list[speaker].talks.push(talk);
//   } else {
//     let photo = talk.speaker_img;
//     let hasPhoto = photo.includes("imgur");
//     if (!hasPhoto) {
//       photo = "/goodidea.png";
//     }
//     member_list[speaker] = {
//       talk_count: 1,
//       photo: photo,
//       talks: [talk]
//     };
//   }
// }
</script>
