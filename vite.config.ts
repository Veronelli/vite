import { defineConfig, loadEnv } from "vite";

export default defineConfig(({command, mode}) => {
    const port = 3000;
    const env = loadEnv(mode, process.cwd());
    if(mode === "development"){
        console.log("modo desarrollo");
    }
    else{
        console.log("modo produccion");
    }

    return {
        server: {
            port
        }
    }
});