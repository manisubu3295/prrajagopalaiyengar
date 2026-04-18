# PRR & Sons Website

Internal notes for maintaining the public-facing site.

## Asset Policy

- Use only commercial-use free-license images for generic product and showroom visuals.
- Preferred sources: Pexels, Unsplash, Pixabay.
- Do not hotlink third-party images in production pages.
- Do not copy manufacturer or distributor product photos unless the client provides official permission or files.
- Keep official client-provided assets separate from generic stock visuals when possible.

## Product Image Locations

- Electrical images: `public/images/electrical/`
- Plumbing images: `public/images/plumbing/`
- Shared source metadata: `src/content/productPageMedia.js`

## WebP Conversion

- Original downloaded JPG files may be kept for reference.
- Use WebP in page code for better page weight.
- To regenerate WebP versions, run:

```bash
npm run convert:product-images
```

## Replacement Rules

- Keep alt text accurate and product-oriented.
- If exact branded product imagery is not legally available, use generic category imagery and keep the brand reference textual only.
- Update the corresponding entry in `src/content/productPageMedia.js` with:
  - source platform
  - source URL
  - short fit note