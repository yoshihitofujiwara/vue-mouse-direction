/*==========================================================================
	template
==========================================================================*/
<template>
  <a @mouseenter="hover" @mouseleave="hover" v-bind:href="href">
    <div ref="slide" class="slide"></div>
    {{text}}
  </a>
</template>


/*==========================================================================
	script
==========================================================================*/
<script>
import * as utils from "../assets/js/utils";
import { TweenLite } from "gsap/TweenMax";

export default {
  name: "SlideButton",

  props: {
    href: String,
    text: String
  },

  /**
   * methods
   */
  methods: {
    hover: function(event) {
      let style = utils.createStyle(event);
      TweenLite.fromTo(this.$refs.slide, 0.18, style.from, style.to);
    }
  }
};
</script>



/*==========================================================================
	style
==========================================================================*/
<style lang="scss" scoped>
a {
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  text-align: center;

  .slide {
    display: block;
    position: absolute;
    /* top: 0; */
    top: -100%; /* 初期は非表示 */
    left: 0;
    width: 100%;
    height: 100%;
    background: #999;
    opacity: 0.3;
  }
}
</style>
