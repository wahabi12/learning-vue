const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title: 'The Final', author: 'latifat'},
                {title: 'The Final', author: 'adeola'},
                {title: 'The Final', author: 'ajoke'}
            ]  
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // handleEvent (){
        //     console.log(event);
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    }
})

app.mount('#app')