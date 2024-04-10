import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components as Record<string, any>) {
      app.use((components as Record<string, any>)[c]);
    }
  },
};
