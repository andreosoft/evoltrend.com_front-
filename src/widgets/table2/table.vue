<template>
  <div>
    <loader v-if="loading"></loader>
    <div class="flex-table fixed style-1" :class="getClass" style="top: 20px; right: 15px;" :style="{minWidth: calcMinWidth}">
      <div class="flex-table-header">
        <slot name="header">
          <div class="flex-table-row">
            <col1
              v-for="(el, key) in fs"
              :key="key"
              :sort="sort"
              :sortable="el.sortable"
              :width="el.width"
              @sort-by="sortBy(el.name)"
              :field="el.name"
            >{{el.title}}</col1>
          </div>
        </slot>
      </div>
      <div class="flex-table-body" :style="style_body">
        <slot name="body">
          <div v-for="(el, key) in data" :key="key" class="flex-table-row">
            <view1 class="flex-table-col" v-for="(field, i) in fs" :style="{width: field.width + 'px'}" :el="el" :field="field" :key="i"></view1>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "@/views/common/loader.vue";
import col1 from "./col.vue";
import view1 from "./view";
import tableMixin from "./table.js";

export default {
  mixins: [tableMixin],
  components: {
    loader,
    view1,
    col1
  },
  props: {
    api: String,
    fields: Array,
    type: String,
    style_table: {
      type: Object,
      default: () => {
        return {
          top: "60px",
          left: "15px",
          right: "15px",
          "min-width": "500px"
        };
      }
    },
    style_body: {
      type: Object,
      default: () => {
        return {
          top: "29px"
        };
      }
    }
  },
  data: function() {
    return {
      loading: false,
      data: []
    };
  },
  computed: {
    fs: function() {
      let res = [];
      for (let el of this.fields) {
        if (el.showTable) {
          res.push(el)
        }
      }
      return res
    },
    calcMinWidth: function() {
      let w = 0;
      for (let el of this.fs) {
        w = w + parseFloat(el.width);
      }
      return (100 + w) + 'px';
    },
    getClass: function() {
      return {
        bordered: parseInt(this.type) == 1
      }
    }
  }
};
</script>