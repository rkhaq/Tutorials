/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  // modifyVars: { '@primary-color': '#04f' },
  // Or better still you can specify a path to a file
  lessVarsFilePath: './src/styles/variables.less',
  // optional
  // lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {
  //   // ...
  //   mode: 'local',
  //   exportLocalsConvention: 'camelCase',
  //   exportOnlyLocals: false,
  //   // ...
  //   getLocalIdent: (context, localIdentName, localName, options) => {
  //     return 'whatever_random_class_name';
  //   },
  // },

  // nextjs: {
  //   localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  // },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  // Other Config Here...
  nextConfig,
  webpack(config) {
    return config
  },
})
