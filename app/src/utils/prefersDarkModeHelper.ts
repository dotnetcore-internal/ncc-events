const mediaQueryName = "(prefers-color-scheme: dark)";

let prefersDarkMode = false;

export const initPrefersDarkMode: (nextCallback: (pdm: boolean) => void) => void = (nextCallback) => {

  prefersDarkMode = window.matchMedia(mediaQueryName).matches;
  nextCallback(prefersDarkMode);

  const media = window.matchMedia(mediaQueryName);

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", e => {
      prefersDarkMode = e.matches;
      nextCallback(prefersDarkMode);
    });
  } else if (typeof media.addListener === "function") {
    media.addListener(e => {
      prefersDarkMode = e.matches;
      nextCallback(prefersDarkMode);
    });
  }
};