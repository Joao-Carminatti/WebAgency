import { site } from "@/config/site";
// Troque por <svg> do logo quando existir.
export function Logo() { return <span className="font-display text-xl font-bold">{site.name}</span>; }
