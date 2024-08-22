import { Inter } from "next/font/google";
import Maison_Neue_Mono from "next/font/local";
import "./globals.css";
import '@/app/style/style.css'

const inter = Inter({ subsets: ["latin"] });
const maisonmono = Maison_Neue_Mono({ src: './maison/Maison_Neue_Bold.ttf' });

export const metadata = {
  title: "PrismMotion",
  description: "PrismMotion is a premier video editing agency that transforms your vision into captivating videos. We specialize in tailored editing solutions that enhance your brand’s storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maisonmono.className} bg-custom-bg dotted-background`}>
        {children}
      </body>
    </html>
  );
}
