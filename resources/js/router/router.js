import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../components/frontend/home.vue')

    }, {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../components/frontend/about.vue')
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../components/backend/dashborad.vue')
    }, {
        path: '/categories',
        name: 'categories',
        component: () =>
            import ('../components/backend/category/categories.vue')


    }, {
        path: '/add-category',
        name: 'add-category',
        component: () =>
            import ('../components/backend/category/create.vue')


    },
    {
        path: '/edit-category/:id',
        name: 'edit-category',
        component: () =>
            import ('../components/backend/category/edit.vue')


    },

    {
        path: '/employees',
        name: 'employees',
        component: () =>
            import ('../components/backend/employees/index.vue')


    },
    {
        path: '/edit-emlpoyee/:id',
        name: 'edit-emlpoyee',
        component: () =>
            import ('../components/backend/employees/edit.vue')

    },
    {
        path: '/add-emlpoyee',
        name: 'add-emlpoyee',
        component: () =>
            import ('../components/backend/employees/create.vue')


    }, {
        path: '/posts',
        name: 'posts',
        component: () =>
            import ('../components/backend/post/index.vue')


    },

    {
        path: '/add-post',
        name: 'add-post',
        component: () =>
            import ('../components/backend/post/create.vue')


    }, {
        path: '/edit-post/:id',
        name: 'edit-post',
        component: () =>
            import ('../components/backend/post/edit.vue')


    }, {
        path: '/tags',
        name: 'tags',
        component: () =>
            import ('../components/backend/tag/index.vue')


    },
    {
        path: '/add-tag',
        name: 'tags',
        component: () =>
            import ('../components/backend/tag/create.vue')


    },


]

const router = new VueRouter({
    mode: 'hash',
    routes
})
export default router