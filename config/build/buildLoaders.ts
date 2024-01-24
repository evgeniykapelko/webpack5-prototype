import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';
    
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
    };
    
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          cssLoaderWithModules,
          // Compiles Sass to CSS
          "sass-loader",
        ],
      };
    const jsxLoader = {
        // test: /\.tsx?$/,
        // use: 'ts-loader',
        // exclude: /node_modules/,
        test: /\.(js|jsx)$/, // Регулярное выражение для файлов .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Пресеты для Babel
          }
        }
      }
    return [
        scssLoader,
        jsxLoader,
      ]
}