import axios from "axios";
import func from '@/libs/func'
import router from "@/config/router";

export default {
    data: function() {
        return {
            error: null,
            loading: false,
            data: [],
            sort: {
                key: "",
                order: ""
            },
            pager: {
                page: 0,
                count: 0,
                limit: 100
            },
            pages: {
                current: 0,
                page: []
            },
            filters: {}
        };
    },
    created() {
        this.updateRoute()
    },
    watch: {
        '$route': 'updateRoute',
    },
    methods: {
        sortBy: function(el) {
            if (this.sort.key == el) {
                if (this.sort.order == 'ASC') {
                    this.sort.order = 'DESC'
                } else {
                    this.sort.order = 'ASC'
                }
            } else {
                this.sort.key = el
                this.sort.order = 'ASC'
            }
            this.push()
        },
        push: function() {
            var params = {
                sort: this.sort,
                filters: this.filters,
                pager: this.pager
            }
            router.push({ query: { q: func.url_encode(params) } })
        },
        onChangeFilter: function() {
            this.push()
        },
        maxPage: function() {
            return Math.ceil(this.pager.count / this.pager.limit)
        },
        updateRoute: function() {
            var params = {}
            if (this.$route.query.q) {
                params = func.url_decode(this.$route.query.q)
                if (params.sort) {
                    this.sort = params.sort
                }
                if (params.filters) {
                    this.filters = params.filters
                }
                if (params.pager) {
                    this.pager = params.pager
                }
            }
            this.fetchData()
        },
        fetchData() {
            this.error = null
            this.loading = true
            axios
                .get(this.api, { params: { sort: this.sort, filters: this.filters, pager: this.pager } })
                .then(response => {
                    this.loading = false
                    if (response.data.data == null) {
                        this.data = []
                    } else {
                        this.data = response.data.data
                        this.pager = response.data.pager
                    }
                })
                .catch(error => { console.log(error) })
        }
    }
};