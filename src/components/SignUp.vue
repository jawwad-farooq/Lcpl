<template>
    <div>
        <section class="register">
            <div class="form-box">
                <h1>Register</h1>
                <input type='text' v-model="name" placeholder='name' />
                <br>
                <input type='email' v-model="email" placeholder='email' />
                <br>
                <input type='password' v-model="password" placeholder='password' />
                <br>
                <button v-on:click="signUp" type='submit'>Submit</button>
            </div>
        </section>
    </div>
</template>
   

<script>
// import axios from 'axios';

export default {
    name: "SignUp",
    data(){
        return {
            form:{
                name:'',
                email:'',
                password:''
            },
            error: [

            ]
        }
    },
    methods:{
        async signUp(){
            for(const key in this.form){
                if(this.form[key] === "" || this.form[key].length === 0){
                    this.error.push(key);
                }
            }
            if(this.error.length > 0){
                console.log(this.error, "required fields");
                return;
            }
            // let result = await axios.post("post/route", {
            //     name: this.form.name,
            //     email: this.form.email,
            //     password: this.form.password
            // });
            // console.log(result);
        }
    }
};
</script>