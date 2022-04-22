<template>
  <div class="">
    <div class="container mx-auto">
      <div class="">
        <div class="flex"
          v-for="el of allElements"
          :key="el.id"
        >        
        <p @click="showAlert(el.id)" class="first-j mr-2 text-red-600 hover:bg-green-500" v-if="(el.id + 1)%2 != 0">{{el.id + 1}} <span>{{el.name}}</span></p>            
        <p @click="showAlert(el.id)" class="first-j mr-2 text-blue-600 hover:bg-green-500" v-if="(el.id + 1)%2 == 0">{{el.id + 1}} <span>{{el.name}}</span></p>               
          
        </div>
        <div>
            <p>{{getCounter}}</p>
            <p @click="getClick()">Click</p>
        </div>

        <div>
            <form action="">
                <input                  
                  class="val-1 block border border-gray-200 p-2 my-4 w-full rounded-md"
                  type="text"
                  placeholder="имя"
                />
                <input                  
                  class="val-2 block border border-gray-200 p-2 my-4 w-full rounded-md"
                  type="text"
                  placeholder="фамилия"
                />
                <input                  
                  class="val-3 block border border-gray-200 p-2 my-4 w-full rounded-md"
                  type="text"
                  placeholder="E-mail"
                />
                <p class="valid mb-4">Валидировать значения</p>
                <p >Имя: <span class="res-1"></span></p>
                <p >Фамилия: <span class="res-2"></span></p>
                <p >E-mail: <span class="res-3"></span></p>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
$(document).ready(function () { 
        $(".valid").click(function(){
            if($(".val-1").val() !== '' && $(".val-1").val().length > 4 &&
            $(".val-2").val() !== '' && $(".val-2").val().length > 4 &&
            $(".val-3").val() !== '' && $(".val-3").val().length > 4){
                $(".res-1").html($(".val-1").val());
                $(".res-2").html($(".val-2").val());
                $(".res-3").html($(".val-3").val());
            }
        });
    })
import { mapActions, mapGetters } from "vuex";
export default {
    data(){
        return{
            counter: 0,
        }
    },
  computed: {
    ...mapGetters(["allElements", "getCounter"]),    
  },
  async mounted() {
    this.fetchElements();    
  },
  methods: {
      ...mapActions(["fetchElements", "getClick"]),
      showAlert(id){
          alert(id)
      }
      
    },

};
</script>