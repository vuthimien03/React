import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductContextProvider from "./context/ProductContextProvider";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShoppingContextProvider } from "./context/CartContext";
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <ShoppingContextProvider>
            <ProductContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ProductContextProvider>
        </ShoppingContextProvider>

    </QueryClientProvider>
);

/**
 * - hướng dẫn cài đặt react sử dụng vitejs
 * npm create vite@latest react-vite -- --template react-ts
 *
 */