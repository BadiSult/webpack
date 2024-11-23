import { Configuration } from "webpack";
import { BuildOptions } from "./types/type";

export function buildResorvers(options:BuildOptions): Configuration['resolve']{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        }
    }
}