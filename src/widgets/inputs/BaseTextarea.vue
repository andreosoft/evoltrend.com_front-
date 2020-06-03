<template>
  <div class="form-group row">
    <label :class="class_label" class="col-form-label text-right">
      {{label}}
      <span v-if="req" style="color: #f00">*</span>:
    </label>
    <div :class="class_input">
      <textarea
        class="form-control"
        :class="{'is-invalid': error}"
        v-on:change="$emit('change-model', value)"
        v-bind:value="value"
        :disabled="disabled"
        v-on:input="$emit('input', $event.target.value)"
        :rows="rows"
        :placeholder="placeholder"
      >
    </textarea>
      <template v-if="error != null">
        <div class="invalid-feedback">{{error}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 30
    },
    class_label: {
      type: String,
      default: "col-sm-2"
    },
    class_input: {
      type: String,
      default: "col-sm-10"
    },
    req: {
      type: Boolean,
      default: false
    }
  }
}
</script>
