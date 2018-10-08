<template>
<div class="backend">
  <iosDisplay v-bind:talks="talks" />
  <getData v-on:send-datas="receiveData" />
</div>
</template>

<script>
import iosDisplay from "@/components/iosDisplay.vue";
import getData from "@/components/getData.vue";
export default {
  name: "backend",
  data: function() {
    return {
      talks: []
    };
  },
  components: {
    iosDisplay,
    getData
  },
  methods: {
    receiveData: function(data) {
      this.talks = data;
    }
  }
};
</script>
