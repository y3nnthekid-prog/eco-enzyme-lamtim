import { MessageCircle } from "lucide-react";
import { situs, tautanWhatsApp } from "@/lib/situs";

/**
 * Tautan WhatsApp ke pendamping komunitas. Pesan pembukanya diisi lebih dulu
 * supaya warga yang gugup menghubungi tinggal menekan kirim.
 */
export function TombolWhatsApp({
  pesan,
  label,
  varian = "utama",
  className = "",
}: {
  pesan?: string;
  label?: string;
  varian?: "utama" | "garis" | "terang";
  className?: string;
}) {
  const gaya = {
    utama: "bg-[#25D366] text-[#0b3d21] hover:bg-[#1eb855]",
    garis: "bg-white text-daun-800 border-2 border-daun-300 hover:bg-daun-50",
    terang: "bg-white/95 text-daun-900 hover:bg-white",
  }[varian];

  return (
    <a
      href={tautanWhatsApp(pesan)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex max-w-full items-center gap-2.5 rounded-3xl px-6 py-3.5 font-display text-lg font-extrabold shadow-lembut transition-colors ${gaya} ${className}`}
    >
      <MessageCircle size={22} className="shrink-0" aria-hidden />
      <span>{label ?? `WhatsApp ${situs.whatsappTampil}`}</span>
      <span className="sr-only">(membuka WhatsApp di jendela baru)</span>
    </a>
  );
}
