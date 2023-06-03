import "./globals.css";
import { Public_Sans } from "next/font/google";
import Sidebar from "./components/Sidebar";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Jobins",
  description: "Frontend - Design to Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
