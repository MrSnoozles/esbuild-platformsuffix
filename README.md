# Installation

* `npm install`
* `npm run build`

## What it does

Runs esbuild.config.js to start the esbuild bundling process. In the esbuild config we define, that we should use the `PlatformSuffixPlugin`.

This is a plugin for esbuild, that intercepts loading of files and checks if a platform specific file exists. If a platform specific file exists this file is loaded instead.