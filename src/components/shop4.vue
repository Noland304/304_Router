<script setup>

import { ref } from 'vue';

const travelList=ref([
    {name:'ร้านอาหารภาคอีสาน', price:10, img:"https://www.trisinfurniture.com/wp-content/uploads/2012/02/%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A2%E0%B8%B2%E0%B8%87-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4.jpg", quantity: 0 ,
    text_box:''
    },])


</script>

<template>
    <div class="box_all">
    <div class="col" v-for="(n,i) in travelList" :key="n">
      <div class="card" style="width: 25rem;" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p>ราคาโต๊ะ : {{n.price}}</p>
          <h6>1 โต๊ะ 3 คน</h6>

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
