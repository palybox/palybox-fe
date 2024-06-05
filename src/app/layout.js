import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


const inter = Inter({ subsets: ["latin"] });

const chunk = localFont({ src: '../../public/fonts/ChunkyRetro.otf' })


export const metadata = {
  title: "PalyBox",
  description: "Cannabis Subscription",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
