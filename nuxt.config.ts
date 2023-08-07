// https://nuxt.com/docs/api/configuration/nuxt-config
import { app } from "./config";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app,
});
