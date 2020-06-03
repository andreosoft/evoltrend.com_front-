<template>
  <form1 :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: title}]" :loading="loading">
    <template v-slot:title>{{title}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
      </div>
    </template>
    <template v-slot:body>
      <div>
        <div style="display: flex; flex-wrap: wrap; max-width: 800px;">
          <viewCard v-for="(el, i) in data" :key="i" :data="el" route="shop_product"></viewCard>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form/form1.vue";
import tableMixin from "@/widgets/table2/table.js";
import loader from "@/views/common/loader.vue";
import api from "@/config/api";
import viewCard from "./viewCardProduct.vue";

export default {
  mixins: [tableMixin],
  components: {
    form1,
    loader,
    viewCard
  },
  data: function() {
    return {
      loading: false,
      title: "Каталог товаров",
      api: api.shop_products,
      filters: {
        'category_id': this.$route.params.id
      },
      fields: this.$root.tables.shop_products,
      data: []
    };
  }
};
</script>