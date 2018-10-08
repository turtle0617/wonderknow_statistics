<template>
<div class="backend">
  <backendDisplay v-bind:talks="talks" />
  <getData v-on:send-datas="receiveData" />
</div>
</template>

<script>
import backendDisplay from "@/components/backendDisplay.vue";
import getData from "@/components/getData.vue";
export default {
  name: "backend",
  data: function() {
    return {
      talks: []
    };
  },
  components: {
    backendDisplay,
    getData
  },
  methods: {
    receiveData: function(data) {
      this.talks = data;
    }
  }
};
</script>
