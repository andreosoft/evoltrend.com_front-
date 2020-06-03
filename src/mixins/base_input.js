import BText from "@/widgets/inputs/BaseText.vue";
import BTextarea from "@/widgets/inputs/BaseTextarea.vue";
import BCheck from "@/widgets/inputs/BaseCheck.vue";
import BSelect from "@/widgets/inputs/BaseSelect.vue";
import BSelectApi from "@/widgets/inputs/BaseSelectApi.vue";
import BSelect2 from "@/widgets/select/BaseSelect.vue";
import BSelectApi2 from "@/widgets/select/BaseSelectApi.vue";
import BSelectApi12 from "@/widgets/select/BaseSelectApi1.vue";
import BImages from "@/widgets/uploads/BaseImages.vue";
import BImage from "@/widgets/inputs/BaseImage.vue";
import view1 from "@/widgets/form/view1.vue";
import BMaskInput from "@/widgets/mask/BaseMaskInput.vue";

export default {
    components: {
        view1,
        BText,
        BTextarea,
        BImage,
        BImages,
        BSelect,
        BSelectApi,
        BSelect2,
        BSelectApi2,
        BSelectApi12,
        BCheck,
        BMaskInput
    }
}