<template>
  <div class="row">
    <div :class="class_input" class="form-check">
      <input
        @change="$emit('change-model', value)"
        :checked="value"
        @input="$emit('input', $event.target.checked)"
        class="form-check-input"
        type="checkbox"
        :id="id"
      />
      <label class="form-check-label" :for="id">
        {{label}}
        <span v-if="req" style="color: #f00">*</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
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
    class_input: {
      type: String,
      default: "offset-sm-4"
    }
  },
  data: function() {
    return {
      id: null
    };
  },
  mounted() {
    this.id = this._uid;
  }
};
</script>
