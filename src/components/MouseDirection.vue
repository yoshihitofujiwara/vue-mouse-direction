/*==========================================================================
	template
==========================================================================*/
<template>
  <div class="mouse-direction">
    <h1>vue-mouse-direction</h1>
    <div class="list_wrap">
      <ul>
        <li v-for="index in itemLength" :key="index">
          <a @mouseenter="hover" @mouseleave="hover" href="#">
            <div class="slip"></div>
            Hover {{index}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


/*==========================================================================
	script
==========================================================================*/
<script>
import * as utils from "../assets/js/utils";
import { TweenLite } from "gsap/TweenMax";

export default {
  name: "MouseDirection",

  /**
   * data
   */
  data() {
    return {
      itemLength: 20
    };
  },

  /**
   * methods
   */
  methods: {
    hover: function(event) {
      let style = utils.createStyle(event);
      TweenLite.fromTo(
        event.target.querySelector(".slip"),
        0.18,
        style.from,
        style.to
      );
    },

    mouseenter: function(event) {
      let style = utils.createStyle(event);
      TweenLite.fromTo(
        event.target.querySelector(".slip"),
        0.18,
        style.from,
        style.to
      );
    },

    mouseleave: function(event) {
      let style = utils.createStyle(event);
      TweenLite.fromTo(
        event.target.querySelector(".slip"),
        0.18,
        style.from,
        style.to
      );
    }
  }
};
</script>



/*==========================================================================
	style
==========================================================================*/
<style lang="scss">
.mouse-direction {
  padding: 30px;

	h1{
		font-size: 1.6rem;
		margin-bottom: 50px;
	}

  .list_wrap {
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      // justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    li {
      width: 150px;
      height: 150px;
      line-height: 150px;
    }
    a {
      position: relative;
      overflow: hidden;
      display: block;
      height: 100%;
      border: 1px solid #ccc;
      text-align: center;
    }
    .slip {
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
}
</style>
