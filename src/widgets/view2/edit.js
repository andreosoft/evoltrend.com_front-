import axios from "axios";
import mixingValidator from "@/widgets/common/validators";

export default {
    mixins: [mixingValidator],
    data: function () {
        return {
            loading: false,
            data: {},
            validators: {},
            errors: {}
        }
    },
    created() {
        for (let el of this.fields) {
            this.$set(this.errors, el.name, null)
            if (el.validator) {
                let name = el.name;
                if (el.type == "ref") {
                    name = name + "_id";
                }
                this.$set(this.validators, name, el.validator)
            }
        }
    },
    methods: {
        submitForm: async function () {
            if (await this.validateAll(this.data)) {
                this.submit(this.data, this.api);
                return true;
            }
            return false;
        },
        submit: function (data, api) {
            this.loading = true;
            axios
                .post(api, data)
                .then(response => {
                    this.loading = false;
                    this.$root.$emit("show-info", {
                        text: "Данные записаны",
                        class: "info"
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        },
        validateAll: async function (data) {
            var noerror = true;
            for (var key in data) {
                if (await this.validate(key)) {
                    noerror = false;
                }
            }
            return noerror;
        },
        validate: async function (key) {
            return (this.errors[key] = await this.validator(
                this.validators[key],
                key,
                this.data
            ));
        }
    }
};