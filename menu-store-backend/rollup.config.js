import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import run from '@rollup/plugin-run'

export default {
    input: 'src/app/server.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        alias({
            entries: [
                { find: '@App', replacement: '../app/' },
                { find: '@Category', replacement: '../category/' },
                { find: '@Product', replacement: '../product/' },
                { find: '@Cart', replacement: '../cart/' },
            ],
        }),
        babel({ babelrc: false, presets: ['@babel/preset-env'] }),
        run({
            execArgv: ['-r', 'dotenv/config'],
        }),
    ],
}
