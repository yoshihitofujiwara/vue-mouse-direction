/*==========================================================================
	template
==========================================================================*/
<template>
  <div class="mouse-direction">
    <h1>Slide Button List</h1>
    <div class="list_wrap">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <SlideButton :href="item.href" :text="item.text"/>
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
import SlideButton from "./SlideButton.vue";

export default {
  name: "SlideList",

  components: {
    SlideButton
  },

  /**
   * data
   */
  data() {
    return {
      items: [
        { text: "A", href: "/#A" },
        { text: "B", href: "/#B" },
        { text: "C", href: "/#C" },
        { text: "D", href: "/#D" },
        { text: "E", href: "/#E" },
        { text: "F", href: "/#F" },
        { text: "G", href: "/#G" },
        { text: "H", href: "/#H" },
        { text: "I", href: "/#I" },
        { text: "J", href: "/#J" },
        { text: "K", href: "/#K" },
        { text: "L", href: "/#L" },
        { text: "M", href: "/#M" },
        { text: "N", href: "/#N" },
        { text: "O", href: "/#O" },
        { text: "P", href: "/#P" },
        { text: "Q", href: "/#Q" },
        { text: "R", href: "/#R" },
        { text: "S", href: "/#S" },
        { text: "T", href: "/#T" },
        { text: "U", href: "/#U" },
        { text: "V", href: "/#V" },
        { text: "W", href: "/#W" },
        { text: "X", href: "/#X" },
        { text: "Y", href: "/#Y" },
        { text: "Z", href: "/#Z" }
      ]
    };
  }
};
</script>


/*==========================================================================
	style
==========================================================================*/
<style lang="scss" scoped>
.mouse-direction {
  padding: 30px;

  h1 {
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
  }
}
</style>
