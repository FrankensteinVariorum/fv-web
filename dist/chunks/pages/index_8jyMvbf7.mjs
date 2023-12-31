import '@astrojs/internal-helpers/path';
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, g as renderHead, h as renderSlot, A as AstroError, i as ExpectedImageOptions, E as ExpectedImage, j as InvalidImageService, k as ImageMissingAlt, m as maybeRenderHead, e as addAttribute, s as spreadAttributes } from '../astro_kzB3uNQ_.mjs';
import 'kleur/colors';
import { b as $$ViewTransitions, c as $$Nav, d as $$Footer, s as sources, a as slugify } from './404_FCjAz4Rz.mjs';
/* empty css                          */
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_LaJ9zxTi.mjs';

const $$Astro$3 = createAstro("https://frankensteinvariorum.github.io");
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`<html lang="en_US"> <head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title></title><link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/ico" href="/favicon.ico">${renderHead()}</head> <body class="home"> ${renderComponent($$result, "Nav", $$Nav, { "layout": "home" })} <div id="content-area"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/layouts/Home.astro", void 0);

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_LaJ9zxTi.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$2 = createAstro("https://frankensteinvariorum.github.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/node_modules/.pnpm/astro@4.0.8_@types+node@20.4.5_typescript@5.1.6/node_modules/astro/components/Image.astro", void 0);

const $$Astro$1 = createAstro("https://frankensteinvariorum.github.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/node_modules/.pnpm/astro@4.0.8_@types+node@20.4.5_typescript@5.1.6/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/Admin/Documents/Github/fv/fv-web2023/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const FronticepieceImage = new Proxy({"src":"/_astro/fronticepiece.231JgM1G.jpg","width":970,"height":1300,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro = createAstro("https://frankensteinvariorum.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const start = `/viewer/${sources.find((s) => s.label == "1818").label}/${slugify(sources.find((s) => s.label == "1818").units[0].label)}`;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div id="epigraph">
Did I request thee, Maker, from my clay<br>
To mould me man?  Did I solicit thee<br>
From darkness to promote me? — <span class="epigraph-source">PARADISE LOST</span> </div> <div id="home-title"> <div class="attribution">Mary Shelley’s</div> <h1>Frankenstein</h1> <div class="subtitle">A Digital Variorum Edition</div> </div> <div id="home-cta" class="btn"> <a${addAttribute(start, "href")} title="Use the Variorum Viewer">Variorum Viewer</a> </div> </section> <aside id="fronticepiece"> ${renderComponent($$result2, "Image", $$Image, { "src": FronticepieceImage, "alt": "Fronticepiece Image", "width": 950, "format": "jpg" })} </aside> ` })}`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
