import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Akordeon memakai <details>/<summary> asli browser: tanpa JavaScript,
 * bisa dipakai lewat keyboard, dan ikut tercetak saat halaman diprint.
 */
export function Akordeon({ children }: { children: ReactNode }) {
  return <div className="grid gap-3">{children}</div>;
}

const gayaLencana = {
  aman: {
    kelas: "bg-daun-100 text-daun-800",
    label: "Aman, tidak perlu diperbaiki",
  },
  perbaiki: {
    kelas: "bg-surya-100 text-surya-800",
    label: "Perlu sedikit perbaikan",
  },
  bahaya: {
    kelas: "bg-red-100 text-red-800",
    label: "Harus segera diperbaiki",
  },
  polos: { kelas: "", label: "" },
} as const;

export function ItemAkordeon({
  tanya,
  lencana = "polos",
  children,
}: {
  tanya: string;
  lencana?: keyof typeof gayaLencana;
  children: ReactNode;
}) {
  const l = gayaLencana[lencana];
  return (
    <details className="group rounded-3xl border-2 border-daun-100 bg-white open:border-daun-300 open:shadow-lembut">
      <summary className="flex cursor-pointer list-none items-start gap-3 p-5 font-display text-lg font-extrabold text-daun-900 hover:bg-daun-50 group-open:rounded-t-3xl [&::-webkit-details-marker]:hidden">
        <ChevronDown
          size={24}
          className="mt-0.5 shrink-0 text-daun-600 transition-transform group-open:rotate-180"
          aria-hidden
        />
        <span className="flex-1">
          {tanya}
          {lencana !== "polos" && (
            <span
              className={`mt-2 block w-fit rounded-full px-3 py-1 text-xs font-extrabold tracking-wide uppercase ${l.kelas}`}
            >
              {l.label}
            </span>
          )}
        </span>
      </summary>
      <div className="border-t-2 border-daun-100 px-5 py-5 pl-14 text-tinta-lembut">
        {children}
      </div>
    </details>
  );
}
