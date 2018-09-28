<template>
<ul>
  <li v-for="talk in frontendTalks">
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
function isFrontend(item) {
  const frontEndCondition = ["Front-end", "CSS", "HTML", "Vue"];
  return frontEndCondition.includes(item.class);
  // if(item.class === "Front-end" || item.class==="CSS" || item.class==="HTML" || item.class==="Vue"){
  //   return item;
  // }
}
export default {
  props: ["talks"],
  computed: {
    frontendTalks: function() {
      let frontendTalks = this.talks.filter(isFrontend);
      // let frontendTalks = this.talks.filter(data => isFrontend(data));
      return frontendTalks.reverse();
    }
  }
};
</script>
