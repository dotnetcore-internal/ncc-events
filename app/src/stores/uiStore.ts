import { ref } from "vue";
import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {

  //region isMobileMode
  const isMobileMode = ref(false);

  const setMobileMode = (mobileMode: boolean) => isMobileMode.value = mobileMode;

  //endregion

  //region Locale

  const locale = ref("en");

  const setLocale = (newLocale: string) => {
    locale.value = newLocale;
  };

  //endregion

  return {
    isMobileMode,
    setMobileMode,
    locale,
    setLocale
  };
});