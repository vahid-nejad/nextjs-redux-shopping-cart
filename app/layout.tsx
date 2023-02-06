import CartButton from "components/CartButton";
import Providers from "components/Providers";
import Link from "next/link";
import "styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <header className="bg-gradient-to-b from-sky-200 to-sky-50 p-2 flex border shadow ">
            <ul className="flex gap-10">
              <li className="text-sky-600">
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
            <Link className="ml-auto mr-6" href={"/cart"}>
              <CartButton />
            </Link>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
