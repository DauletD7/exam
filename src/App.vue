<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import navbar from "./components/NavbarComp.vue"
export default {
  components: {
    navbar
  }
}

// №14

// arr1 = [];
// for(let i = 0; i <= 1000; i++){
//     if(i % 3 == 0){
//         arr1.push(i);
//     }
// }
// console.log(arr1);

// №15

// let a = 'fd';
// if(a){
//     document.getElementById('change').innerHTML = "Другой текст";
// }

// №16-17

// arr2 = [
//     {name: "Daulet"}, 
//     {surname: "Duisen"}, 
//     {age: 21}, 
//     {work: "student"}
//     ]
// console.log(arr2[0].name);
// console.log(arr2[1].surname);
// console.log(arr2[2].age);
// console.log(arr2[3].work);

</script>