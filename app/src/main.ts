import {createApp} from "vue";
import {createPinia} from "pinia";
import {getLocaleFromCookie} from "@/hooks/usePageToolkits";
import {toSetOrLoadLanguage} from "@/hooks/useLocaleToolkits";
import {setupI18n} from "@/i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/app.css";
import './main.css'
import "./markdown.css";
import "./markdown-highlight.css";
import 'animate.css'

const i18n = setupI18n();

router.beforeEach(async (to, from, next) => {
    const locale = getLocaleFromCookie();

    await toSetOrLoadLanguage(i18n, locale, to.path);

    return next();
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.provide("$i18n", i18n);
app.use(router);

app.mount("#App");
