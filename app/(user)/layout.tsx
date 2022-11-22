import AppBar from "./AppBar";
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
        <AppBar />
        {children}
      </body>
    </html>
  );
}
