<template>
  <div class="form-group row">
    <label class="col-form-label col-sm-2 text-right-sm">
      {{label}}
      <span v-if="req" style="color: #f00">*</span>:
    </label>
    <div class="col-sm-10">
      <select
        class="form-control"
        :multiple="multiple"
        :disabled="disabled"
        :class="{'is-invalid': error}"
        v-on:change="$emit('change-model', value)"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
        <option v-for="(option, key) in options" :key="key" :value="option.value">{{option.text}}</option>
      </select>
      <template v-if="error != null">
        <div class="invalid-feedback">{{error}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    options: Array,
    error: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    req: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    class_label: {
      type: String,
      default: "col-sm-2"
    },
    class_input: {
      type: String,
      default: "col-sm-10"
    }
  }
};
</script>
