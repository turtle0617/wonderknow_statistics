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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
  padding: 10px 20px;
  margin: 10px 10px;
  background-color: #e8f3f6;
}
li > h1 {
  color: #7a062e;
}
li > label {
  color: #1e8ba6;
}
.speaker {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 25px;
}
.speaker > img {
  width: 50px;
  height: auto;
  border-radius: 50%;
  margin-right: 10px;
}

a {
  color: #42b983;
}
</style>
