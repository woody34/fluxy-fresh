import { Signal, useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const useLoading = (): Signal<boolean> => {
  const loading = useSignal(true);

  if (IS_BROWSER) {
    globalThis.window.document.addEventListener("readystatechange", (event) => {
      switch((event.target as Document).readyState) {
        case 'loading': {
          loading.value = true
          break
        }
        case 'complete': {
          loading.value = false
          break
        }
      }
    });
    
  }
  globalThis.window.addEventListener("beforeunload", () => {
    console.log('beforeunload', loading.value)
    loading.value = true;
  });

  return loading || globalThis.window.document.readyState === 'complete';
};
