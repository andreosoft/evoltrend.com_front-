<template>
  <viewCenter
    maxWidth="600px"
    :upperName="$root.appName"
    name="Регистрация"
    :loader="$store.getters['auth/status'] == 'loading'"
  >
    <div>
      <div v-if="result">
        <p>{{resMessage}}</p>
      </div>
      <form v-else class="login" @submit.prevent="submitForm" method="post" action>
        <div class="row">
          <div class="col-sm-12">
            <inputText
              :error="errors.ref"
              @change="validate('ref')"
              v-model="fields.ref"
              label="Реферальный код"
            ></inputText>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <inputText
              :error="errors.name"
              @change="validate('name')"
              v-model="fields.name"
              label="Имя"
            ></inputText>
            <inputText
              :error="errors.surname"
              @change="validate('surname')"
              v-model="fields.surname"
              label="Фамилия"
            ></inputText>
            <inputText
              :error="errors.country"
              @change="validate('country')"
              v-model="fields.country"
              label="Страна"
            ></inputText>
            <inputText
              :error="errors.phone"
              @change="validate('phone')"
              v-model="fields.phone"
              label="Телефон"
            ></inputText>
          </div>
          <div class="col-sm-6">
            <inputText
              :error="errors.email"
              @change="validate('email')"
              v-model="fields.email"
              label="Email"
            ></inputText>
            <inputText
              :error="errors.reemail"
              @change="validate('reemail')"
              v-model="fields.reemail"
              label="Введите email повторно"
            ></inputText>
            <inputText
              :error="errors.pass"
              @change="validate('pass')"
              v-model="fields.pass"
              label="Пароль"
            ></inputText>
            <inputText
              :error="errors.repass"
              @change="validate('repass')"
              v-model="fields.repass"
              label="Введите Пароль повторно"
            ></inputText>
          </div>
        </div>
        <div style="display: flex">
          <button
            type="submit"
            class="btn btn btn-outline-success btn-lg"
            style="width: 100%"
          >Регистрация</button>
        </div>
      </form>
    </div>
  </viewCenter>
</template>

<script>
import inputText from "./inputText.vue";
import viewCenter from "./viewCenter.vue";
import api from "@/config/api";
import axios from "axios";
import validators from "@/mixins/validators";

const model = {
  Fields() {
    this.fields = {
      ref: null,
      name: null,
      surname: null,
      country: null,
      phone: null,
      email: null,
      reemail: null,
      pass: null,
      repass: null
    };
  },
  FieldsData() {
    this.fields = {
      ref: '111',
      name: 'Test',
      surname: 'test',
      country: 'kg',
      phone: '123454',
      email: 'ttt@tt.com',
      reemail: 'ttt@tt.com',
      pass: 'ttt@tt.com',
      repass: 'ttt@tt.com'
    };
  },
  labels: {},
  validators: {
    ref: ["req"],
    name: ["req"],
    surname: ["req"],
    country: ["req"],
    phone: ["req"],
    email: ["req", "email", "login"],
    reemail: ["req", "email", "reemail"],
    pass: ["req", "pass"],
    repass: ["req", "pass", "repass"]
  }
};

export default {
  mixins: [validators],
  components: {
    viewCenter,
    inputText
  },
  data: function() {
    return {
      resMessage: "На вашу почты была оправлена информация для активации вашего аккаунта. Пожалуйста, перейдите по ссылке из письма, чтобы активировать ваш аккаунт",
      result: false,
      loading: false,
      labels: model.labels,
      fields: new model.FieldsData().fields,
      errors: new model.Fields().fields
    };
  },
  methods: {
    submitForm: async function() {
      if (await this.validateAll(this.fields)) {
        this.submit();
      }
    },
    submit: function() {
      this.loading = true;
      axios
        .post(api.registration, this.fields)
        .then(response => {
          this.loading = false;
          if (response.data.status != 'ok') {
            this.resMessage = "При регистрации произошла ошибка"
          }
          this.result = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    validateAll: async function(fields) {
      var noerror = true;
      for (var key in fields) {
        if (await this.validate(key)) {
          noerror = false;
        }
      }
      return noerror;
    },
    validate: async function(key) {
      return (this.errors[key] = await this.validator(
        model.validators[key],
        key,
        this.fields
      ));
    }
  }
};
</script>
