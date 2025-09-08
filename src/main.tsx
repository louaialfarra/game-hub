// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import Router from "./routes.tsx";
const query = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={query}>
    <Provider>
      <RouterProvider router={Router} />

      <ReactQueryDevtools />
    </Provider>
  </QueryClientProvider>
);
