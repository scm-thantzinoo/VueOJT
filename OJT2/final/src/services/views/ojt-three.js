import {
    required,
    email,
    url,
    numeric,
    helpers
} from '@vuelidate/validators'
import {
    reactive,
    nextTick
} from 'vue';
import {
    useVuelidate
} from '@vuelidate/core'

export default {
    setup() {
        const initialState = {
            name: '',
            email: '',
            url: '',
            phone: ''
        };
        const profile = reactive({...initialState})
        const rules = {
            name: {
                required: helpers.withMessage("Name is required.", required)
            },
            email: {
                required: helpers.withMessage("Email is required.", required),
                email: helpers.withMessage("Email is not valid.", email)
            },
            url: {
                required: helpers.withMessage("URL is required.", required),
                url: helpers.withMessage("URL is not valid.", url)
            },
            phone: {
                required: helpers.withMessage("Phone is required.", required),
                numeric: helpers.withMessage("Phone is not valid.", numeric)
            },
        };
        const v$ = useVuelidate(rules, profile)
        const clearInput = async () => {
            await nextTick()
            Object.assign(profile, initialState);
            v$.value.$reset()
        }
        const submitForm = () => {
            alert(`Inputs\n-------\n\nName: ${profile.name}\nEmail: ${profile.email}\nURL: ${profile.url}\nPhone: ${profile.phone}`)
            clearInput()
        }
        return {
            profile,
            v$,
            clearInput,
            submitForm
        }
    },
}