import { BuildOptions } from "../types/types";

export function buildBabelLoader (/*{isDev}: BuildOptions*/) {
    return {
        // test: /\.tsx?$/,
        // use: 'ts-loader',
        // exclude: /node_modules/,
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options from babel.config.json
        }
      }
}