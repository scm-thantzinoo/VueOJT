import { ref, reactive } from 'vue';

export default {
    props: ['book', 'isNewBook'],
    emits: ['createNewBook', 'editBook'],
    setup(props, { emit }){
        const modalBook = reactive({
            index: null,
            title: null,
            price: null,
            author: null,
            date: null,
        });
        const modalTitle = ref(props.isNewBook ? "Create New Book" : "Edit Book Detail");
        if(!props.isNewBook){
            modalBook.index = props.book.index;
            modalBook.title = props.book.title;
            modalBook.price = props.book.price;
            modalBook.author= props.book.author;
            modalBook.date = props.book.date;
        }
        const submitBook = ()=>{
            if(props.isNewBook){
                emit('createNewBook', modalBook)
            }else{
                emit('editBook', modalBook)
            }
        }
        return {
            modalTitle,
            modalBook,
            submitBook
        }
    }
}