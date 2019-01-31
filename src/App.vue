<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/home.vue'
export default {
  name: 'app',
  components: {
   home,
  }
};
</script>

<style>
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b, textarea, button, input, select, figure, figcaption
{
     padding:0; 
     margin:0;
     font-style: normal;
     text-decoration:none;
     list-style-type: none;
     border:none;
     box-sizing:border-box;
}
body{min-width:1000px; font:12px/250% "微软雅黑",tahoma,arial,"宋体"}
</style>
