import {
    computed,
    ref
} from "vue"
export default {
    props: ['dob'],
    setup(props) {
        const user_dob = ref(props.dob)
        const age = computed(() => {
            const today = new Date()
            const birth = new Date(user_dob.value)
            let age = today.getFullYear() - birth.getFullYear()
            const monthDiff = today.getMonth() - birth.getMonth()
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--
            }
            return age
        })
        return {
            user_dob,
            age
        }
    }
}