<template>
<div class="home">
  <getData v-on:send-datas="receiveData" />
  <MemberDisplay v-bind:talks="talks" />
</div>
</template>

<script>
import MemberDisplay from "@/components/MemberDisplay.vue";
import getData from "@/components/getData.vue";
export default {
  name: "home",
  data: function() {
    return {
      talks: []
    };
  },
  components: {
    MemberDisplay,
    getData
  },
  methods: {
    receiveData: function(data) {
      this.talks = data;
    }
  }
};
</script>
