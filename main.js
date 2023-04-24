const { createApp } = Vue;

createApp({
    data(){
        return{
            text: "押すと文章が変わります",
        }
    },
    methods: {
        changeText(){
            this.text = "Hello Vue";
        }
    }
})