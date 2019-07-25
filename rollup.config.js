import banner from 'rollup-plugin-banner';

export default {
  input: './src/qrcode.js',
  output: [
    {
        file: './build/qrcode.umd.js',
        format: 'umd',
        name: 'qrcodejs'
    }
  ],
  plugins: [
    banner('qrcodejs v<%= pkg.version %> by <%= pkg.author %>'),
  ]
};