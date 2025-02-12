const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final',
            author: 'Brandon',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent (){
            console.log(event);
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }


    }
})

app.mount('#app')