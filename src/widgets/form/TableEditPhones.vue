<template>
  <div class="row form-group">
    <div class="col-sm-4 col-form-label text-right-sm">{{label}}:</div>
    <div class="col-sm-8">
      <table2>
        <template v-slot:actions>
          <div class="btn-block">
            <button @click="onAddElement()" class="btn btn-primary">Добавить номер</button>
          </div>
        </template>
        <template v-slot:head>
          <tr>
            <th>#</th>
            <th>Номер</th>
            <th>Действия</th>
          </tr>
        </template>
        <template v-slot:body>
          <tr v-for="(el, key) in data" :key="key">
            <td>{{(key + 1)}}</td>
            <td> 
              <input class="form-control" v-model="el.number"/>
            </td>
            <td>
              <button @click="onRemoveElement(key)" class="btn btn-danger">Удалить</button>
            </td>
          </tr>
        </template>
      </table2>
    </div>
  </div>
</template>

<script>
import table2 from "@/widgets/table/table2.vue";

export default {
  mixins: [],
  components: { table2 },
  props: {
    label: String,
    value: Array
  },
  data: function() {
    return {
      fields: {
        number: ""
      },
    };
  },
  computed: {
    data: {
      get: function() {
        return this.value
      },
      set: function(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    onAddElement: function() {
      if (!Array.isArray(this.value)) {
        this.value = [];
      }
      this.value.push({ ...this.fields});
      
    },
    onRemoveElement: function(key) {
      this.value.splice(key, 1);
    }
  }
};
</script>