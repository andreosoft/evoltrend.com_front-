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
        <div style="display: flex; flex-wrap: wrap; max-width: 1000px;">
          <viewCard v-for="(el, i) in data" :key="i" :data="el" type="1" route="shop_catalog"></viewCard>
        </div>
      </div>
    </template>
  </form1>
</template>

<script>
import form1 from "@/widgets/form/form1.vue";
import tableMixin from "@/widgets/table2/table.js";
import api from "@/config/api";
import viewCard from "./viewCard.vue";

export default {
  mixins: [tableMixin],
  components: {
    viewCard,
    form1
  },
  data: function() {
    return {
      loading: false,
      title: "Инфо центр",
      api: api.content,
      fields: this.$root.tables.content,
      data: []
    };
  }
};
</script>