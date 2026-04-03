import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Berman Blikk | Blikkenslager og taktekker i Oslo",
  description:
    "Enkeltpersonforetak med svennebrev innen ventilasjon og blikkenslager. Takstein, takplater, beslag, ventilasjon og mer. Tjenester i hele Oslo og omegn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
