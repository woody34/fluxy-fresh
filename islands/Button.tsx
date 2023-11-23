import { computed } from "@preact/signals";
import { FunctionComponent, JSX } from "preact";
import { useLoading } from "../hooks/useLoading.ts";
import { classNames } from "../utils/class-names.ts";

export type ButtonComponent = FunctionComponent<
  JSX.HTMLAttributes<HTMLButtonElement>
>;

const Button: ButtonComponent = (
  props,
) => {
  const loading = useLoading();
  const disabled = computed(() => {
    return props.disabled || loading.value;
  });

  return (
    <button
      {...props}
      class={classNames(
        "rounded-lg text-sm px-5 py-2.5 me-2 mb-2 outline-dotted font-medium",
        disabled.value
          ? "text-gray-50 bg-yellow-900 cursor-not-allowed"
          : "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-100",
      )}
      disabled={disabled.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
