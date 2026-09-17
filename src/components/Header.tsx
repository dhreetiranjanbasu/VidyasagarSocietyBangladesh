"use client";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const links = [
 ["/about","About"],["/vidyasagar","Vidyasagar"],["/activities","Activities"],["/publications","Publications"],["/events","Events"],["/committee","Committee"],["/membership","Membership"],["/media","Media"],["/contact","Contact"]
];

export default function Header(){
 const [open,setOpen]=useState(false);
 return <>
  <div className="bg-[#153f33] text-white text-xs">
   <div className="container-page flex items-center justify-between py-2 gap-4">
    <span>Established 1997 · Dhaka, Bangladesh</span><span className="hidden sm:block">জ্ঞানভিত্তিক মানবিক সমাজ নির্মাণে অঙ্গীকারবদ্ধ</span>
   </div>
  </div>
  <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#fffdf9]/95 backdrop-blur">
   <div className="container-page flex h-20 items-center justify-between gap-5">
    <Link href="/" className="flex items-center gap-3 min-w-0">
      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#087a4b] text-white font-serif font-black text-lg">VS</div>
      <div className="min-w-0"><div className="font-bold text-[#087a4b] text-lg leading-tight truncate">বিদ্যাসাগর সোসাইটি বাংলাদেশ</div><div className="text-sm font-semibold tracking-wide text-[#153f33] truncate">Vidyasagar Society Bangladesh</div></div>
    </Link>
    <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-700">{links.map(([href,label])=><Link key={href} href={href} className="hover:text-[#087a4b]">{label}</Link>)}<Link href="/admin" className="rounded-full border border-[#087a4b]/30 px-4 py-2 text-[#087a4b]">Admin</Link></nav>
    <div className="flex items-center gap-2 xl:hidden"><button aria-label="Search" className="p-2"><Search size={20}/></button><button onClick={()=>setOpen(!open)} aria-label="Menu" className="p-2">{open?<X/>:<Menu/>}</button></div>
   </div>
   {open && <div className="xl:hidden border-t bg-white"><div className="container-page grid py-4">{links.map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="py-3 border-b border-slate-100">{label}</Link>)}<Link onClick={()=>setOpen(false)} href="/admin" className="py-3">Admin Demo</Link></div></div>}
  </header>
 </>
}
