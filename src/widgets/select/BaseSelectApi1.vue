<template>
  <div :class="class_input">
    <input
      tabindex="-1"
      class="form-control b-select-placeholder"
      :value="resPlaceholder == '' ? placeholder : resPlaceholder"
    />
    <input
      class="b-select-input"
      :disabled="disabled"
      :value="resText"
      type="text"
      autocomplete="off"
      ref="input"
      @input="onInput($event.target.value)"
      @click="open()"
      @focus="open()"
      @keyup="onKeyUp($event)"
      @keydown="onKeyDown($event)"
    />
    <span class="b-select-arrow">▾</span>
    <div
      ref="dropdownMenu"
      class="b-select"
      :class="[positionClass]"
      v-if="showOptions"
      v-on:click="closeViaOverlay"
    >
      <div
        v-for="(option, key) in opt"
        :key="key"
        :value="option.value"
        class="b-select-el"
        :class="{ active: resPlaceholder == option.value }"
        @click="onClickOption(option, key)"
      >{{option.text}}</div>
    </div>
  </div>
</template>

<script>
import mixinBaseSelect from "./mixinBaseSelect";
import axios from "axios";

export default {
  mixins: [mixinBaseSelect],
  props: {
    value: String,
    api: String,
    placeholder: {
      type: String,
      default: "Выберите значение"
    },
    disabled: {
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
    },
    options: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  created() {
    if (this.api != "") {
      this.fitchData();
    }
  },
  watch: {
    api: function(value) {
      console.log(value);
      this.fitchData();
    }
  },
  methods: {
    fitchData() {
      axios
        .get(this.api)
        .then(response => {
          if (response.data.status == "ok") {
            this.opt = response.data.data;
            this.resText = this.getText(this.value);
            this.resPlaceholder = this.getText(this.value);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss">
@import "style.scss";
</style>