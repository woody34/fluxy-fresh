import { useStore } from "https://deno.land/x/fluxy@0.0.10/mod.ts";

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
  const { state, setState, resetState, updateState } = useStore(
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
    updateState({ show: false });
  };

  return {
    state,
    showToast,
    hideToast,
  };
};
