const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=4',
            books: [
                {title: 'The Final', author: 'latifat', img: 'asset/4.jpg', isFav: true},
                {title: 'The Final', author: 'adeola', img: 'asset/5.jpg', isFav: false},
                {title: 'The Final', author: 'ajoke', img: 'asset/6.jpg', isFav: true}
            ]  
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        toggleFav(book){
            book.isFav = !book.isFav
        }
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