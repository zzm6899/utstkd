# Scripts

Choose the script for the job you're doing:

- `license-tools.cmd`
  Windows interactive menu for status, keypair creation, customer license generation, and build.
- `license-console.mjs`
  Run license commands from the terminal.
- `publish-update-release.mjs`
  Upload a built Windows/macOS release into the hosted update admin service and register it.
- `setup-windows.cmd`
  Install dependencies, start dev mode or build the Windows app.

To issue customer licenses:

1. Run `scripts\license-tools.cmd`
2. Choose `Create signing keypair` once
3. Build the app
4. Generate customer licenses whenever needed

Important:

- Keep `scripts\license-keys\private.pem` secret.
- Keep using the same `private.pem` so newly issued customer licenses work with your existing EXE.
- If you replace the keypair, build and ship a new EXE.
- Use `npm run update:publish -- ...` after CI or local release builds to register a hosted update with `admin.culler.z2hs.au`.
- The hosted update-admin image is published to `ghcr.io/zzm6899/photo-importer-update-admin:latest` by `.github/workflows/publish-update-admin-image.yml`.
