const { createApp } = Vue;

const vueapp = createApp({
    data(){
        return{
            text: "Hello Electron",
            flag: true,
            move: false,
            duration: 1,
            backgroundcolor: "white",
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
        changeBoxColor(){
            gsap.to('.box', { background: this.backgroundcolor, duration: 1.5 });
        }
        ,
        moveBox(){
            if(!this.move){
                gsap.to('.box', { x: 200, duration: this.duration });
                this.move = !this.move;
                console.log('toRight');
            }else{
                gsap.to('.box', { x: 0, duration: this.duration });
                this.move = !this.move;
                console.log('toLeft');
            }
        },
    }
});

vueapp.mount("#app")