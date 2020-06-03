<template>
  <div class="form-group">
    <input
      class="form-control form-control-lg"
      :class="{'is-invalid': error}"
      :value="value"
      :type="type"
      :placeholder="label"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    error: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>
