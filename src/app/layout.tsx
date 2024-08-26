import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import AuthSessionProvider from "./api/auth/[...nextauth]/auth-session-provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <AuthSessionProvider>
          {children}
        </AuthSessionProvider>
        </div>
      </body>
    </html>
  );
}
