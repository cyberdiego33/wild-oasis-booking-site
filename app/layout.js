// import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  title: {
    default: "Welcome - The Wild Oasis",
    template: "%s - The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

// console.log(josefin);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}
        className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
