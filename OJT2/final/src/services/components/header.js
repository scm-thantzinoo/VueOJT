import { useRoute } from 'vue-router';

export default {
    setup(){
        const route = useRoute();
        const title = "Welcome from Vue OJT";

        const isRoute = (url) => url == route.path;
        return { title, isRoute }
    }
}