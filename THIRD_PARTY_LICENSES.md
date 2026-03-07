# Third-Party Licenses

This project uses the following third-party libraries. Their respective
licenses require attribution when distributed.

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
| vite | MIT |
| tailwindcss | MIT |
| typescript | Apache-2.0 |

## Generating Full License Texts

To generate the complete license attribution file:

### Rust (cargo-about)

```bash
cargo install cargo-about
cargo about generate about.hbs -o LICENSES_RUST.html
```

### npm (license-checker)

```bash
cd ui && npx license-checker --production --json > licenses.json
```

## License Compliance Notes

- **MIT**: Include copyright notice and license text
- **Apache-2.0**: Include copyright notice, license text, and NOTICE file if present
- **BSD-2/3-Clause**: Include copyright notice and license text
- **ISC**: Include copyright notice and license text

All listed licenses are permissive and compatible with proprietary/commercial distribution.
