<template>
  <textarea
    class="form-control"
    :class="{'is-invalid': error}"
    :disabled="disabled"
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    :value="value"
    :placeholder="placeholder"
    :style="{height: height}"
  ></textarea>
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
    },
    height: {
      type: String,
      default: "200px"
    }
  }
};
</script>
