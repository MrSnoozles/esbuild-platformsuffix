const { build } = require('esbuild')
const platformSuffixPlugin = require('./plugins/PlatformSuffixPlugin');

build({
  entryPoints: ['./src/app.js'],
  outfile: './out.js',
  minify: true,
  bundle: true,
  plugins: [platformSuffixPlugin]
}).catch(() => process.exit(1))