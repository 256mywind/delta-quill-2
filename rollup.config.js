import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
  input: path.join(__dirname, 'src', 'Delta.ts'),
  output: {
    dir: path.join(__dirname, 'dist'),
    format: 'cjs',
    exports: 'auto',
    sourcemap: true,
  },
  plugins: [typescript()],
};
