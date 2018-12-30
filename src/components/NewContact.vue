<template>
  <div id="new_contact" class="grid">
    <h1>NewContact</h1>
    <div class="grid__column">
      <input v-model="contact.firstname" type="text" placeholder="firstname" class="grid__item">
      <input v-model="contact.secondname" type="text" placeholder="secondname" class="grid__item">
      <input v-model="contact.surname" type="text" placeholder="surname" class="grid__item">
      <input v-model="number" v-on:keypress.enter="addNumber" type="text" placeholder="number" class="grid__item">
      <ul v-for="(number, index) in contact.numbers" :key="index">
        <li>{{index}} : {{number.num}}</li>
      </ul>
      <input v-model="email" v-on:keypress.enter="addEmail" type="text" placeholder="e-mail" class="grid__item">
      <ul v-for="(mail, index) in contact.email" :key="index">
        <li>{{index}} : {{mail.email}}</li>
      </ul>
      <input v-model="contact.birthdate" type="date" max="2018-11-22" class="grid__item">
      <input v-model="contact.company" type="text" placeholder="company" class="grid__item">
      <button @click="addContact" class="">Добавить</button>
    </div>

  </div>
</template>

<script>
  //import Store from '../store/store.js'
  export default {
    name: "newContact.vue",
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
            main: true,
            mail: "",
          },
          birthdate: this.today(),
          company: "",
          photo: ''
        },
        number: "",
        email: "",
        test: ''
      }
    },
    methods: {
      today () {
        const date = new Date();
        //const str = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      },
      addNumber () {
        this.contact.numbers.push({
          num: this.number
        })
      },
      addEmail () {
        this.contact.numbers.push({
          num: this.number
        })
      },
      addContact () {
        this.$store.commit('add(Store.state, this.contact)');
        //console.log(Store.state.contacts);
      }
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
  button {
    text-decoration:none; text-align:center;
    padding:11px 28px;
    border:solid 1px #1c1c1c;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius: 4px;
    font-size:18px;
    font-weight:bold;
    color:#303030;
    background:#ffffff;
    -webkit-box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
    -moz-box-shadow: 0px 0px 2px #bababa,  inset 0px 0px 1px #ffffff;
    box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
    cursor: pointer;
  }
</style>