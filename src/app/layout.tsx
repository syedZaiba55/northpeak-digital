import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Digital Heroes | Digital Solutions & Web Development",
  description:
    "Digital Heroes builds modern websites, UI/UX designs, and innovative digital solutions to help businesses grow online.",
  keywords: [
    "Web Development",
    "UI UX Design",
    "Digital Solutions",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}