<template>
  <ul>
    <li v-for="data in datas">
      <h1>主題：{{data.title}}</h1>
      日期：{{data.speech_date}}
      Camp:{{data.class}}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["datas"]
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
