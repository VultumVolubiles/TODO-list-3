<template>
  <h1>New</h1>
</template>

<script>
  export default {
    name: "newComponent.vue",
    data () {
      return {
        contact: {
          id: null,
          firstname: "",
          secondname: "",
          surname: "",
          numbers: {
            main: true,
            num: ""
          },
          email: {

          },
          birthdate: "",
          company: "",
          photo: ''
        }
      }
    },
    addContact () {
      //
    }
  }
</script>

<style scoped>

</style>