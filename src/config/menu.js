export default {
    data: [
        {
            route: '/shop/categories',
            icon: 'fal fa-shopping-cart',
            title: 'Магазин',
            name: 'Магазин',
            auth: [1, 100]
        },
        {
            route: '/info',
            icon: 'fal fa-info-circle',
            title: 'Инфо центр',
            name: 'Инфо центр',
            auth: [1, 100]
        },
        {
            route: '/support',
            icon: 'fal fa-question-circle',
            title: 'Поддержка',
            name: 'Поддержка',
            auth: [1, 100]
        },
        {
            route: '/structure',
            icon: 'fal fa-users',
            title: 'Моя структура',
            name: 'Моя структура',
            auth: [1, 100]
        },
        {
            route: '/index1',
            icon: 'fal fa-piggy-bank',
            title: 'Оборот средств',
            name: 'Оборот средств',
            auth: [1, 100]
        },
        {
            route: '/index2',
            icon: 'fal fa-bullseye',
            title: 'Бонусы',
            name: 'Бонусы',
            auth: [1, 100]
        },
        {
            route: '/index3',
            icon: 'fal fa-coins',
            title: 'Платежи',
            name: 'Платежи',
            auth: [1, 100]
        },
        {
            route: '/index4',
            icon: 'fal fa-wallet',
            title: 'Мои счета',
            name: 'Мои счета',
            auth: [1, 100]
        },
        {
            icon: 'fal fa-cogs',
            title: 'Настройки',
            name: 'Настройки',
            auth: [100],
            submenu: [{
                name: "Пользователи",
                route: "/configs/users",
                icon: '',
                title: "Пользователи",
                auth: [100]
              },
              {
                name: "Товары магазина",
                route: "/configs/shop_products",
                icon: '',
                title: "Товары магазина",
                auth: [100]
              },
              {
                name: "Категории товаров",
                route: "/configs/shop_categories",
                icon: '',
                title: "Категории товаров",
                auth: [100]
              },
              {
                name: "Тексты",
                route: "/configs/content",
                icon: '',
                title: "Тексты",
                auth: [100]
              }
            ]
        }
    ]
}