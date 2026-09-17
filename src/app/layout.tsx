import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: { default:"Vidyasagar Society Bangladesh", template:"%s | Vidyasagar Society Bangladesh" }, description:"Education, humanism, research, publications and social reform inspired by Ishwar Chandra Vidyasagar." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
