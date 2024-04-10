import { createApp } from "vue";
import App from "./app.vue";
import easy from "@easy/components";
const app = createApp(App);
app.use(easy);
app.mount("#app");
