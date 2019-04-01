import Vue from 'vue'
import Router from 'vue-router'
import SlideButtonList from '@/components/SlideButtonList'
import _3DFloatButton from '@/components/3DFloatButton'

Vue.use(Router)

const router = new Router({
  // mode: 'history',

  routes: [
    {
      path: "/slide-button-list",
      name: "SlideButtonList",
      component: SlideButtonList
      // meta: {
      // 	refresh: true
      // }
    },
    {
      path: "/3d-float-button",
      name: "3DFloatButton",
			component: _3DFloatButton
      // meta: {
      // 	refresh: true
      // }
    }
  ]
});


// refresh
// router.beforeEach((to, from, next) => {
// 	if (to.meta.refresh && from.name !== null) {
// 		window.location.href = to.path;
// 		return;
// 	}
// 	if (from.meta.refresh) {
// 		window.location.href = to.path;
// 		return;
// 	}
// 	next();
// });


export default router;
