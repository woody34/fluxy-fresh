import { useLoading } from "../hooks/useLoading.ts";

export default function Loading() {
  const loading = useLoading();

  return loading.value
    ? (
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-white bg-opacity-30 transition-opacity"
          style="backdrop-filter: blur(1px);"
        >
        </div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/ h-full w-full border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-[#86efac]" />
          </div>
        </div>
      </div>
    )
    : <></>;
}
