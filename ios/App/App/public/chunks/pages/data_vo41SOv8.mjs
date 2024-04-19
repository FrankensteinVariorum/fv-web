/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_kzB3uNQ_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_FCjAz4Rz.mjs';

const $$Astro = createAstro("https://frankensteinvariorum.github.io");
const $$Data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Data" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="primary-content" role="main"> <h1>Data</h1> <p>Machine-readable data produced during the first phase of the Frankenstein Variourm project are available for download and re-use here:</p> <p>Elisa Beshero-Bondar, Raffaele Viglianti, Rikk Mulligan, Jon Klancher, Scott Weingart, Matthew Lincoln, John Quirk, Steven Gotzler, and Avery Wiscomb. “Frankenstein Variorum” January 7, 2020. <a href="https://doi.org/10.1184/R1/c.4805868">https://doi.org/10.1184/R1/c.4805868</a>.</p> <p>As of January 2020, this collection includes two deposits:</p> <ol> <li>Collated TEI: Elisa Beshero-Bondar, Raffaele Viglianti, and Rikk Mulligan. “Frankenstein Variorum - Collations”, January 8, 2020. <a href="https://doi.org/10.1184/R1/11538798">https://doi.org/10.1184/R1/11538798</a>.</li> <li>Annotations data: Jon Klancher, John Quirk, Steven Gotzler, Avery Wiscomb, Elisa Beshero-Bondar, Raffaele Viglianti, Rikk Mulligan, Matthew Lincoln, and Scott Weingart. “Frankenstein Variorum - Annotations”. January 6, 2020. <a href="https://doi.org/10.1184/R1/11440689">https://doi.org/10.1184/R1/11440689</a>.</li> </ol> <p>See the deposit pages for more detailed descriptions and technical documentation.</p> </main> ` })}`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/data.astro", void 0);

const $$file = "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/data.astro";
const $$url = "/data";

export { $$Data as default, $$file as file, $$url as url };
