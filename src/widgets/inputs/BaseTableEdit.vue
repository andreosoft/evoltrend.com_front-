<template>
  <div class="form-group row">
    <label :class="class_label" class="col-form-label text-right-sm">
      {{label}}<span v-if="req" style="color: #f00">*</span>:
    </label>
    <div :class="class_input">
      <table>
        <table class="table table-striped">
        <thead>
          <tr>
            <th></th>
          </tr>
      </table>
      <input
        class="form-control"
        :class="{'is-invalid': error}"
        :disabled="disabled"
        v-on:change="$emit('change-model', value)"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
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
    value: String,
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
      default: "col-sm-4"
    },
    class_input: {
      type: String,
      default: "col-sm-8"
    }
  }
};
</script>
