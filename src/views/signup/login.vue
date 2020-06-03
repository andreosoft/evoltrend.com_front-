<template>
  <viewCenter
    :upperName="$root.appName"
    name="Войти"
    :loader="$store.getters['auth/status'] == 'loading'"
  >
    <div>
      <form class="login" @submit.prevent="submitForm" method="post" action>
        <p
          v-if="this.$store.getters['auth/status'] == 'error'"
          style="color: red"
        >{{ this.$store.getters['auth/error'] == 'login error' ? 'Ошибка регистрации пароль или логин неверные' : ''}}</p>
        <inputText
          :error="errors.login"
          @change="validate('login', fields.login)"
          v-model="fields.login"
          :label="labels.login"
        ></inputText>
        <inputText
          :error="errors.password"
          @change="validate('password', fields.password)"
          v-model="fields.password"
          type="password"
          :label="labels.password"
        ></inputText>
        <!-- <div class="text-right">
                <router-link :to="{ name: 'forget' }">напомнить пароль</router-link>
        </div>-->
        <div style="display: flex">
            <button
              type="submit"
              class="btn btn btn-outline-success btn-lg"
              style="width: 100%"
            >Войти</button>
            <router-link
              :to="{name: 'registration'}"
              class="btn btn btn-outline-success btn-lg"
              style="width: 100%; margin: 0 0 0 2px;"
            >Регистрация</router-link>
        </div>
      </form>
    </div>
  </viewCenter>
</template>

<script>
import inputText from "./inputText.vue";
import viewCenter from "./viewCenter.vue";
import model from "@/models/login";
import api from "@/config/api";
import axios from "axios";
import Vue from "vue";
import mixingValidator from "@/libs/validators";

export default {
  mixins: [mixingValidator],
  components: {
    viewCenter,
    inputText
  },
  data: function() {
    return {
      loading: false,
      labels: model.labels,
      fields: new model.Fields().fields,
      errors: new model.Fields().fields
    };
  },
  methods: {
    submitForm: function() {
      if (this.validateAll(this.fields)) {
        this.submit();
      }
    },
    submit: function() {
      this.$store
        .dispatch("auth/login", {
          login: this.fields.login,
          password: this.fields.password
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(e => {
          this.error = e;
        });
    },
    validateAll: function(fields) {
      var noerror = true;
      for (var index in fields) {
        if (this.validate(index, fields[index])) {
          noerror = false;
        }
      }
      return noerror;
    },
    validate: function(field, value) {
      return (this.errors[field] = this.validator(
        model.validators[field],
        value
      ));
    }
  }
};
</script>
