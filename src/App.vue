<template>
  <div id="app">
    <Contacts/>
    <NewContact/>
    <Profile/>

  </div>
</template>

<script>
  import Contacts from './components/Contacts.vue'
  import NewContact from './components/NewContact.vue'
  import Profile from './components/Profile.vue'

  export default {
    name: "App",
    components: {
        Contacts,
        NewContact,
        Profile
    },

  }
</script>

<style scoped>

</style>