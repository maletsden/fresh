<template>
<div>
  <Header></Header>
  <router-view style='position:absolute' :style='{ top: menuHeight + "px"}'></router-view>
</div>
</template>


<script>
import Header from './Header.vue';
export default {
  data() {
    return {
      menuHeight: 0,
    };
  },
  mounted() {
    this.menuHeight = document.getElementById('menu').offsetHeight;
  },
  components: {
    Header
  }

}
</script>

<style>
body {
  padding: 0;
  margin: 0
}
</style>
