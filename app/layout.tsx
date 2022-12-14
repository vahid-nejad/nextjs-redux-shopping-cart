import ProductContextProvider from "context/ProductContextProvider";
import Link from "next/link";
import "styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header className="bg-gradient-to-b from-sky-200 to-sky-50 p-2  ">
          <ul className="flex gap-10">
            <li className="text-sky-600">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-sky-600">
              <Link href={"/addProduct"}>Add Product</Link>
            </li>
          </ul>
        </header>
        <ProductContextProvider>{children}</ProductContextProvider>
      </body>
    </html>
  );
}
