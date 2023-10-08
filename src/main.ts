import './style.css';
import buttonStyle from './button.module.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import imgStyle from './image.module.css';
import { setupCounter } from './counter.ts';
import img from './manja-vitolic-gKXKBY-C-Dk-unsplash.jpg';
import data from "./data.json";

const modules = import.meta.glob('./modules/*.ts')
for (const path in modules){
  modules[path]().then((module:any) =>{
    module.load();
  });
}
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <button id="btn" class="${buttonStyle}">Click!</button>
    <img id="img"/>
    <pre>${JSON.stringify(data.user)}</pre>
  </div>
`
document.getElementById('btn')!.className = buttonStyle.btn 

const imagen: any = document.getElementById('img') || undefined;
imagen.src = await img;
imagen.className = imgStyle.img;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)