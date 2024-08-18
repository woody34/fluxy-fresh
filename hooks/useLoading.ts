import { IS_BROWSER } from "$fresh/runtime.ts";
import { computed, effect, Signal, useSignal } from "@preact/signals";
import { useEffect } from "https://esm.sh/v128/preact@10.19.6/hooks";

export const useLoading = (): Signal<boolean> => {
  const networkCount = useSignal(1); // defaults to loading, client clears thisafter mounting  js that is fetched

  const loading = computed(() => {
    return networkCount.value > 0;
  });

  effect(() => console.log({ networkCount }));

  useEffect(() => {
    if (IS_BROWSER) {
      networkCount.value--;
      // @ts-expect-error testing something
      globalThis.window.loading = false;

      const fetch = globalThis.window.fetch;

      globalThis.window.fetch = async (
        input: RequestInfo | URL,
        init?: RequestInit | undefined,
      ) => {
        networkCount.value++;
        try {
          const resp = await fetch(input, init);
          return resp;
        } finally {
          networkCount.value--;
        }
      };
    }
  }, []);

  return loading;
};
