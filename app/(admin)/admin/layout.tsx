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
        <div className="bg-violet-100 text-emerald-400 p-2">Admin Panel</div>
        {children}
      </body>
    </html>
  );
}
