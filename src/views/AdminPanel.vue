<template>
  <nav class="container" v-if="user">
    <div>
      <p class="email">Logged in as... {{ user.email}}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>

  <ProjectsTable />

</template>

<script>
import ProjectsTable from '../components/ProjectsTable.vue'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'


export default {
  components: {ProjectsTable},
  setup(){
    const { logout, error } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value){
        router.push({name: 'Home'})
      }
    })

    const handleClick = async () => {
      await logout()
      if (!error.value){
        console.log('user logged out')
      }
    }


    return { handleClick, user }
  }

}
</script>

<style>
  nav{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
  }
  nav p.email{
    font-size: 14px;
    color: #999;
  }
  .container {
    width: 90%;
    max-width: 960px;
    margin: 80px auto;
  }
  button{
    cursor: pointer;
  }
</style>