import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal, useSignal } from "@preact/signals";

export const useLoading = (): Signal<boolean> => {
  const loading = useSignal(true);

  if (IS_BROWSER) {
    globalThis.window.document.addEventListener("readystatechange", (event) => {
      switch ((event.target as Document).readyState) {
        case "loading": {
          loading.value = true;
          break;
        }
        case "complete": {
          loading.value = false;
          break;
        }
      }
    });
  }

  globalThis.window.onerror = () => {
    loading.value = false;
  };

  globalThis.window.onpageshow = () => {
    loading.value = false;
  };

  globalThis.window.addEventListener("beforeunload", () => {
    loading.value = true;
  });

  return loading;
};
