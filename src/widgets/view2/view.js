import axios from "axios";

export default {
    data: function () {
        return {
            api: null,
            loading: false,
            data: {}
        };
    },
    created() {
        for (let el of this.fields) {
            this.$set(this.data, el.name, null)
        }
        this.fetchData()
    },
    watch: {
        $route: "updateRoute"
    },
    updateRoute: function () {
        this.fetchData();
    },
    methods: {
        fetchData() {
            var id = this.$route.params.id
            if (id) {
                this.loading = true
                axios
                    .get(this.api, { params: { id: id } })
                    .then(response => {
                        this.loading = false
                        Object.assign(this.data, response.data.data);
                    })
                    .catch(error => { console.log(error) })
            }
        },
    }
};