import { AppProps } from "$fresh/server.ts";
import Toast from "../islands/Toast.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fluxy-fresh</title>
      </head>
      <body>
        <Component />
        <Toast />
      </body>
    </html>
  );
}
