import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';
import url from '@rollup/plugin-url';

export default {
    input: './pkg/rapier.js',
    output: {
        file: './dist/rapier.umd.js',
        format: 'umd',
        name: 'RAPIER',
        exports: 'named',
        globals: {
            // 如果有外部依赖，可以在这里配置
        }
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        wasm(),
        url({
            include: ['**/*.wasm'],
            limit: 0, // 总是内联 wasm 文件
            fileName: '[name][extname]'
        })
    ],
    external: [
        // 如果有需要排除的外部依赖，可以在这里列出
    ]
};