import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/types";
import { buildBabelLoader } from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';
    
    const assteLoader =        {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      };

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            { 
                loader: '@svgr/webpack',
                options: { 
                    icon: true 
                } 
            }
        ],
      };

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
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options from babel.config.json
        }
      }

     const babelLoader = buildBabelLoader();
      
    const tsLoader = {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
          }
        }
      ]
    } 
    return [
        assteLoader,
        scssLoader,
        jsxLoader,
        svgrLoader,
      ]
}