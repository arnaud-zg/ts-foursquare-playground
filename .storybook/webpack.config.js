module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.module.rules.push({
    test: /\.s?css$/,
    loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  })
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loaders: ['file-loader'],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
