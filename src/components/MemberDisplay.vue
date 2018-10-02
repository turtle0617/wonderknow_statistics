<template>
<ul>
  <li v-for="(detail, speaker) in show" v-bind:key="speaker" class="speaker">
    <img v-bind:src="detail.photo" v-on:click="showChart(detail.talks)" alt=""> {{ speaker }}: {{detail.talk_count}}
    <!-- <ve-line :data="month_talk_statistic" width="800px"></ve-line> -->
  </li>
</ul>
</template>
<script>
// v-on:click="showChart(detail.talks)"
import "v-charts/lib/style.css";
export default {
  props: ["talks"],
  // data() {
  //   return {
  //     chartData: {
  //       columns: ["month", "talks"],
  //       rows: []
  //     }
  //   };
  // },
  methods: {
    // statistics: function() {
    //   let talks = this.talks;
    //   let member_list = {};
    //   talks.map(talk => memberDetailStatistics(talk, member_list));
    //   return member_list;
    // },
    // showChart: function(talks) {
    //   let month_talk_statistic = [];
    //   month_talk_statistic = this.getMonthInYears();
    //   talks.map(talk => monthTalkStatistic(talk, month_talk_statistic));
    //   this.chartData = {
    //     columns: ["month", "talks"],
    //     rows: month_talk_statistic
    //   };
    //   console.log(this.chartData);
    // }
    MemberTalkStatistics: function() {
      let talks = this.talks;
      let member_list = {};
      let month_talk_statistic = this.getMonthInYears();
      talks.forEach((talk)=>{
        this.memberDetailStatistics(talk,member_list,month_talk_statistic)
      });
      console.log(member_list);
      return member_list;
    },
    memberDetailStatistics: function (talk, member_list, month_talk_statistic) {
      let member = talk.speaker;
      let hasMember = Object.keys(member_list).includes(member);
      let hasPhoto = talk.speaker_img.includes("imgur");
      if(!hasMember){
        if(!hasPhoto){
          talk.speaker_img = "/goodidea.png";
        }
        member_list[member] = {
          talk_count: 0,
          month_talk: month_talk_statistic,
          photo: talk.speaker_img,
          talks: [talk]
        };
        // return;
      }
      let talkDate = talk.speech_date.slice(0, 7);
      member_list[member].talk_count +=1;

      member_list[member].month_talk.forEach((obj,index)=>{
        if(obj.month == talkDate){
          member_list[member].month_talk[index].talks++;
        }
        let monthMatch = (obj.month).includes(talkDate);
        let memberMatch = talk.speaker.includes(member);
        // if(!monthMatch){
        //   return;
        // }

      });

      member_list[member].talks.push(talk);

  
    },
    monthTalkStatistic:function(talkDateSplit, month_talk_statistic) {
      // console.log("monthTalkStatistic",month_talk_statistic);
      month_talk_statistic.forEach((monthTalk)=>{
        let monthMatch = talkDateSplit.includes(monthTalk.month)
        if(monthMatch){
          console.log(monthTalk);
          monthTalk.talks++;
        }
      });
      // console.log("month_talk_statistic",month_talk_statistic);
      return month_talk_statistic;
    },
    getMonthInYears:function() {
      let date = new Date();
      let earliestYear = "2017";
      let nowMonth = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
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
            talks: 0
          });
          monthForloop++;
        } else {
          monthAndTalk.push({
            month: yearForloop + "-" + monthForloop,
            talks: 0
          });
          monthForloop++;
        }
      }
      // console.log("getMonthInYears return",monthAndTalk);
      return monthAndTalk;
    }
  },
  computed: {
    show: function() {
      let member_List = this.MemberTalkStatistics();
      let list_length = Object.keys(member_List).length;
      if (list_length == 0) {
        return;
      }

      return member_List;
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
