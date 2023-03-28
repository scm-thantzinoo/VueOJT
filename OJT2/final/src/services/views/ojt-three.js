import {
    required,
    email,
    url,
    numeric
} from '@vuelidate/validators'
import {
    reactive
} from 'vue';
import {
    useVuelidate
} from '@vuelidate/core'

export default {
    setup() {
        const profile = reactive({
            name: '',
            email: '',
            url: '',
            phone: ''
        })
        const rules = {
            name: {
                required
            },
            email: {
                required,
                email
            },
            url: {
                required,
                url
            },
            phone: {
                required,
                numeric
            },
        };
        const v$ = useVuelidate(rules, profile)
        return {
            profile,
            v$
        }
    },
}