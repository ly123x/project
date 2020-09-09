import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import IHeader from "../components/IHeader.vue";
import sidebar from "../components/sidebar.vue";
import Index from "../components/Index.vue";
import water from "../components/Water.vue";
import Electric from "../components/Electric.vue";
import wuyeHeader from "../components/wuyeHeader.vue";
import port from "../components/port.vue";
import fuel from "../components/fuel.vue";
import house from "../components/house.vue";
import analyze from "../components/analyze.vue";
import map from "../components/map.vue";
import stopcar from "../components/stopcar.vue";
import tv from "../components/TV.vue";
import role from "../components/role.vue";
import usermanager from "../components/usermanager.vue";
import open from "../components/open.vue";
import people from "../components/People.vue";
import equipment from "../components/equipment.vue";
import population from "../components/population.vue";
import homex from "../components/homex.vue";
import docotor from "../components/docotor.vue";
import message from "../components/message.vue";
import dxx from "../components/dxx.vue"
import watch from "../components/watch.vue"
import reseve from "../components/reseve.vue"
import enter from "../components/enter.vue"
import f from "../components/f.vue"
import z from "../components/z.vue"
import time from "../components/time.vue"
import enters from "../components/enters.vue"
import costselect from '../components/costselect.vue';
import note from '../components/note.vue';
import repairs from "../components/repairs.vue"
import excel from '../components/excel.vue';
import fenye from '../components/fenye.vue';
import djs from '../components/djs.vue';
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/house",
        name: "house",
        component: house,
    },
    {
        path: "/djs",
        name: "djs",
        component: djs,
    },
    {
        path: "/fenye",
        name: "fenye",
        component: fenye,
    },
    {
        path: "/excel",
        name: "excel",
        component: excel,
    },
    {
        path: "/repairs",
        name: "repairs",
        component: repairs,
    }, {
        path: "/note",
        name: "note",
        component: note,
    },
    {
        path: "/costselect",
        name: "costselect",
        component: costselect,
    },
    {
        path: "/enters",
        name: "enters",
        component: enters,
    },
    {
        path: "/time",
        name: "time",
        component: time,
    },
    {
        path: "/enter",
        name: "enter",
        component: enter,
    },
    {
        path: "/f",
        name: "f",
        component: f,
    },
    {
        path: "/z",
        name: "z",
        component: z,
    },
    {
        path: "/reseve",
        name: "reseve",
        component: reseve,
    },
    {
        path: "/watch",
        name: "watch",
        component: watch,
    },
    {
        path: "/dxx",
        name: "dxx",
        component: dxx,
    },
    {
        path: "/message",
        name: "message",
        component: message,
    },
    {
        path: "/docotor",
        name: "docotor",
        component: docotor,
    },
    {
        path: "/homex",
        name: "homex",
        component: homex,
    },
    {
        path: "/population",
        name: "population",
        component: population,
    },
    {
        path: "/equipment",
        name: "equipment",
        component: equipment,
    },
    {
        path: "/people",
        name: "people",
        component: people,
    },
    {
        path: "/open",
        name: "open",
        component: open,
    },
    {
        path: "/usermanager",
        name: "usermanager",
        component: usermanager,
    },
    {
        path: "/role",
        name: "role",
        component: role,
    },
    {
        path: "/tv",
        name: "tv",
        component: tv,
    },
    {
        path: "/stopcar",
        name: "stopcar",
        component: stopcar,
    },
    {
        path: "/map",
        name: "map",
        component: map,
    },
    {
        path: "/analyze",
        name: "analyze",
        component: analyze,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/fuel",
        name: "fuel",
        component: fuel,
    },
    {
        path: "/port",
        name: "port",
        component: port,
    },
    {
        path: "/wuyeHeader",
        name: "wuyeHeader",
        component: wuyeHeader,
    },
    {
        path: "/water",
        name: "water",
        component: water,
    },
    {
        path: "/Electric",
        name: "Electric",
        component: Electric,
    },
    {
        path: "/IHeader",
        name: "IHeader",
        component: IHeader,
    },
    {
        path: "/sidebar",
        name: "sidebar",
        component: sidebar,
    },
    {
        path: "/Index",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    // 1.如果访问的是登录页面（无需权限），直接放行
    if (to.path === '/Login') return next()
        // 2.如果访问的是有登录权限的页面，先要获取token
    const tokenStr = window.localStorage.getItem('token')
        // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
    if (!tokenStr) return next('/Login')
    next()
})


export default router;