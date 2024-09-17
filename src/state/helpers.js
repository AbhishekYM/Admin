import { mapState, mapGetters, mapActions } from 'vuex';

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
};

export const layoutComputed = {
  ...mapState('layout', {
    layoutType: (state) => state.layoutType,
    sidebarSize: (state) => state.sidebarSize,
    layoutWidth: (state) => state.layoutWidth,
    topbar: (state) => state.topbar,
    mode: (state) => state.mode,
    position: (state) => state.position,
    sidebarView: (state) => state.sidebarView,
    sidebarColor: (state) => state.sidebarColor,
    sidebarImage: (state) => state.sidebarImage,
    layoutTheme: (state) => state.layoutTheme,
    preloader: (state) => state.preloader,
  })
};

export const authMethods = mapActions('auth', ['logIn', 'logOut', 'register', 'resetPassword']);

export const layoutMethods = mapActions('layout',
  ['changeLayoutType', 'changeLayoutWidth', 'changeSidebarSize', 'changeTopbar', 'changeMode', 'changePosition', 'changeSidebarView',
    'changeSidebarColor', 'changeSidebarImage', 'changePreloader', 'changeThemes']);

export const authFackMethods = mapActions('authfack', ['login', 'registeruser', 'logout']);

export const notificationMethods = mapActions('notification', ['success', 'error', 'clear']);