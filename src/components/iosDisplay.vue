<template>
<ul>
  <li v-for="(talk,index) in iosTalks" v-bind:key="index">
    <h1>主題：{{talk.title}}</h1>
    <div class="talk">
      <div class="speaker">
        <img v-bind:src="talk.speaker_img" alt="">
        <span>{{talk.speaker}}</span>
      </div>
      <div class="Summary">
        {{talk.message}}
      </div>
    </div>
    <label>日期：{{talk.speech_date}}</label>
  </li>
</ul>
</template>

<script>
function isIOS(item) {
  const iosCondition = ["IOS"];
  let photo = item.speaker_img;
  item.speaker_img = checkPhoto(photo);
  return iosCondition.includes(item.class);
}
function checkPhoto(photo) {
  let hasPhoto = photo.includes('imgur');
  if(!hasPhoto){
    photo = '/goodidea.png';
    return photo
  }
  return photo;
}
export default {
  props: ["talks"],
  computed: {
    iosTalks: function() {
      // let arr = this.talks.map(talk => talk.speaker_img)
      // return arr;
      let iosTalks = this.talks.filter(isIOS);
      return iosTalks.reverse();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
