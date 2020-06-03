<template>
  <div @click="onClick()" class="card1" style="width: 300px; margin: 15px;">
    <div>
      <img class="card-img-top" :src="api.download + '/' + data.image + '?width=300&height=300'" />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{data.name}}</h3>
      <div v-if="type == '2'">
        <div>{{data.price}}</div>
        <div><button class="btn btn-primary">Положить в карзину</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/config/api";

export default {
  props: {
    data: Object,
    type: String,
    route: String,
  },
  data: function() {
    return {
      api: api
    };
  },
  methods: {
    onClick() {
      this.$router.push({ name: this.route, params: {id: this.data.id } });
    }
  }
};
</script>

<style lang="scss">
</style>