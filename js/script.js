console.log("Vue Ok", Vue);
const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            text1: "Hello",
            text2: "World"
        }
             
        
    }
})

app.mount ("#root");