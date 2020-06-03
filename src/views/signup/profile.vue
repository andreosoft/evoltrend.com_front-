<template>
  <form1 :loading="loading">
    <template v-slot:title>
      Профиль пользователя
      <b>{{fields.login}}</b>
    </template>
    <template v-slot:right>
      <div class="btn-block">
        <button @click="$root.goBack()" class="btn btn-secondary">Назад</button>
        <button @click="submitForm()" class="btn btn-primary">Записать</button>
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
import user_model from "@/models/user";
import api from "@/config/api.js";
import axios from "axios";
import form1 from "@/widgets/form/form1.vue";
import editMixin from "@/widgets/view2/edit.js";
import edit1 from "@/widgets/view2/edit.vue";

export default {
  mixins: [editMixin],
  components: {
    form1,
    edit1
  },
  data: function() {
    return {
      fields: this.$root.tables.profile,
      api: api.set_profile,
      data: {}
    };
  },
  created() {
    for (let el of this.fields) {
      this.$set(this.data, el.name, null);
    }
    Object.assign(this.data, this.$store.getters["auth/profile"])
  },
  methods: {
    submit: function() {
      this.loading = true;
      axios
        .post(this.api, this.data)
        .then(response => {
          this.loading = false;
          this.$store.commit("auth/updateProfile", this.data);
          this.$root.$emit("show-info", {
            text: "Данные записаны",
            class: "info"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
