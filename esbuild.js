import esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['js/main.js'],
        outfile: 'dist/flair.js',
        bundle: true,
        sourcemap: true,
        minify: true,
        splitting: false,
        format: 'esm',
        target: ['esnext'],

        ignoreAnnotations: true,
    })
    .catch(() => process.exit(1));
