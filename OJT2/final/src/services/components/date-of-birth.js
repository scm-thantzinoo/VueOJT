import {
    computed,
    ref
} from "vue"
export default {
    props: {
        model: {
            type: Object,
            required: true,
        },
        isConfirmed: {
            type: Boolean,
            required: true,
        }
    },
    setup(props) {
        const maxDate = computed(() => {
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            const year = today.getFullYear();
            return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        });
        const user_age = computed(() => {
            if (!props.model.dob.$model || props.model.dob.$model == "") {
                return "-"
            }
            const today = new Date()
            const birth = new Date(props.model.dob.$model)
            let age = today.getFullYear() - birth.getFullYear()
            const monthDiff = today.getMonth() - birth.getMonth()
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--
            }
            props.model.age.$model = age;
            return age
        })
        return {
            maxDate,
            user_age,
        }
    }
}