import store from '@/store'

export default {
    setup() {
        const usersList = store.getters.users;
        return {
            usersList
        }
    }
}