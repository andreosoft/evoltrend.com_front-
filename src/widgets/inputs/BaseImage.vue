<template>
  <div class="form-group row">
    <label :class="class_label" class="col-form-label text-right-sm">
      {{label}}<span v-if="req" style="color: #f00">*</span>:
    </label>
    <div :class="class_input">
      <BImage
        class=""
        :class="{'is-invalid': error}"
        :disabled="disabled"
        :value="value"
        :api="api"
        @change="$emit('change', $event)"
        @input="$emit('input', $event)"
      ></BImage>
      <template v-if="error">
        <div class="invalid-feedback">{{error}}</div>
      </template>
    </div>
  </div>
</template>

<script>
import BImage from "@/widgets/uploads/BaseImage.vue";

export default {
  components: { BImage },
  props: {
    value: String,
    label: {
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
    class_label: {
      type: String,
      default: "col-sm-2"
    },
    class_input: {
      type: String,
      default: "col-sm-10"
    },
    api: {
      type: String,
      default: ""
    }
  }
};
</script>
