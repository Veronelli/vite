import { defineConfig, loadEnv } from "vite";
import {resolve} from "path";

export default defineConfig(({command, mode}) => {
    const port = 3000;
    const env = loadEnv(mode, process.cwd());
    if(mode === "development"){
        console.log("modo desarrollo");
        return {
            server: {
                port
            }
        }
        }
    else{
        return {
            build: {
                lib:{
                    entry: resolve(__dirname, "lib", "main.ts"),
                    name: "demo",
                    fileName: (format)=>`demo.${format}.ts`
                }
            }
        }
    }
});