import { createWebHistory, createRouter } from 'vue-router';
// import axios from 'axios';
import routes from './routes';
import appConfig from "../../app.config";
import store from '@/state/store';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

router.beforeEach(async (routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);

  const hasAccessToken = localStorage.getItem("access_token");

  if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
    if (authRequired) {
      if (hasAccessToken) {
        try {
          const validUser = await store.dispatch('auth/validate');
          validUser ? next() : redirectToLogin();
        } catch (error) {
          redirectToLogin();
        }
      } else {
        redirectToLogin();
      }
    } else {
      next();
    }
  } else {
    // const publicPages = ['/login', '/register', '/forgot-password',];
    // const authpage = !publicPages.includes(routeTo.path);
    // if (authpage && !hasAccessToken) {
    //   return next('/login');
    // }

    next();
  }

  function redirectToLogin() {
    next({ name: 'login', query: { redirectFrom: routeTo.fullPath } });
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              next(...args);
              reject(new Error('Redirected'));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    }
    document.title = routeTo.meta.title + ' | ' + appConfig.title;
    next();
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
  }
});

export default router;
