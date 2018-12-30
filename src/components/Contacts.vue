<template>
  <h1>Contacts</h1>
<!--<div class="grid">
  <div class="grid__row buttons">
    <button :disabled= "pageNumber == 0" @click="prevPage" class="grid__item title"> Предыдущая </button>
    <button :disabled= "pageNumber >= pageCount" @click="nextPage" class="grid__item title"> Следующая </button>
  </div>

  <div class="op wrapper">
    <div class="original_post" v-for="(value, key) in paginatedData" :key="value.id">
      {{key}} : {{value}}
    </div>
  </div>
</div>-->
</template>

<script>
/*  import Store from '../store/store.js'

*/  export default {
    name: "contacts.vue",
 /*   data () {
       return {
         pageNumber: 0

       }
    },
    props: {
      size: {
        type: Number,
        required: false,
        default: 10
      },
    },
    methods: {
      nextPage(){
        this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      },
    },
    computed: {
      pageCount() {
        var l = this.data.length,
                s = this.size;
        if (l%s==0) //если остаток от деления равен 0, то создаётся одна лишняя пустая страница
          return Math.floor(l/s)-1;
        else
          return Math.floor(l/s);
      },
      paginatedData(){
        const start = this.pageNumber * this.size,
                end = start + this.size;
        return Store.getters.get.slice(start, end);
      },
    }

*/  }
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
  .op {
    padding: 15px auto;
  }

  .op_image {
    flex: 1;
    display: flex;
    position: relative;
    width:300px;
    height: 200px;
//  border: 1px solid black;
  }

  .op_favorite {
    display: flex;
    position: absolute;
    top: -20px;
    right: 2px;
    font-size: 40pt;
    color: whitesmoke;
    cursor: pointer;
    -webkit-appearance: none;
  }

  .op_favorite:hover {
    color: gold;
  }


  .red {
    color: red;
  }
  .op_body {
    flex: 3;
    display: flex;
    flex-direction: column;
//  border: 1px solid black;
  }

  .op_title {
    flex:1;
    display: flex;
    text-transform: uppercase;
    font-weight: 600;
    color: #0f0f0f;
    padding: 0px 15px 20px;
//  border: 1px solid black;
  }

  .op_text {
    flex:10;
    display: flex;
    font-weight: 400;
    padding: 10px 5px 40px 25px;
    color: #0e0e0e;
//  border: 1px solid black;
  }

  .original_post {
    display: flex;
    margin: 15px 0px;
  }

  .read_more {
    flex:1;
    display: flex;
    margin-left: auto;
    text-transform: uppercase;
    text-align: center;
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
  /*.title {
    text-align: center;
    margin: auto;
    text-transform: uppercase;
    font-weight: 600;
    color: whitesmoke;
  }
  .title:hover {
    color:#272727;
    background-color: whitesmoke;
    color: whitesmoke;
  }*/

  ._image {
      /*	margin: 15px 15px;
        padding: 0px;
      */	width: 350px;
      height: 250px;
      /*background-image: url(https://picsum.photos/g/200/300/?random);
      */background-size: cover;
  }
</style>