<template>
<div class="home">
  <MemberDisplay v-bind:talks="talks" v-on:send-member-List="receivememberList" />
  <ul>
    <li v-for="( speaker, detail) in member_List"  v-bind:key="detail">
      <!-- {{speaker}} -->
      <div class="speaker" v-on:click="checkChart(speaker)">
        <img v-bind:src="speaker.photo"  alt=""> {{ speaker.speaker }}
      </div>
      <h3>總演講次數: {{speaker.talk_count}}</h3>
      <div v-if="speaker.showChart">
        <ve-line :data="speaker.chartData" ></ve-line>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import MemberDisplay from "@/components/Member.vue";
import getData from "../axios";
export default {
  name: "home",
  data: function() {
    return {
      talks: [],
      member_List: []
    };
  },
  mounted: function() {
    // console.log('monuted');
    getData().then(response => {
      // console.log('monuted get data');
      this.talks = response.data.result;
    });
  },
  components: {
    MemberDisplay
  },
  methods: {
    checkChart: function(member) {
      member.showChart = !member.showChart;
    },
    receivememberList: function(list) {
      let hasMemberList = this.member_List.length !== 0;
      if (!hasMemberList) {
        // console.log("not list");
      }

      this.member_List = list;
      // console.log("member_List", this.member_List);
    }
  }
};
</script>
