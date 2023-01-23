import { createApp } from "vue"
import App from "@/components/app/App.vue"
import uiComponents from "./components/ui-components"
import "./index.css"

const app = createApp(App)
uiComponents.map((component) => app.component(component.name, component))
    // bu kodni yozganimizdan song uiComponentimiz global bolib qoladi, endi agar biz child componentlarda shunchaki uicomponent
    //ichidagi componentlarni nomini yozsa import qilinmasdan ham ishlatsa boladi, chunki biz bulani
    // mainga import qilib qoyhanmiz.

app.mount("#app")