import {createApp} from 'vue'
import {ScxComponent} from "scx-ui/scx-component.js";
import {ScxFSS, ScxReq} from "scx-ui";
import 'scx-ui/_scx-theme/default.css'
import 'scx-ui/_scx-theme/dark.css'
import './style.css'
import App from './App.vue'

const scxReq = new ScxReq("http://127.0.0.1:8080");

const scxFss = new ScxFSS(scxReq);

createApp(App)
    .use(ScxComponent)
    .use(scxFss)
    .mount('#app');
