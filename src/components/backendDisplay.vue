<template>
<ul>
  <li v-for="talk in backendTalks">
    <h1>主題：{{talk.title}}</h1>
    <div class="speaker">
      <img v-bind:src="talk.speaker_img" alt="">
      <span>{{talk.speaker}}</span>
    </div>
    <label>日期：{{talk.speech_date}}</label>
  </li>
</ul>
</template>

<script>
function isBackend(item) {
  const backEndCondition = ["Backend-end", "backend-end", "Security", "NodeJS"];
  return backEndCondition.includes(item.class);
}
export default {
  props: ["talks"],
  computed: {
    backendTalks: function() {
      // let arr = this.talks.map(talk => talk.speaker_img)
      // return arr;
      let backendTalks = this.talks.filter(isBackend);
      return backendTalks.reverse();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
