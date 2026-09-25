import type { Metadata } from "next";
import { Download, ExternalLink, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "207th Birthday Program",
  description:
    "Official program booklet for the 207th birth anniversary celebration of Ishwar Chandra Vidyasagar and Vidyasagar Society Bangladesh's 30th anniversary observance.",
};

const pdfUrl = "/documents/vidyasagar-207th-birthday-program-2026.pdf";

export default function BirthdayProgramPage() {
  return (
    <main className="bg-[#f8f3e9]">
      <section className="border-b border-[#153f33]/10 bg-white">
        <div className="container-page flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#153f33] text-white">
              <FileText size={24} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#b99245]">
                Vidyasagar Society Bangladesh
              </div>
              <h1 className="mt-1 font-serif text-2xl font-black text-[#153f33] md:text-3xl">
                207th Birthday Program
              </h1>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                207th Birth Anniversary of Ishwar Chandra Vidyasagar · Program Booklet 2026
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#087a4b]/25 bg-white px-5 py-2.5 text-sm font-bold text-[#087a4b] transition hover:border-[#087a4b]/50 hover:bg-emerald-50"
            >
              <ExternalLink size={17} />
              Open full screen
            </a>
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[#087a4b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#06633d]"
            >
              <Download size={17} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-6 md:py-8">
        <div className="overflow-hidden rounded-[1.4rem] border border-[#153f33]/10 bg-white shadow-[0_18px_60px_rgba(21,63,51,.12)]">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title="207th Birthday Program PDF Viewer"
            className="block h-[72vh] min-h-[620px] w-full bg-slate-100 md:h-[82vh]"
          />

          <div className="border-t border-slate-200 bg-[#fffdf9] px-5 py-4 text-sm leading-6 text-slate-600">
            If your browser does not display the PDF inside this page, use{" "}
            <a href={pdfUrl} target="_blank" rel="noreferrer" className="font-bold text-[#087a4b] underline underline-offset-4">
              Open full screen
            </a>{" "}
            or download the document.
          </div>
        </div>
      </section>
    </main>
  );
}
