<template>
  <input
    class="form-control"
    :class="{'is-invalid': error}"
    :disabled="disabled"
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    :value="value"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ""
    }
  }
};
</script>
