import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer(){return <footer className="mt-24 bg-[#153f33] text-white">
 <div className="container-page grid gap-10 py-14 md:grid-cols-4">
  <div className="md:col-span-2"><div className="text-2xl font-bold text-emerald-200">বিদ্যাসাগর সোসাইটি বাংলাদেশ</div><div className="mt-1 text-lg font-semibold">Vidyasagar Society Bangladesh</div><p className="mt-4 max-w-xl text-sm leading-7 text-white/70">Committed to education, humanism, Bengali language and culture, interfaith harmony and social progress inspired by Ishwar Chandra Vidyasagar.</p></div>
  <div><h3 className="font-bold">Quick links</h3><div className="mt-4 grid gap-2 text-sm text-white/70"><Link href="/vidyasagar">Knowledge Centre</Link><Link href="/publications">Publications</Link><Link href="/events">Events</Link><Link href="/membership">Membership</Link></div></div>
  <div><h3 className="font-bold">Contact</h3><div className="mt-4 grid gap-3 text-sm text-white/70"><span className="flex gap-2"><Phone size={16}/>+8801711423913</span><span className="flex gap-2"><Mail size={16}/>vidyasagarsocietyb@gmail.com</span><span className="flex gap-2"><MapPin size={16}/>Mohammadpur, Dhaka-1207</span></div></div>
 </div>
 <div className="border-t border-white/10"><div className="container-page flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:justify-between"><span>© 2026 Vidyasagar Society Bangladesh — Demo website.</span><span>Client demo · Verify all content before production.</span></div></div>
 </footer>}
