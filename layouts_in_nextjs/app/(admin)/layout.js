import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adminnn",
  description: "admin ki mkb",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span className="text-black"> Admin Navbar</span>
     {children}
     </>
  );
}
