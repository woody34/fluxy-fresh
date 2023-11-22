import { useStore } from "https://deno.land/x/fluxy/mod.ts";

export interface ToastState {
  show: boolean;
  type: "success" | "warning" | "error";
  message: string;
}

const defaultToastState = (): ToastState => ({
  show: false,
  type: "success",
  message: "",
});

export const useToaster = () => {
  const { state, setState, resetState } = useStore(
    "toast-notification",
    defaultToastState,
  );

  const showToast = (
    { type, message }: Pick<ToastState, "message" | "type">,
  ) => {
    if (state.value.show) {
      resetState();
    }
    setState({
      show: true,
      type,
      message,
    });
  };

  const hideToast = () => {
    resetState();
  };

  return {
    state,
    showToast,
    hideToast,
  };
};
