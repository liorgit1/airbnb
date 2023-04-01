<template>
  <section>
    <AppHeader />
    <FilterList/>
    <RouterView/>
    <UserMsg/>
  </section>
</template>

<script>


import { userService } from './services/user-service.js'
import { store } from './store/store.js'
import appFooter from './cmps/app-footer.vue'
// import AppHeader from './cmps/AppHeader.vue'
import FilterList from './cmps/FilterList.vue'
import HeaderFilter from './cmps/HeaderFilter.vue'
import UserMsg from './cmps/UserMsg.vue'


export default {
  name: "app",
  components: {
    appFooter,
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    if (user)  store.commit({type: 'setLoggedinUser', user})
  },
  components: {
    // AppHeader,
    HeaderFilter,
    // FilterList,
    UserMsg
  },
}
</script>