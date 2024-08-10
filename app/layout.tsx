import type { Metadata } from "next";
import { Inter, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
const dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wodpro League",
  description: "Website for Wodproleague",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_Sans.className}>
        <div className="bg-transparent absolute w-full">
          <Navbar />
        </div>
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
