<template>
  <div class="" v-if="isData">
    {{sendMember()}}
  </div>

</template>
<script>
// v-on:click="showChart(detail.talks)"
import "v-charts/lib/style.css";
export default {
  props: ["talks"],
  computed: {
    isData: function() {
      return this.talks.length !== 0;
    }
  },
  methods: {
    sendMember: function() {
      let member_List = this.MemberTalkStatistics();
      let list_length = member_List.length;
      // console.count("sendMember",list_length);
      if (list_length != 0) {
        console.count("success send-member-List", member_List);
        this.$emit("send-member-List", member_List);

        return member_List;
      }
    },

    MemberTalkStatistics: function() {
      let talks = Array.from(this.talks);
      let member_list;
      // let member_list_detail;

      member_list = this.generateMemberList(talks);
      member_list = this.calculMemberAllTalk(member_list, talks);
      // member_list = this.calculMonthTalks(member_list)
      // console.log(member_list);
      return member_list;
    },
    generateMemberList: function(talks) {
      let member_list = [];
      member_list = talks
        .map(talk => {
          return talk.speaker;
        })
        .filter((item, index, list) => {
          // console.log(list.keys());
          // if(list.indexOf(item.speaker) === index){
          //   console.log(list[index].includes(item.speaker),index);
          // }
          return list.indexOf(item) === index;
        })
        .map(member => {
          let month_talk_statistic = this.getMonthInYears();
          return {
            speaker: member,
            talk_count: 0,
            talks: [],
            chartData: {
              columns: ["month", "month_talks_count"],
              rows: month_talk_statistic
            },
            showChart: false
          };
        });
      return member_list;
    },
    calculMemberAllTalk: function(member_list, talks) {
      member_list.map(member => {
        return talks.map(talk => {
          let hasPhotoKey = Object.keys(member).includes("photo");
          let speakerMatch = talk.speaker === member.speaker;
          if (speakerMatch) {
            let talkDate = talk.speech_date.slice(0, 7);
            member.talks.push({
              class: talk.class,
              title: talk.title,
              message: talk.message,
              speech_date: talk.speech_date
            });
            member.talk_count++;
            // console.log('member:',member,member.chartData)
            member.chartData.rows = member.chartData.rows.map((row, index) => {
              // console.log(row,index);
              if (row.month === talkDate) {
                row.month_talks_count++;
                return row;
              }
              return row;
            });
          }
          if (!hasPhotoKey) {
            member.photo = talk.speaker_img;
          } else {
            let hasPhoto = member.photo.includes("imgur");
            if (!hasPhoto) {
              member.photo = "/goodidea.png";
            }
          }
          return member;
        });
      });
      return member_list;
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
</script>
