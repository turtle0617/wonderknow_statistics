<template>
<div class="frontend">
  hi I m frontend page
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
<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
