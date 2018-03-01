<template>
<div class="">
  <!--<agile :infinite="true">
    <div class="slide slide--1">
      <img class="slide_img" src="src/components/divisions/images/3.jpg">
    </div>
    <div class="slide slide--2">
      <img class="slide_img" src="src/components/divisions/images/2.jpg">
    </div>
  </agile>-->

  <WeOffer/>
  <Form/>
  <HowToCooperate/>
  <Feedbacks/>
  <About/>
  <Blog/>
  <Ready/>

</div>
</template>


<script>
import WeOffer from './we_offer.vue';
import Form from './form.vue';
import HowToCooperate from './how_to_cooperate.vue';
import Feedbacks from './feedbacks.vue';
import About from './about_us.vue';
import Blog from './blog.vue';
import Ready from './ready.vue';
//import img1 from './images/1.jpg';
//import VueTinySlider from 'vue-tiny-slider';
export default {

  data() {
    return {};
  },
  mounted() {},
  components: {
    WeOffer,
    Form,
    HowToCooperate,
    Feedbacks,
    About,
    Blog,
    Ready
  }
}
</script>

<style lang='scss' scoped>
//@import 'main.scss';
</style>
