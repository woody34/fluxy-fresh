import { AppProps } from "$fresh/server.ts";
import Loading from "../islands/Loading.tsx";
import Toast from "../islands/Toast.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html class="h-full bg-white">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fluxy-fresh</title>
      </head>
      <body class="h-full">
        <Component />
        <Loading />
        <Toast />
      </body>
    </html>
  );
}
