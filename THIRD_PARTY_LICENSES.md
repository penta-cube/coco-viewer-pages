# Third-Party Licenses

This project uses the following third-party libraries. Their respective
licenses require attribution when distributed.

> This file is a human-readable inventory, not a complete distribution notice.
> The Embed release pipeline generates `licenses/THIRD_PARTY_NOTICES.txt` from
> the exact npm installation and Cargo.lock-resolved WASM dependency graph.

## Rust Dependencies (compiled into WASM)

| License | Packages |
|---------|----------|
| MIT OR Apache-2.0 | wasm-bindgen, wgpu, serde, regex, image, png, nalgebra, rstar, and others |
| MIT | serde-wasm-bindgen, nom, tiff, rgb, and others |
| Apache-2.0 | ab_glyph, spirv, simba, approx, and others |
| BSD-3-Clause | nalgebra, tiny-skia, exr, and others |
| BSD-2-Clause | arrayref, av1-grain, and others |
| ISC | earcutr, libloading |
| Zlib | bytemuck, slotmap |

## JavaScript Dependencies (bundled by Vite)

| Package | License |
|---------|---------|
| react | MIT |
| react-dom | MIT |
| lucide-react | ISC |
| ajv standalone generated validator code | MIT |
| vite | MIT |
| tailwindcss | MIT |
| typescript | Apache-2.0 |

## Generating Product Distribution Notices

```bash
cd ui
npm run build:embed-release
```

The generated archive includes package/version/license metadata and available
upstream LICENSE/COPYING/NOTICE text for bundled JavaScript, Ajv-generated code,
and the `wasm_viewer` Cargo dependency closure.

## License Compliance Notes

- **MIT**: Include copyright notice and license text
- **Apache-2.0**: Include copyright notice, license text, and NOTICE file if present
- **BSD-2/3-Clause**: Include copyright notice and license text
- **ISC**: Include copyright notice and license text

Final distribution approval remains a product/legal review responsibility.
