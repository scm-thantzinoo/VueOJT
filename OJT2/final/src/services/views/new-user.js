import DateOfBirth from '@/components/DateOfBirth.vue'
import {
    required,
    email,
    helpers
} from '@vuelidate/validators'
import {
    reactive,
    nextTick,
    ref
} from 'vue';
import {
    useVuelidate
} from '@vuelidate/core'
import store from '@/store'
import router from '@/router'

export default {
    components: {
        DateOfBirth
    },
    setup() {
        const new_user_initial = {
            user_id: store.getters.lastUserId,
            username: '',
            gender: '',
            email: '',
            address: '',
            dob: '',
            role: 'admin',
        }
        const new_user = reactive({
            ...new_user_initial
        });
        const isConfirmed = ref(false);
        const rules = {
            user_id: {
                required: helpers.withMessage("User ID is required.", required)
            },
            username: {
                required: helpers.withMessage("Username is required.", required)
            },
            gender: {
                required: helpers.withMessage("Gender is required.", required),
            },
            email: {
                required: helpers.withMessage("Email is required.", required),
                email: helpers.withMessage("Email is not valid.", email)
            },
            address: {
                required: helpers.withMessage("Address is required.", required),
            },
            dob: {
                required: helpers.withMessage("Date of Birth is required.", required),
            },
            role: {
                required: helpers.withMessage("Role is required.", required),
            },
        };
        const v$ = useVuelidate(rules, new_user)
        const clearInput = async () => {
            await nextTick()
            Object.assign(new_user, new_user_initial);
            v$.value.$reset()
        }
        const submitForm = () => {
            store.commit('addUser', {...new_user})
            clearInput()
            router.replace('/final')
        }
        return {
            new_user,
            v$,
            submitForm,
            clearInput,
            isConfirmed
        }
    }
}