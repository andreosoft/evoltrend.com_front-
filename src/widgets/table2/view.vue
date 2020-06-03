<template>
  <div>
    <div v-if="field.actions">
      <div class="btn-block">
        <template v-for="(e, i) in field.actions">
          <button
            v-if="e == 'update'"
            :key="i"
            @click="onClick(e)"
            title="Открыть"
            class="btn btn-primary"
          >Открыть</button>
        </template>
      </div>
    </div>
    <div v-else-if="field.options">
      {{field.options.find(x => x.value == el[field.name])
      ? field.options.find(x => x.value == el[field.name]).text
      : ""}}
    </div>
    <div v-else-if="field.type == 'image'" style="text-align: center;">
      <a :href="api.download + '/' + el[field.name]" target="_blank">
        <img :src="api.download + '/' + el[field.name] + '?width=50&height=50'" style="height: 50px" />
      </a>
    </div>
    <div v-else-if="field.type == 'avatar'" style="text-align: center;">
      <img class="avatar" :src="api.download + '/' + el[field.name] + '?width=50&height=50'" style="height: 50px" />
    </div>
    <div v-else-if="field.type == 'number'" style="text-align: right;">{{el[field.name]}}</div>
    <div v-else>{{el[field.name]}}</div>
  </div>
</template>

<script>
import api from "@/config/api";

export default {
  props: {
    el: Object,
    field: Object
  },
  data() {
    return {
      api: api
    };
  },
  methods: {
    onClick(e) {
      let name = this.$route.name;
      this.$router.push({ name: name + "_view", params: { id: this.el.id } });
    }
  }
};
</script>