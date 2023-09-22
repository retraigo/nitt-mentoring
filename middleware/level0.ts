export default defineNuxtRouteMiddleware(async (to, _from) => {
  try {
    const user = await useUser();
    console.log(user)
    if (!user) {
      return navigateTo(`/login?redirect=${to.fullPath}`);
    }
    const userStore = useUserStore();
    userStore.loggedIn = true;
    userStore.username = user.username;
    userStore.id = user.id;
    userStore.level = user.level;
  } catch (e) {
    return navigateTo(`/login?redirect=${to.fullPath}`);
  }
});