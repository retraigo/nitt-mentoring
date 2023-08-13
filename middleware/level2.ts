export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = await useUser();
  if (!user || user.level < 2) {
    return navigateTo(`/login?redirect=${to.fullPath}`);
  }
  const userStore = useUserStore();
  userStore.loggedIn = true;
  userStore.username = user.username;
  userStore.id = user.id;
});
