<template>
  <div v-if="field.hidden !== false" >
    <view1 v-if="field.canEdit === false" :data="values" :field="field"></view1>
    <div v-else class="form-group row">
      <label class="col-md-4 col-sm-4 col-form-label text-right-sm">
        {{field.title}}:
      </label>
      <div class="col-md-8 col-sm-8">
        <b-select
          v-if="field.options"
          :value="value"
          @input="e = {}; e[field.name] = $event; $emit('input', e)"
          :options="field.options"
          :error="error"
        ></b-select>
        <div v-else-if="field.type == 'id' && values.id > 0" class="form-control">{{value}}</div>
        <div v-else-if="field.type == 'login' && values.id > 0" class="form-control">{{value}}</div>
        <b-input
          v-else-if="field.type == 'pass'"
          :value="value"
          @input="e = {}; e[field.name] = $event; $emit('input', e)"
          :error="error"
        ></b-input>
        <b-avatar
          v-else-if="field.type == 'avatar'"
          :value="value"
          @input="e = {}; e[field.name] = $event; $emit('input', e)"
          :label="field.title"
          :error="error"
          :api="api.upload"
        ></b-avatar>
        <b-image
          v-else-if="field.type == 'image'"
          :value="value"
          @input="e = {}; e[field.name] = $event; $emit('input', e)"
          :label="field.title"
          :error="error"
          :api="api.upload"
        ></b-image>
        <b-textarea
          v-else-if="field.type == 'text'"
          :height="field.data && field.data.height ? field.data.height + 'px' : '600px'"
          :value="value"
          @input="e = {}; e[field.name] = $event; $emit('input', e)"
          :error="error"
        ></b-textarea>
        <b-select-api
          v-else-if="field.type == 'ref'"
          :value="values[field.name + '_id']"
          @input="e = {}; e[field.name + '_id'] = $event; $emit('input', e)"
          :api="field.data.api"
          :error="error"
        ></b-select-api>
        <b-input
          v-else-if="field.name != 'id'"
          :value="value"
          @input="e = {}; e[field.name] = $event; $emit('input', e)"
          :error="error"
        ></b-input>
        <div v-if="error" class="invalid-feedback">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import binputs from "@/widgets/binputs/binputs.js";
import view1 from "./view.vue";
import api from "@/config/api.js";

export default {
  mixins: [binputs],
  components: {
    view1
  },
  props: {
    values: Object,
    field: Object,
    error: String
  },
  data: function() {
    return {
      api: api
    };
  },
  computed: {
    value: function() {
      return this.values[this.field.name];
    }
  }
};
</script>