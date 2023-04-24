const { createApp } = Vue;

const vueapp = createApp({
    data(){
        return{
            text: "押すと文章が変わります",
            flag: true,
        }
    },
    methods: {
        changeText(){
            if(this.flag){
            this.text = "Hello Vue";
            this.flag = !this.flag;
        }else{
            this.text = "押すと文章が変わります";
            this.flag = !this.flag;
        }
        }
    }
});

vueapp.mount("#app")