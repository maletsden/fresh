<template>
<div class="">
  <VueTinySlider :mouse-drag="true" :loop="true" items="4" gutter="20">
    <div>Slider item #1</div>
    <div>Slider item #2</div>
    <div>Slider item #3</div>
    <div>Slider item #4</div>
    <div>Slider item #5</div>
    <div>Slider item #6</div>
  </VueTinySlider>
</div>
</template>


<script>
import VueTinySlider from 'vue-tiny-slider';
export default {

  data() {
    return {
      
    };
  },
  components: {
    VueTinySlider
  }
}
</script>

<style lang='scss' scoped>
@import '~tiny-slider/src/tiny-slider';
$purple: #352541;
</style>
