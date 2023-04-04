import {
    ref,
    watch,
    onMounted
} from "vue";
import Book from '@/components/Book.vue'
import Modal from '@/components/Modal.vue'
import {
    setLocal,
    getLocal
} from '@/helpers/localstorage'

export default {
    components: {
        Book,
        Modal
    },
    setup() {
        const books = ref([{
                title: "Tailwind CSS 1 (Special Edition)",
                price: 18.99,
                author: 'Thant Zin Oo',
                date: 'Friday, October 13, 2000'
            },
            {
                title: "Tailwind CSS 2 (Special Edition)",
                price: 18.99,
                author: 'Thant Zin Oo',
                date: 'Friday, October 13, 2000'
            },
            {
                title: "Tailwind CSS 3 (Special Edition)",
                price: 18.99,
                author: 'Thant Zin Oo',
                date: 'Friday, October 13, 2000'
            },
        ]);

        // to watch with localstorage, not working yet by the way
        // onMounted(() => {
        //     const booksList = getLocal('books')
        //     if (booksList) {
        //         books.value = booksList
        //     } else {
        //         setLocal('books', {
        //             ...books.value
        //         })
        //     }
        // })

        // watch(books, (newValue, oldValue) => {
        //     setLocal('books', newValue)
        // }, {
        //     deep: true
        // })

        const modalBook = ref(null)

        const isNewBook = ref(false)

        const changeBookData = (book) => {
            let tmpBook = {
                ...book
            };
            tmpBook.index = books.value.indexOf(book)
            const parsedDate = new Date(tmpBook.date);
            tmpBook.date = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}-${parsedDate.getDate().toString().padStart(2, '0')}`;
            modalBook.value = tmpBook;
        }

        const modalCancel = () => {
            isNewBook.value = false
            modalBook.value = null
        }

        const createBook = () => {
            isNewBook.value = true
            modalBook.value = {}
        }

        const editBook = ({
            index,
            title,
            price,
            author,
            date
        }) => {
            const options = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            };
            books.value[index] = {
                title,
                price,
                author,
                date: new Date(date).toLocaleDateString('en-US', options)
            }
            modalBook.value = null;
        }

        const createNewBook = ({
            title,
            price,
            author,
            date
        }) => {
            isNewBook.value = false
            modalBook.value = null
            const options = {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            };
            books.value.push({
                title,
                price,
                author,
                date: new Date(date).toLocaleDateString('en-US', options)
            })
        }

        return {
            books,
            modalBook,
            isNewBook,
            createBook,
            changeBookData,
            modalCancel,
            editBook,
            createNewBook
        };
    }
}