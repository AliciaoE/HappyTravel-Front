import "./globals.css";
import Header from "@/components/Header"; 
import {  Jaldi } from 'next/font/google';

const jaldi = Jaldi({ // Define las opciones de la fuente Jaldi
  subsets: ['latin'],
  weight: ['400', '700'], // Por ejemplo, pesos de fuente 400 y 700
  variable: '--font-jaldi',
  display: 'swap',
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jaldi.className}>
        <Header/>
      {children}
      </body>
    </html>
  );
}