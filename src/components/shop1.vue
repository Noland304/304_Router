<script setup>

import { ref } from 'vue';

const travelList=ref([
   {name: 'ร้านอาหารภาคเหนือ', price:1000, img:"https://www.romsaifurniture.com/wp-content/uploads/2021/01/IMG_7734-scaled.jpg", quantity: 0 ,
    text_box:''
    }])


</script>


<template>
      <div class="box_all">
          <div class="col" v-for="(n,i) in travelList" :key="n">
              <div class="card" style="width: 25rem;" >
                  <img :src="n.img" class="card-img-top">
                    <div class="card-body">
                      <h3 class="card-title">{{ n.name }}</h3>
                      <p>ราคาโต๊ะ : {{n.price}}</p>
                      <h6>1 โต๊ะ ต่อ 3 คน</h6>

                      <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> จองโต๊ะอาหาร </a>
                    </div>
                  </div>
                </div>
              </div>
    
    </template>
    

<style>

.card-img-top{
  height: 100%;
  padding: 25px;

}
.box_all{
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  text-align: center
}

</style>
