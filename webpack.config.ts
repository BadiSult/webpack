import  path from 'path';
import  webpack from 'webpack';
type Mode = 'production' | 'development'
 
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPath, BuildPlatform } from './config/build/types/type';



interface EvnVariables {
  mode?:BuildMode,
  analyzer?: Boolean,
  port?: number,
  platform?: BuildPlatform
}

 export default (env: EvnVariables) => {
const paths: BuildPath ={
  output: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  public: path.resolve(__dirname, 'public',  ),
  src: path.resolve(__dirname, 'src')
}
   

  const config: webpack.Configuration =  buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop'
  })
    return  config
}