<template>
  <div>
    <div class="row" style="margin-top: 10px;">
      <div class="col">Показано: {{data.length}} из {{pager.count}}</div>
    </div>
    <div class="flex-table fixed style-1" :style="style_table">
      <div class="flex-table-header">
        <slot name="header"></slot>
      </div>
      <div class="flex-table-body" :style="style_body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    pager: {
      type: Object,
      default: () => {
        return {};
      }
    },
    pages: {
      type: Object,
      default: () => {
        return {
          page: 0
        };
      }
    },
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
          top: "72px"
        };
      }
    }
  }
};
</script>