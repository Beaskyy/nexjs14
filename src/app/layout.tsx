import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.js Tutorial - codevolution",
    template:"%s | codevolution",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
