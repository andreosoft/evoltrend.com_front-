<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/configs/shop_categories', title: 'Категории товара'}, {url: '', title: data.name ? data.name : 'Новая категория'}]"
    :loading="loading"
  >
    <template v-slot:title>{{data.id ? data.name : 'Новая категория'}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <button @click="submitForm()" class="btn btn-primary">Записать</button>
        <button @click="remove()" class="btn btn-danger">Удалить</button>
      </div>
    </template>
    <template v-slot:body>
      <edit1
        v-for="(f, i) in fields"
        :key="i"
        @input="Object.assign(data, $event); validate(f.name)"
        :field="f"
        :values="data"
        :error="errors[f.name]"
      ></edit1>
    </template>
  </form1>
</template>

<script>
import api from "@/config/api";
import form1 from "@/wid/form/form1.vue";
import axios from "axios";
import router from "@/config/router";
import editMixin from "@/wid/view2/edit.js";
import edit1 from "@/wid/view2/edit.vue";
import viewMixin from "@/wid/view2/view.js";

export default {
  mixins: [viewMixin, editMixin],
  components: {
    form1,
    edit1
  },
  data: function() {
    return {
      api: api.shop_categories,
      fields: this.$root.tables.shop_categories,
    };
  },
  methods: {
    remove: function() {
      if (confirm("Вы уверены, что хотите удалить?")) {
        this.loading = true;
        axios({
          method: "delete",
          url: this.api,
          data: { ids: [this.data.id] },
          params: {}
        })
          .then(response => {
            this.loading = false;
            this.$root.$emit("show-info", {
              text: "Элемент удален",
              class: "alert"
            });
            router.push({ name: "shop_categories", params: {} });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>