import { createApp } from "./main";

const { app, router, head } = createApp();
app.use(head);

router.isReady().then(() => {
  app.mount("#app");
});
