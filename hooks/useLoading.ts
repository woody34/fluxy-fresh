import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal, useSignal } from "@preact/signals";

export const useLoading = (): Signal<boolean> => {
  const loading = useSignal(false);

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

  globalThis.window.onpagehide = () => {
    loading.value = true;
  };

  globalThis.window.addEventListener("beforeunload", () => {
    loading.value = true;
  });

  const fetch = globalThis.window.fetch;
  globalThis.window.fetch = async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => {
    try {
      loading.value = true;
      const resp = await fetch(input, init);
      return resp;
    } catch (e) {
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return loading;
};
