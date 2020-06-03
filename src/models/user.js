export default {

    Fields() {
        this.fields = {
            id: null,
            login: null,
            email: null,
            pass: null,
            name: null,
            country: null,
            phone: null,
            role: null,
            status: null
        }
    },

    validators: {
        login: ['req'],
        email: [],
        pass: ['pass'],
        name: ['req'],
    },

    labels: {
        id: 'id',
        login: 'Логин',
        email: 'Email',
        pass: 'Пароль',
        name: 'Имя',
        country: 'Страна',
        phone: 'Телефон',
        role: 'Роль',
        status: 'Статус',
    },

    status: [
        { value: 10, text: 'Новый' },
        { value: 1, text: 'Активный' },
        { value: 11, text: 'Не активный' },
    ],

    role: [
        { value: 1, text: 'Пользователь' },
        { value: 50, text: 'Менеджер' },
        { value: 100, text: 'Админ' }
    ]
}