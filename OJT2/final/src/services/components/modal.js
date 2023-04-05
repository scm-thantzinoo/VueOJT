import { ref, reactive } from 'vue';
import {
    required,
    helpers
} from '@vuelidate/validators'
import {
    useVuelidate
} from '@vuelidate/core'
export default {
    props: ['book', 'isNewBook'],
    emits: ['createNewBook', 'editBook'],
    setup(props, { emit }){
        const initialState = {
            index: null,
            title: null,
            price: null,
            author: null,
            date: null,
        };
        const modalBook = reactive({...initialState});
        const rules = {
            title: {
                required: helpers.withMessage("Title is required.", required)
            },
            price: {
                required: helpers.withMessage("Price is required.", required),
            },
            author: {
                required: helpers.withMessage("Author is required.", required),
            },
            date: {
                required: helpers.withMessage("Date is required.", required)
            },
        };
        const v$ = useVuelidate(rules, modalBook)
        const modalTitle = ref(props.isNewBook ? "Create New Book" : "Edit Book Detail");
        if(!props.isNewBook){
            modalBook.index = props.book.index;
            modalBook.title = props.book.title;
            modalBook.price = props.book.price;
            modalBook.author= props.book.author;
            modalBook.date = props.book.date;
        }
        const submitBook = ()=>{
            if(!modalBook.title || !modalBook.price || !modalBook.author || !modalBook.date){
                return
            }
            if(props.isNewBook){
                emit('createNewBook', modalBook)
            }else{
                emit('editBook', modalBook)
            }
        }
        return {
            v$,
            modalTitle,
            modalBook,
            submitBook
        }
    }
}