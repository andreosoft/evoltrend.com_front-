import axios from "axios";

export default {
  data: function() {
    return {
      data: [],
      params: {}
    };
  },
  created() {
    this.fitchAll();
  },
  methods: {
    fitchAll: function() {
      this.loading = true;
      axios
        .get(this.api, {params: this.params})
        .then(response => {
          this.loading = false;
          if (response.data.data == null) {
            this.data = [];
          } else {
            this.data = response.data.data;
          }
        })
        .catch(error => {
          this.$root.logger(error);
        });
    },
    onAddElement: function() {
      this.loading = true;
      axios
        .post(this.api, this.fields, {params: this.params})
        .then(response => {
          this.loading = false;
          let fields = response.data.data;
          this.data.push(fields);
          this.$root.$emit("show-info", {
            text: "Элемент добавлен",
            class: "info"
          });
        })
        .catch(e => {
          this.$root.logger(e);
        });
    },
    onChangeElement: function(key) {
      this.loading = true;
      axios
        .post(this.api, this.data[key], {params: this.params})
        .then(response => {
          this.loading = false;
          this.data[key] = response.data.data;
          this.$root.$emit("show-info", {
            text: "Элемент обновлен",
            class: "info"
          });
        })
        .catch(e => {
          this.$root.logger(e);
        });
    },
    onRemoveElement: function(key) {
      if (confirm("Вы уверены, что хотите удалить элемент?")) {
        this.loading = true;
        axios({
          method: "delete",
          url: this.api,
          data: { ids: [this.data[key].id] },
          params: this.params
        })
          .then(response => {
            this.loading = false;
            this.$root.$emit("show-info", {
              text: "Элемент удален",
              class: "alert"
            });
            this.fitchAll();
          })
          .catch(error => {
            this.$root.logger(error);
          });
      }
    }
  }
};