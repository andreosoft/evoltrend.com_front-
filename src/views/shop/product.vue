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
        <div v-for="(el, i) in data" :key="i">
          {{el.name}}
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

export default {
  mixins: [tableMixin],
  components: {
    form1,
    loader
  },
  data: function() {
    return {
      loading: false,
      title: "Категории",
      filters: {
        'category_id': this.$route.params.id
      },
      api: api.shop_categories,
      fields: this.$root.tables.shop_categories,
      data: []
    };
  },
};
</script>