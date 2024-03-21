import { Roboto_Serif } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";

export const roboto = Roboto_Serif({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--roboto",
});
export const dm_sans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--dm-sans",
});

export const metadata = {
  title: "Canvix Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
