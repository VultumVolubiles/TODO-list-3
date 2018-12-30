import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex);

const store = new Vuex.Store ({
  state: {
    contacts: {
      id: null,
      firstname: "",
      secondname: "",
      surname: "",
      numbers: {
        main: true,
        num: ""
      },
      email: {
        id: null,
        mail: ''
      },
      birthdate: null,
      company: "",
      photo: ''
    }
  },
  getters: {
    get: state => {
      return state.contacts;
    },
    getById: state => id => {
      return state.contacts.filter(contact => contact.id == id);
    },
    /*
    getById: (state, getters) => id {
      return getters.get.filter(contact => contact.id ==);
    }
    */
  },
  mutations: {
    add (state, contact) {
      var autoid = null;
      if (this.contact.length < 1)
        autoid = 0;
      else
        autoid = this.contact[this.contact.length - 1].id + 1;

      state.contact.push({
        id: autoid,
        firstname: contact.firstname,
        secondname: contact.secondname,
        surname: contact.surname,
        numbers: contact.numbers,
        email: contact.email,
        birthdate: contact.birthdate,
        company: contact.company,
        photo: contact.photo
      });
    },
    delete (state, id) {
      for (var i =0; i < state.contacts.length; i++){
        if (state.contacts[i].id == id)
        {
          state.contacts.splice(i, 1);
          break;
        }
      }
    },
  }
});