<template>
  <div v-if="!(field.hidden === true || field.type === 'pass')">
    <div class="row form-group">
      <div class="col-sm-4 col-form-label text-right-sm">{{field.title}}:</div>
      <div class="col-sm-8">
        <div v-if="field.type == 'text'">
          <div
            class="form-control"
            style=" overflow: auto;"
            :style="{height: field.data && field.data.height ? field.data.height + 'px' : '600px'}"
            v-html="data[field.name]"
          ></div>
        </div>
        <div v-else-if="field.type == 'phones'">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Номер</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(el, key) in jsonparse(data[field.name])" :key="key">
                <td>{{(key + 1)}}</td>
                <td>
                  <div class="form-control">{{el.number}}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="field.type == 'image'">
          <a :href="api.download + '/' + data[field.name]" target="_blank">
            <img
              :src="api.download + '/' + data[field.name] + '?width=200&height=200'"
              style="height: 100px"
            />
          </a>
        </div>
        <div v-else-if="field.type == 'avatar'">
          <img class="avatar"
              :src="api.download + '/' + data[field.name] + '?width=100&height=100'"
              style="height: 100px"
            />
        </div>
        <div v-else class="form-control">
          <template v-if="field.options" :label="field.title">
            {{field.options.find(x => x.value == data[field.name])
            ? field.options.find(x => x.value == data[field.name]).text
            : ""}}
          </template>
          <template v-else :label="field.title">{{data[field.name]}}</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/config/api";

export default {
  props: {
    data: Object,
    field: Object
  },
  data() {
    return {
      api: api
    };
  },
  methods: {
    jsonparse: function(data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        return {};
      }
    }
  }
};
</script>