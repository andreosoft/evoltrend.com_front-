<template>
  <form1
    :breadcrumbs="[{url: '#/', title: 'Домой'}, {url: '#/configs/content', title: 'Тексты'}, {url: '', title: data.name}]"
    :loading="loading"
  >
    <template v-slot:title>{{data.name}}</template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <router-link
          :to="{ name: 'content_update', params: { id: data.id }}"
          class="btn btn-primary"
        >Изменить</router-link>
      </div>
    </template>
    <template v-slot:body>
      <view1 v-for="(f, i) in fields" :key="i" :field="f" :data="data"></view1>
    </template>
  </form1>
</template>

<script>
import api from "@/config/api";
import form1 from "@/widgets/form/form1.vue";
import view1 from "@/widgets/view2/view.vue";
import viewMixin from "@/widgets/view2/view.js";

export default {
  mixins: [viewMixin],
  components: {
    form1,
    view1
  },
  data: function() {
    return {
      loading: false,
      api: api.content,
      fields: this.$root.tables.content,
      data: {}
    };
  }
};
</script>