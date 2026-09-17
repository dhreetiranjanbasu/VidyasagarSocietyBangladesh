import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="paper-grid overflow-hidden border-b border-emerald-900/10 bg-[#f8f3e9]">
      <div className="container-page grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="inline-flex rounded-full border border-[#087a4b]/20 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#087a4b]">
            Established in Dhaka · 1997
          </div>
          <h1 className="mt-7 max-w-4xl font-serif text-5xl font-black leading-[1.03] text-[#153f33] md:text-7xl">
            Knowledge, humanity and reform for a better society.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A digital home for Vidyasagar Society Bangladesh — bringing together education,
            scholarship, publications, culture and the enduring social ideals of Ishwar Chandra Vidyasagar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/vidyasagar"
              className="inline-flex items-center gap-2 rounded-full bg-[#087a4b] px-6 py-3 font-bold text-white transition hover:bg-[#06643e]"
            >
              Explore Vidyasagar <ArrowRight size={18} />
            </Link>
            <Link
              href="/membership"
              className="rounded-full border border-[#153f33]/20 bg-white px-6 py-3 font-bold text-[#153f33] transition hover:border-[#087a4b]/40"
            >
              Become a Member
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl bg-white p-4">
              <BookOpen className="text-[#087a4b]" />
              <b className="mt-3 block">Publications</b>
              <span className="text-slate-500">Archive & research</span>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <CalendarDays className="text-[#087a4b]" />
              <b className="mt-3 block">Events</b>
              <span className="text-slate-500">Seminars & talks</span>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <GraduationCap className="text-[#087a4b]" />
              <b className="mt-3 block">Knowledge</b>
              <span className="text-slate-500">Life & legacy</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-6 rounded-[3rem] bg-[#d98978]/20 blur-2xl" />
          <div className="heritage-card relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200">
              <Image
                src="/assets/ishwar-chandra-vidyasagar.jpg"
                alt="Ishwar Chandra Vidyasagar"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-top grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#102f27] via-[#102f27]/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-emerald-200">1820 — 1891</p>
                <h2 className="mt-2 font-serif text-3xl font-black md:text-4xl">Ishwar Chandra Vidyasagar</h2>
                <p className="mt-2 text-sm leading-6 text-white/80">Educator · Social reformer · Author · Bengal Renaissance</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 pb-3 pt-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b99245]">Honorific</p>
                <p className="mt-1 font-serif text-lg font-bold text-[#153f33]">“Ocean of Knowledge”</p>
              </div>
              <Link
                href="/vidyasagar"
                aria-label="Read about Ishwar Chandra Vidyasagar"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-[#087a4b] text-white transition hover:bg-[#06643e]"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
