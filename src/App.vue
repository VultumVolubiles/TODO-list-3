<template>
  <div id="app" class="grid">
    <div class="grid__row">
      <Contacts class="grid__item"></Contacts>
      <NewContact class="grid__item"></NewContact>
      <Profile class="grid__item"></Profile>
    </div>

  </div>
</template>

<script>
import Contacts from './components/Contacts.vue'
import NewContact from './components/NewContact.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'app',
  components: {
    Contacts,
    NewContact,
    Profile
  }
}
</script>

<style scoped>
.grid {
  border: solid 1px black;
}

.grid__row {
  display: flex;
}

.grid__column {
  display: flex;
  flex-direction: column;
}

.grid__item {
  flex: 1;
  display: flex;
  padding: 12px;
  margin: 12px;
  border: solid 1px gray;
  text-align: center;
}

.grid__item:hover {
  color: #ffffff;
  background: rgba(0,0,0,0.8);
  cursor: pointer;
}

.grid__item:active {
  background: purple;
}
#app {
//  font-family: 'Avenir', Helvetica, Arial, sans-serif;
//  text-align: center;
  color: #2c3e50;
  display: flex;
}
Contacts {
  display: flex;
  flex: 1;
  margin: 0 20px;
  border: 1px solid black;
}
Profile {
  display: flex;
  flex: 1;
  border: 1px solid black;
}
NewContact {
    display: flex;
    flex: 1;
    border: 1px solid black;
}
</style>
