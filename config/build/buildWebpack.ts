import webpack from "webpack"
 import { buildDevServer } from "./buildDevServer"
 import { buidLoaders } from "./buildLoaders"
import { buildPlagins } from "./buildPlagins"
import { BuildOptions } from "./types/type"
import { buildResorvers } from "./buildResolvers"

export function buildWebpack(options: BuildOptions): webpack.Configuration { 
  const {mode, paths} = options
   const isDev =  mode === 'development'
  
    return {
        
    mode:  mode ?? 'development',
    entry: paths.entry,
    output: {
        path: paths.output,
        filename: '[name].[contenthash].js',
        clean: true
    },
    plugins:  buildPlagins(options),
    module: {
        rules:  buidLoaders(options),
      },
      resolve: 
           buildResorvers(options),
    
      devtool: isDev ? 'inline-source-map': 'sourse-map' ,
      devServer: isDev ? buildDevServer(options): undefined
    
  
    }
  }