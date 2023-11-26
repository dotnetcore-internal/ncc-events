import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";

const baseRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue")
    },
    {
        path: "/meetups",
        name: "meetups",
        component: () => import("../views/MeetupsView.vue")
    },
    {
        path: "/meetups/page/:pageNo",
        name: "meetups-page",
        component: () => import("../views/MeetupsPage.vue")
    },
    {
        path: "/items",
        name: "items",
        component: () => import("../views/EventView.vue")
    },
    {
        path: "/items/page/:pageNo",
        name: "items-page",
        component: () => import("../views/EventView.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "all",
        component: () => import("../views/Page404.vue")
    }
];

//const routes = baseRoutes;//.concat(peopleRoutes, projectRoutes, mediaRoutes, ruleRoutes, aboutRoutes);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: baseRoutes
});

export default router;
