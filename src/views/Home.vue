<template>
<div class="home">
  <getData v-on:send-datas="receiveData" />

  <MemberDisplay v-bind:talks="talks" v-on:send-member-List="receivememberList" />
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
</div>
</template>

<script>
import MemberDisplay from "@/components/MemberDisplay.vue";
import getData from "@/components/getData.vue";
export default {
  name: "home",
  data: function() {
    return {
      talks: [],
      member_List: []
    };
  },
  components: {
    MemberDisplay,
    getData
  },
  methods: {
    receiveData: function(data) {
      this.talks = data;
    },
    receivememberList: function(list) {
      this.member_List = list;
      console.log("list,",list);
    }
  }
};
</script>
