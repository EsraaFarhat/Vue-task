<template>
    <h1>Welcome to {{ email }}</h1>
    <button type="submit" @click="logout">logout</button>
</template>
<script>
export default {
    data:()=>({
        email: ""
    }),
    methods:{
        logout(){
            localStorage.removeItem('logged_in_email')
            this.$router.push('/login')
        }
    },
    created(){
        this.email = localStorage.getItem('logged_in_email')
        if(this.email == null){
            this.$router.push('/login')
        }
    }
}
</script>