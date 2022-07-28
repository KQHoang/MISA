import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import EmployeeList from './view/employees/EmployeeList.vue'
import MLoading from './components/base/MLoading.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const routers = [
    // { path: '/customer', component: customerList },
    { path: '/employee', component: EmployeeList }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: routers, // short for `routes: routes`
})
const app = createApp(App);
app.component("MLoading", MLoading);
app.use(ElementPlus);
app.use(router).mount('#app')