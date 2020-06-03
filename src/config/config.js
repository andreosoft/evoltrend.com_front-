import user_model from "@/models/user";
import api from "./api.js";

export default {
  data: {
    appName: 'evoltrend.com',
    info: {
      visible: false,
      text: ''
    },
    tables: {
      content: [
        {
          name: "id",
          title: "#",
          sortable: true,
          type: "id",
          width: "40",
          showTable: true
        },
        {
          name: "image",
          title: "Изображение",
          sortable: false,
          type: "image",
          width: "100",
          showTable: true
        },
        {
          name: "name",
          title: "Название",
          sortable: true,
          type: "string",
          width: "400",
          showTable: true,
          validator: ['req']
        },
        {
          name: "introtext",
          title: "Вводный текст",
          type: "text",
          data: {
            height: 100
          }
        },
        {
          name: "content",
          title: "Содержимое",
          type: "text",
          showTable: false,
          data: {
            height: 400
          }
        },
        
      ],
      shop_products: [
        {
          name: "id",
          title: "#",
          sortable: true,
          type: "id",
          width: "40",
          showTable: true
        },
        {
          name: "image",
          title: "Изображение",
          sortable: false,
          type: "image",
          width: "100",
          showTable: true
        },
        {
          name: "category",
          title: "Категория",
          sortable: true,
          type: "ref",
          width: "150",
          showTable: true,
          data: {
            api: api.shop_categories_select
          }
        },
        {
          name: "name",
          title: "Название",
          sortable: true,
          type: "string",
          width: "300",
          showTable: true,
          validator: ['req']
        },
        {
          name: "introtext",
          title: "Вводный текст",
          type: "text",
          data: {
            height: 100
          }
        },
        {
          name: "content",
          title: "Основной текст",
          type: "text",
          data: {
            height: 200
          }
        },
        {
          name: "price",
          title: "Цена",
          sortable: true,
          type: "string",
          width: "100",
          showTable: true
        },
        
      ],
      shop_categories: [
        {
          name: "id",
          title: "#",
          sortable: true,
          type: "Number",
          width: "40",
          showTable: true
        },
        {
          name: "image",
          title: "Изображение",
          sortable: false,
          type: "image",
          width: "100",
          showTable: true
        },
        {
          name: "name",
          title: "Название",
          sortable: true,
          type: "string",
          width: "400",
          showTable: true,
          validator: ['req']
        },
      ],
      users: [
        {
          name: "id",
          title: "#",
          sortable: true,
          type: "id",
          width: "40",
          showTable: true
        },
        {
          name: "login",
          title: "Login",
          sortable: true,
          type: "login",
          width: "150",
          showTable: true,
          validator: ['req', 'login']
        },
        {
          name: "name",
          title: "Название",
          sortable: true,
          type: "String",
          width: "150",
          showTable: true,
          validator: ['req']
        },
        {
          name: "image",
          title: "Аватар",
          default: 'avatar.png',
          sortable: false,
          type: "avatar",
          width: "100",
          showTable: true
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          showTable: false,
          validator: ['email']
        },
        {
          name: "country",
          title: "Страна",
          type: "string",
          showTable: false
        },
        {
          name: "phone",
          title: "Телефон",
          type: "string",
          showTable: false
        },
        {
          name: "status",
          title: "Статус",
          sortable: true,
          type: "select",
          options: user_model.status,
          width: "100",
          showTable: true
        },
        {
          name: "role",
          title: "Роль",
          sortable: true,
          type: "select",
          options: user_model.role,
          width: "100",
          showTable: true
        },
        {
          name: "pass",
          title: "Пароль",
          type: "pass",
          validator: ['pass']
        },
      ],
      profile: [
        {
          name: "id",
          title: "Ваш ID",
          type: "id",
        },
        {
          name: "login",
          title: "Login",
          type: "login",
          canEdit: false,
        },
        {
          name: "name",
          title: "ФИО",
          type: "String",
        },
        {
          name: "image",
          title: "Аватар",
          type: "avatar"
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          validator: ['email']
        },
        {
          name: "country",
          title: "Страна",
          type: "string"
        },
        {
          name: "phone",
          title: "Телефон",
          type: "string"
        },
        {
          name: "status",
          title: "Статус",
          type: "select",
          options: user_model.status,
          canEdit: false,
        },
        {
          name: "pass",
          title: "Пароль",
          type: "pass",
          validator: ['pass']
        },
      ]
    }
  }
}