<template>
  <div class="container">
      <h2>Login</h2>
      <LoginForm @login="enterAdmin" />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

export default {
    components: {LoginForm},
    setup(){

        const router = useRouter()

        const enterAdmin = () => {
            router.push({ name: 'AdminPanel'})
        }

        return {enterAdmin}
    }

}
</script>

<style>
    .container{
        text-align: center;
        padding: 20px 0;
    }

    .container form{
        width: 300px;
        margin: 20px auto;
    }
    .container label {
        display: block;
        margin: 20px 0 10px;
    }
    .container input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .container button {
        font-weight: 600;
        width: 50%;
        color: #282726;
        background-color: #fff;
        border: none;
        border-radius: 1.5rem;
        padding:2%;
        margin-right: -1em;
        }


</style>