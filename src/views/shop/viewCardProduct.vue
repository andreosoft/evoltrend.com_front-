<template>
  <div class="card2" style="width: 300px; margin: 15px;">
    <div>
      <a @click="onClick()">
        <img class="card-img-top" :src="api.download + '/' + data.image + '?width=300&height=300'" />
      </a>
    </div>
    <div class="card-body">
      <h3 class="card-title">
        <a @click="onClick()">{{data.name}}</a>
      </h3>
      <div>
        <div class="card-price">Цена: ${{data.price}}</div>
        <div style="text-align: center; margin: 15px 0;" >
          <button class="btn btn-primary">Положить в карзину</button>
        </div>
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
    route: String
  },
  data: function() {
    return {
      api: api
    };
  },
  methods: {
    onClick() {
      this.$router.push({ name: this.route, params: { id: this.data.id } });
    }
  }
};
</script>

<style lang="scss">

</style>