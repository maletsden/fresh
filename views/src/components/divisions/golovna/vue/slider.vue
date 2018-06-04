<template>
<div id="slider">
  <div class="slider">
    <div class="slider_logo" :style='sliderLogo'>
      <div class="slider_logo__block" :style='sliderLogoBlock'>
        <div class="slider_logo__block-big">
          <div>
            F
          </div>
          <div>
            R
          </div>
          <div>
            E
          </div>
          <div>
            S
          </div>
          <div>
            H
          </div>
        </div>
        <div class="slider_logo__block-small">
          fresh flowers
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data() {
    return {
      sliderLogo: {
        "margin-top": 0,
      },
      sliderLogoBlock: {
        "opacity": 1
      }
    };
  },
  mounted() {},
  components: {

  },
  methods: {
    scroll(e) {
      if (window.scrollY > 0 && window.innerHeight > window.scrollY) {
        this.sliderLogo["margin-top"] = (window.scrollY / 2) + 'px';
        this.sliderLogoBlock["opacity"] = 1 - window.scrollY / window.innerHeight;
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.scroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scroll);
  }
}


// Cool header image scroll$(window).scroll(function (e) {
console.log(document.scrollTop);
console.log(this);
/*if ($(window).width() > 800) {
  $('.header').css({
    bottom: -($(this).scrollTop() / 3) + "px"
  });
  var thisdist = $(this).scrollTop();
  var headerheight = $(".header").outerHeight();
  $('.blog-info').css({
    opacity: 1 - thisdist / headerheight
  });
} else {
  $('.header').css({
    'bottom': 'auto'
  });
  $('.blog-info').css({
    'opacity': "1"
  });
}
});
*/</script>

<style lang='scss' scoped>
@import '../scss/slider.scss';
</style>
