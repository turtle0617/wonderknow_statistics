<template>
<div class="home">
  <MemberDisplay v-bind:talks="talks" v-on:send-member-List="receivememberList" />

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
  monted: function() {
    this.checkData;
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
      console.log(hasMemberList);
      // this.member_List = list;
    }
  },
  computed: {
    checkData: function() {
      getData().then(response => {
        this.talks = response.data.result;
      });
      return this.talks;
    }
  }
};
</script>
