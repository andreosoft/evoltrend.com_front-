import axios from "axios";

export default {
    data: function () {
        return {
            api: null,
            loading: false,
            fields: {}
        };
    },
    created() {
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
                        this.fields = response.data.data
                    })
                    .catch(error => { console.log(error) })
            }
        },
    }
};