/*==========================================================================
	template
==========================================================================*/
<template>
  <a class="float" href="#" @mousemove="mousemove" @mouseleave="mouseleave">
    <img ref="target" src="static/assets/img/img03.jpg" alt>
	</a>
</template>


/*==========================================================================
	script
==========================================================================*/
<script>
import * as utils from "../assets/js/utils";


export default {
  // name: "3DFloatButton",

  /**
   * methods
   */
  methods: {
    mousemove: function(event) {
			let offset = utils.getNormalizeOffset(event);
			this.$refs.target.style.setProperty("--rotate-x", offset.x / 1500);
			this.$refs.target.style.setProperty("--rotate-y", -offset.y / 1500);
			this.$refs.target.style.setProperty("--scale-x", 0.85);
			this.$refs.target.style.setProperty("--scale-y", 0.85);
		},

    mouseleave: function(event) {
			this.$refs.target.style.setProperty("--rotate-x", 0);
			this.$refs.target.style.setProperty("--rotate-y", 0);
			this.$refs.target.style.setProperty("--scale-x", 1);
			this.$refs.target.style.setProperty("--scale-y", 1);
    }
  }
};
</script>

/*==========================================================================
	style
==========================================================================*/
<style lang="scss" scoped>
.float {
	// overflow: hidden;
	display: block;
  max-width: 400px;
  margin: 0 auto;
  background: #222;
	perspective: 400px;

  img {
    max-width: 100%;
    width: 100%;
		transition: transform 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000);

		// defaults
		--scale-x: 1;
		--scale-y: 1;
		--rotate-x: 0;
		--rotate-y: 0;

		transform: matrix3d(
			var(--scale-x), 0, 0, var(--rotate-x),
			0, var(--scale-y), 0, var(--rotate-y),
			0, 0, 1, 0,
			0, 0, 0, 1
		);
  }
}
</style>
