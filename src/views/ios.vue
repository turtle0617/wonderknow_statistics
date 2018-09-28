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
