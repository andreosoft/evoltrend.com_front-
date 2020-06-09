<template>
  <form1 :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '', title: title}]" :loading="loading">
    <template v-slot:title>{{title}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link :to="{ name: 'content_create'}" class="btn btn-primary">
          <i class="far fa-plus"></i> Создать
        </router-link>
      </div>
    </template>
    <template v-slot:body>
      <table2 :api="api.content" :fields="fields" type="1" ></table2>
    </template>
  </form1>
</template>

<script>
import form1 from "@/wid/form/form1.vue";
import table2 from "@/wid/table2/table.vue";
import api from "@/config/api";

export default {
  components: {
    form1,
    table2
  },
  data: function() {
    return {
      loading: false,
      title: "Тексты",
      api: api,
      fields: this.$root.tables.content.concat([
        {
          name: "actions",
          title: "Действия",
          width: "100",
          actions: ["update"],
          showTable: true
        }
      ])
    };
  }
};
</script>