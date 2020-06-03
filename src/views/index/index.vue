<template>
  <div class>
    <div class="clearfix">
      <div class="float-left">
        <div class="row mar-0">
          <h1>Рабочий стол</h1>
        </div>
      </div>
      <div class="float-right"></div>
    </div>
    <div class="separator"></div>
    <div class="dashboard">
      <div class="row">
        <div class="col-lg-4" style="text-align: center;">
          <router-link :to="{ name: 'profile'}">
          <img
            class="avatar"
            :src="api.download + '/' + profile.image + '?width=300&height=300'"
            style="width: 300px"
          />
        </router-link>
        </div>
        <div class="col-lg-8">
          <h1 style="">{{profile['name']}}</h1>
          <div class="row" style=" text-align: center;">
            <div class="col-sm-6">
              <div>Наличный кошелек: $1360</div>
              <div>Личные партнеры: 68</div>
            </div>
            <div class="col-sm-6">
              <div>Кошелек магазина: $2300</div>
              <div>Всего партнеров: 150</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Реферальные ссылки</h1>
        <div class="row" style=" text-align: center;">
          <div class="col-md-6">
            <div>
              <h3>Левая ссылка</h3>
              <div>5423524523</div>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <h3>Правая ссылка</h3>
              <div>5423524523</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/config/api.js";

export default {
  data: function() {
    return {
      api: api
    };
  },
  computed: {
    profile: function() {
      return this.$store.getters["auth/profile"];
    }
  }
};
</script>

<style lang="scss">
.dashboard {
  font-size: 20px;
  line-height: 3;
  max-width: 1000px;
  min-width: 300px;
  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 40px;
  }
}
</style>