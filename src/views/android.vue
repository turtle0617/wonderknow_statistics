<template>
<div class="backend">
  <androidDisplay v-bind:talks="talks" />
  <getData v-on:send-datas="receiveData" />
</div>
</template>

<script>
import androidDisplay from "@/components/androidDisplay.vue";
import getData from "@/components/getData.vue";
export default {
  name: "backend",
  data: function() {
    return {
      talks: []
    };
  },
  components: {
    androidDisplay,
    getData
  },
  methods: {
    receiveData: function(data) {
      this.talks = data;
    }
  }
};
</script>
