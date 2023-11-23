import { useMemo } from "preact/hooks";
import { useToaster } from "../hooks/useToaster.ts";

export default function Toast() {
  const { state, hideToast } = useToaster();
  const { show, type, message } = state.value;

  const icon = useMemo(() => {
    switch (type) {
      case "success": {
        return (
          <svg
            class="flex-shrink-0 h-4 w-4 text-green-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        );
      }
      case "warning": {
        return (
          <svg
            class="flex-shrink-0 h-4 w-4 text-yellow-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        );
      }
      case "error": {
        return (
          <svg
            class="flex-shrink-0 h-4 w-4 text-red-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        );
      }
      default: {
        return <></>;
      }
    }
  }, [type]);

  return show
    ? (
      <div class="relative">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
          role="alert"
        >
          <div class="flex p-4 items-center gap-3">
            <div class="flex-shrink-0">
              {icon}
            </div>
            <div class="ms-3">
              <p class="text-sm text-gray-700">
                {message}
              </p>
            </div>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
              onClick={hideToast}
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
    : <></>;
}
