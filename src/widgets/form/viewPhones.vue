<template>
  <div class="row form-group">
    <div class="col-sm-4 col-form-label text-right-sm">{{label}}:</div>
    <div class="col-sm-8">
      <div class="">
        <div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Номер</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(el, key) in value" :key="key">
                <td>{{(key + 1)}}</td>
                <td>
                  <div class="form-control">{{el.number}}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: Array
  }
};
</script>