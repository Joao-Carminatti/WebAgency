import { site } from "@/config/site";
import { services } from "@/data/services";
export default function sitemap() {
  const paths = ["", "/sobre", "/contato", "/politica-de-privacidade", "/termos", ...services.map((s) => `/servicos/${s.slug}`)];
  return paths.map((p) => ({ url: site.url + p, lastModified: new Date() }));
}
