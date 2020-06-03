<template>
  <div class="form-group row">
    <label :class="class_label" class="col-form-label text-right-sm">
      {{label}}
      <span v-if="req" style="color: #f00">*</span>:
    </label>
    <div :class="class_input">
      <input tabindex="-1" class="form-control b-select-placeholder" :value="res_placeholder" />
      <input
        class="b-select-input"
        :class="{'is-invalid': error}"
        :disabled="disabled"
        :value="value"
        @input="$emit('input', $event.target.value)"
        type="text"
      />
      <template v-if="error">
        <div class="invalid-feedback">{{error}}</div>
      </template>
    </div>
  </div>
</template>

<script>
// import { VueMaskDirective } from "./v-mask";
// import Vue from "vue";

// Vue.directive("mask", VueMaskDirective);

export default {
  props: {
    value: String,
    template: String,
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
  },
  data: function() {
    return {
      res_placeholder: null
    };
  },
  watch: {
    value: function(value, previousValue) {
      let val;
      if (previousValue === null) {
        previousValue = '';
      }
      if (value && value !== previousValue && value.length > previousValue.length) {
        val = this.format(value, this.template);
      } else {
        val = value;
      }
      
      let s = this.placeholder.split("");
      for (let i = 0; i < val.length; i++) {
        s[i] = val[i];
      }
      this.res_placeholder = s.join("");
      this.$emit('input', val);
    }
  },
  created() {
    this.res_placeholder = this.placeholder;
  },
  methods: {
    format: function(text, wholeMask) {
      if (!wholeMask) return text;

      var maskStartRegExp = /^([^#ANX]+)/;
      if (+text.length === 1 && maskStartRegExp.test(wholeMask)) {
        text = maskStartRegExp.exec(wholeMask)[0] + text;
      }

      var newText = "";

      for (var maskIndex = 0; maskIndex < wholeMask.length; maskIndex += 1) {
        var mask = wholeMask.charAt(maskIndex);

        switch (mask) {
          case "#":
            break;
          case "A":
            break;
          case "?":
            break;
          case "N":
            break;
          case "X":
            break;
          default:
            text = text.replace(mask, "");
        }
      }
      var i = 0;
      for (
        var _maskIndex = 0, x = 1;
        x && _maskIndex < wholeMask.length;
        _maskIndex += 1
      ) {
        var char = text.charAt(i);
        var _mask = wholeMask.charAt(_maskIndex);
        i += 1;
        switch (_mask) {
          case "#":
            /\d/.test(char) ? (newText += char) : (x = 0);
            break;
          case "A":
            /[a-zа-я]/i.test(char) ? (newText += char) : (x = 0);
            break;
          case "N":
            /[a-zа-я0-9]/i.test(char) ? (newText += char) : (x = 0);
            break;
          default:
            newText += _mask;
            i -= 1;
            break;
        }
      }

      return newText;
    }
  }
};
</script>

<style lang="scss">
.b-select-placeholder {
  color: #999;
}

.b-select-input {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 0;
  margin: 0 20px 0 13px;
  width: 100%;
  padding: 7px 60px 6px 0px;
  border: none;
  background: #fff0;
  outline: none;
  color: #555;
}
</style>