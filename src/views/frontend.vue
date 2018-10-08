<template>
<div class="frontend">
  <forntendDisplay v-bind:talks="talks" />
  <getData v-on:send-datas="receiveData" />
</div>
</template>

<script>
import forntendDisplay from "@/components/forntendDisplay.vue";
import getData from "@/components/getData.vue";
export default {
  name: "frontend",
  data: function() {
    return {
      talks: []
    };
  },
  components: {
    forntendDisplay,
    getData
  },
  methods: {
    receiveData: function(data) {
      this.talks = data;
    }
  }
};
</script>
