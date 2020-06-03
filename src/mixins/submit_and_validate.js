import axios from "axios";
import mixingValidator from "./validators";

export default {
    mixins: [mixingValidator],
    methods: {
        submitForm: async function () {
            this.$nextTick(async () => {
                if (await this.validateAll(this.fields)) {
                    this.submit(this.fields, this.api);
                    return true;
                }
                return false;
            });
        },
        submit: function (fields, api) {
            this.loading = true;
            axios
                .post(api, fields)
                .then(response => {
                    this.loading = false;
                    this.fields.id = response.data.id;
                    this.$root.$emit("show-info", {
                        text: "Данные записаны",
                        class: "info"
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        },
        validateAll: async function (fields) {
            var noerror = true;
            for (var key in fields) {
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
                this.fields
            ));
        }
    }
};