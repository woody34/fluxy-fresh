import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";
import { useToaster } from "../hooks/useToaster.ts";
import Button from "./Button.tsx";

export default function ShowToastButton(props: { type: "show" | "hide" }) {
  const { showToast, hideToast } = useToaster();

  return props.type === "show"
    ? (
      <Button
        onClick={() => {
          function getRandomInt(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        
          const index = getRandomInt(0, 2);
          const values: ['success', 'warning', 'error'] = ['success', 'warning', 'error']
          showToast({ type: values.at(index)!, message: faker.hacker.phrase() });
        }}
      >
        Show Toast
      </Button>
    )
    : <Button onClick={hideToast}>Hide Toast</Button>;
}
