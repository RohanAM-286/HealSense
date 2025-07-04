import "./globals.css";
import { Toaster } from "@/components/ui/toaster"; // ✅ this is auto-generated by shadcn

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster /> {/* ✅ This sets up the toast context properly */}
      </body>
    </html>
  );
}


