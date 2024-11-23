import {ModuleOptions} from "webpack"
import { BuildOptions } from "./types/type"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import test from "node:test"
import loader from "mini-css-extract-plugin/types/loader"
import ReactRefreshTypeScript from "react-refresh-typescript"
import { buildBabelLoaders } from "./babel/buildBabelLoader"


export function buidLoaders(options: BuildOptions): ModuleOptions['rules']{
   const isDev = options.mode === 'development'
    

   const assetLoader = {
    
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    
   }

   const svgLoader ={
      test: /\.svg$/i,
      use: [
        {
          loader:'@svgr/webpack',
          options:{
            icon: true,
            svgoConfig: {
              plugins:[
                {
                  name:'convertColors',
                  params:{
                    currentColor: true,
                  }
                }
              ]
            }
          }
      }],
   }

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
      localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
    }
    },
  }

   const scssLoader = {

    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
   }

  //  const tsLoader = {
    
  //     test: /\.tsx?$/,
  //     use: 'ts-loader',
  //     exclude: /node_modules/,
  
  //  }
  const  tsLoader =  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          })
        }
      }
    ]
  }
   
  const babelLoader =  buildBabelLoaders(options)

    return[
        assetLoader,
         scssLoader,
          tsLoader,
          svgLoader,
          babelLoader
    ]
}