// @ts-nocheck
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

var router = new Router({
    saveScrollPosition: true,
    history: true,
    mode: 'history',
    routes: [{
        path: '/',
        redirect: to => {
            return '/index'
        }
    },
    {
        path: '/',
        meta: { auth: [1, 100, 1000] },
        component: () =>
            import('@/layouts/main.vue'),
        children: [{
            path: '/profile',
            name: 'profile',
            meta: { 'title': 'Мой профиль', auth: [1, 50, 100, 1000] },
            component: () =>
                import('@/views/signup/profile.vue'),
        },
        {
            path: '/index',
            name: 'index',
            meta: { 'title': 'Кабинет', auth: [1, 50, 100, 1000] },
            component: () =>
                import('@/views/index/index.vue'),
        },


        {
            path: '/configs/users',
            name: 'users',
            meta: { 'title': 'Пользователи', auth: [100] },
            component: () =>
                import('@/views/configs/users/index.vue')
        },
        {
            path: '/configs/users/view/:id',
            name: 'users_view',
            meta: { 'title': 'Пользователи', auth: [100] },
            component: () =>
                import('@/views/configs/users/view.vue')
        },
        {
            path: '/configs/users/update/:id',
            name: 'users_update',
            meta: { 'title': 'Пользователи', auth: [100] },
            component: () =>
                import('@/views/configs/users/form.vue')
        },
        {
            path: '/configs/users/create',
            name: 'users_create',
            meta: { 'title': 'Пользователи', auth: [100] },
            component: () =>
                import('@/views/configs/users/form.vue')
        },

        {
            path: '/configs/shop_categories',
            name: 'shop_categories',
            meta: { 'title': 'Категории товаров', auth: [100] },
            component: () =>
                import('@/views/configs/shop_categories/index.vue')
        },
        {
            path: '/configs/shop_categories/view/:id',
            name: 'shop_categories_view',
            meta: { 'title': 'Категории товаров', auth: [100] },
            component: () =>
                import('@/views/configs/shop_categories/view.vue')
        },
        {
            path: '/configs/shop_categories/update/:id',
            name: 'shop_categories_update',
            meta: { 'title': 'Категории товаров', auth: [100] },
            component: () =>
                import('@/views/configs/shop_categories/form.vue')
        },
        {
            path: '/configs/shop_categories/create',
            name: 'shop_categories_create',
            meta: { 'title': 'Категории товаров', auth: [100] },
            component: () =>
                import('@/views/configs/shop_categories/form.vue')
        },

        {
            path: '/configs/shop_products',
            name: 'shop_products',
            meta: { 'title': 'Товары', auth: [100] },
            component: () =>
                import('@/views/configs/shop_products/index.vue')
        },
        {
            path: '/configs/shop_products/view/:id',
            name: 'shop_products_view',
            meta: { 'title': 'Товары', auth: [100] },
            component: () =>
                import('@/views/configs/shop_products/view.vue')
        },
        {
            path: '/configs/shop_products/update/:id',
            name: 'shop_products_update',
            meta: { 'title': 'Товары', auth: [100] },
            component: () =>
                import('@/views/configs/shop_products/form.vue')
        },
        {
            path: '/configs/shop_products/create',
            name: 'shop_products_create',
            meta: { 'title': 'Товары', auth: [100] },
            component: () =>
                import('@/views/configs/shop_products/form.vue')
        },

        {
            path: '/configs/content',
            name: 'content',
            meta: { 'title': 'Тексты', auth: [100] },
            component: () =>
                import('@/views/configs/content/index.vue')
        },
        {
            path: '/configs/content/view/:id',
            name: 'content_view',
            meta: { 'title': 'Тексты', auth: [100] },
            component: () =>
                import('@/views/configs/content/view.vue')
        },
        {
            path: '/configs/content/update/:id',
            name: 'content_update',
            meta: { 'title': 'Тексты', auth: [100] },
            component: () =>
                import('@/views/configs/content/form.vue')
        },
        {
            path: '/configs/content/create',
            name: 'content_create',
            meta: { 'title': 'Тексты', auth: [100] },
            component: () =>
                import('@/views/configs/content/form.vue')
        },

        {
            path: '/shop/categories',
            name: 'shop_categories',
            meta: { 'title': 'Магазин категории товара', auth: [1, 50, 100] },
            component: () =>
                import('@/views/shop/categorys.vue')
        },
        {
            path: '/shop/catalog/:id',
            name: 'shop_catalog',
            meta: { 'title': 'Магазин каталог товаров', auth: [1, 50, 100] },
            component: () =>
                import('@/views/shop/catalog.vue')
        },
        {
            path: '/shop/product/:id',
            name: 'shop_product',
            meta: { 'title': 'Магазин Товар', auth: [1, 50, 100] },
            component: () =>
                import('@/views/shop/product.vue')
        },
        {
            path: '/shop/cart',
            name: 'shop_cart',
            meta: { 'title': 'Карзина', auth: [1, 50, 100] },
            component: () =>
                import('@/views/shop/cart.vue')
        },
        

        {
            path: '/info',
            name: 'info',
            meta: { 'title': 'Инфоцентр', auth: [1, 50, 100] },
            component: () =>
                import('@/views/info/index.vue')
        },
        {
            path: '/info/:id',
            name: 'info_view',
            meta: { 'title': 'Инфоцентр', auth: [1, 50, 100] },
            component: () =>
                import('@/views/info/view.vue')
        },


        ]
    },
    {
        path: '/',
        component: () =>
            import('@/layouts/blank.vue'),
        children: [{
            path: '/login',
            name: 'login',
            meta: { 'title': 'login', auth: ['0'] },
            component: () =>
                import('@/views/signup/login.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            meta: { 'title': 'registration', auth: ['0'] },
            component: () =>
                import('@/views/signup/registration.vue')
        },
        {
            path: '*',
            name: 'notfound',
            meta: { 'title': '404', auth: ['*'] },
            component: () =>
                import('@/views/notFound.vue')
        }
        ]
    }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.auth.indexOf('*') != -1) {
        document.title = to.meta.title
        next()
    } else if (to.name != 'login' && to.meta.auth.indexOf(parseInt(store.getters['auth/role'])) == -1) {
        router.push({ name: 'login' })
        next(false)
    } else {
        document.title = to.meta.title
        next()
    }
});

export default router