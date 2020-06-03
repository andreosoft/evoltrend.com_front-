<template>
  <div class="form-group row">
    <label :class="class_label" class="col-form-label text-right-sm">
      {{label}}<span v-if="req" style="color: #f00">*</span>:
    </label>
    <div :class="class_input">
      <input
        class="form-control"
        :class="{'is-invalid': error}"
        :disabled="disabled"
        :value="value"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
      />
      <template v-if="error">
        <div class="invalid-feedback">{{error}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    disabled: {
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
