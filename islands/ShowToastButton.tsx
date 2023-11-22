import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";
import { useToaster } from "../hooks/useToaster.ts";

export default function ShowToastButton(props: { type: "show" | "hide" }) {
  const { showToast, hideToast } = useToaster();

  return props.type === "show"
    ? (
      <button
        class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 outline-dotted"
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
      </button>
    )
    : <button class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 outline-dotted" onClick={hideToast}>Hide Toast</button>;
}
