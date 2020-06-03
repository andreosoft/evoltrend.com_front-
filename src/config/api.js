const BASE_URL = 'http://api.evoltrend.com';

export default {
    token_login: BASE_URL + '/signup/get_token',
    set_profile: BASE_URL + '/signup/set_profile',
    login_exists: BASE_URL + '/signup/login_exists',
    registration: BASE_URL + '/signup/registration',

    users: BASE_URL + '/users/index',
    users_avatar_download: BASE_URL + '/users/avatar/download',
    users_avatar_upload: BASE_URL + '/users/avatar/upload',

    shop_products: BASE_URL + '/shop/products',
    shop_categories: BASE_URL + '/shop/categories',
    shop_categories_select: BASE_URL + '/shop/categories/select',

    content: BASE_URL + '/shop/content',

    upload: BASE_URL + '/file/upload',
    download: BASE_URL + '/file/download',
}