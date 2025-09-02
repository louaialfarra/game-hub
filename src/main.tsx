// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const query = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <Provider>
      <App />
      <ReactQueryDevtools />
    </Provider>
  </QueryClientProvider>
);
