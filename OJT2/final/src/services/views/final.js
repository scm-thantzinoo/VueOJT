import store from '@/store'

export default {
    setup() {
        const usersList = store.getters.users;
        const addUsers = (new_user) => {
            store.commit('addUser', {
                ...new_user
            })
        }
        const createRandomUsers = () => {
            addUsers({
                user_id: store.getters.lastUserId,
                username: 'testUser1',
                gender: 'male',
                email: 'testuser1@gmail.com',
                address: 'Yangon',
                dob: '2000-11-03',
                age: '22',
                role: 'admin',
            })
            addUsers({
                user_id: store.getters.lastUserId,
                username: 'testUser2',
                gender: 'female',
                email: 'testuser2@gmail.com',
                address: 'Yangon',
                dob: '1999-04-21',
                age: '24',
                role: 'user',
            })
            addUsers({
                user_id: store.getters.lastUserId,
                username: 'testUser3',
                gender: 'male',
                email: 'testuser3@gmail.com',
                address: 'Yangon',
                dob: '1995-06-05',
                age: '27',
                role: 'guest',
            })
        }
        return {
            usersList,
            createRandomUsers
        }
    }
}