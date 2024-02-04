import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Devscale App",
  description: "Beautifully made using DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
