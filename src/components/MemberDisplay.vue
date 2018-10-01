<template>
<ul>
  <li v-for="(detail, speaker) in show" v-bind:key="speaker" class="speaker">
    <img v-bind:src="detail.photo" v-on:click="showChart"alt=""> {{ speaker }}: {{detail.talk_count}}
    <ve-line :data="showChart()"></ve-line>
  </li>
</ul>
</template>
<script>
// v-on:click="showChart(detail.talks)"
export default {
  props: ["talks"],
  methods: {
    statistics: function() {
      let talks = this.talks;
      let speaker_list = {};
      talks.map(talk => statisticsSpeaker(talk, speaker_list));
      return speaker_list;
    },
    showChart: function() {
      let all_month = [];
      let month_talk = [];
      let col = {
        chartData: {
          columns: ["日期", "访问用户"],
          rows: [
            { 日期: "1/1", 访问用户: 1393 },
            { 日期: "1/2", 访问用户: 3530 },
            { 日期: "1/3", 访问用户: 2923 },
            { 日期: "1/4", 访问用户: 1723 },
            { 日期: "1/5", 访问用户: 3792 },
            { 日期: "1/6", 访问用户: 4593 }
          ]
        }
      };
      // talks.map(talk => monthInYearsStatistic(talk, all_month, month_talk));
      // console.log(col);
      return col
    }
  },
  mounted:function(){
    this.showChart();
  },
  computed: {
    show: function() {
      let speaker_list = this.statistics();
      let list_length = Object.keys(speaker_list).length;
      if (list_length == 0) {
        return;
      }
      return speaker_list;
    }
  }
};

function monthInYearsStatistic(talk, all_month, month_talk) {
  let dateSplit = talk.speech_date.slice(0, 7);
  let hasMonth = all_month.includes(dateSplit);
  if (hasMonth) {
    let index = all_month.indexOf(dateSplit);
    month_talk[index]++;
  } else {
    all_month.push(dateSplit);
    month_talk.push(1);
  }
}

function statisticsSpeaker(talk, speaker_list) {
  let speaker = talk.speaker;
  let hasSpeaker = Object.keys(speaker_list).includes(speaker);
  if (hasSpeaker) {
    speaker_list[speaker].talk_count++;
    speaker_list[speaker].talks.push(talk);
  } else {
    let photo = talk.speaker_img;
    let hasPhoto = photo.includes('imgur');
    if(!hasPhoto){
      photo = '/goodidea.png'
    }
    speaker_list[speaker] = {
      talk_count: 1,
      photo: photo,
      talks: [talk]
    };
  }
}
</script>
