export function EmergencyBadge({ available247 = true }: { available247?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
      <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
      {available247 ? "24/7 Emergency Service" : "Emergency Service Available"}
    </span>
  );
}
