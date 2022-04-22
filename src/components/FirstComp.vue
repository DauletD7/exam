<template>
  <div class="">
    <div class="container mx-auto">
      <div class="">
        <div class="flex"
          v-for="el of allElements"
          :key="el.id"
        >        
        <p @click="alert(el.id)" class="first-j mr-2 text-red-600 hover:bg-green-500" v-if="(el.id + 1)%2 != 0">{{el.id + 1}} <span>{{el.name}}</span></p>            
        <p class="first-j mr-2 text-blue-600 hover:bg-green-500" v-if="(el.id + 1)%2 == 0">{{el.id + 1}} <span>{{el.name}}</span></p>               
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
//ss
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allElements"]),    
  },
  async mounted() {
    this.fetchElements();
    // $(document).ready(function () { 
    //     $(".first-j").click(function(){
    //         alert(this.el.id);
    //     });
    // })
  },
  methods: {
      ...mapActions(["fetchElements"])
    },

};
</script>