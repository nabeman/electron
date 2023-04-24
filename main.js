const { createApp } = Vue;

const vueapp = createApp({
    data(){
        return{
            text: "Hello Electron",
            flag: true,
            move: false,
        }
    },
    methods: {
        changeText(){
            if(this.flag){
            this.text = "Hello Vue";
            this.flag = !this.flag;
        }else{
            this.text = "Hello Electron";
            this.flag = !this.flag;
        }
        },
        moveBox(){
            if(!this.move){
                gsap.to('.box', { x: 200, duration: 1 });
                this.move = !this.move;
                console.log('toRight');
            }else{
                gsap.to('.box', { x: 0, duration: 1 });
                this.move = !this.move;
                console.log('toLeft');
            }
        }
    }
});

vueapp.mount("#app")