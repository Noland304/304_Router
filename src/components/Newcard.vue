<template>
<div class="row mb-2">
        <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis">ร้านที่ {{ i+1 }} </strong>
              <h3 class="mb-0">{{n.name}}</h3>
              <div class="mb-1 text-body-secondary">ราคาต่อโต๊ะ {{n.price}} บาท</div>
              <p class="card-text mb-auto">{{n.text_box}}</p>
              
              <div style="margin-bottom: 30px;">
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
              จองโต๊ะอาหาร
                <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
             </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250"  role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
              </svg>
            </div>
          </div>
        </div>

      
    </div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';


const travelList=ref([
   {name: 'ร้านอาหารภาคเหนือ', price:1000, img:"https://reviewchiangmai.com/wp-content/uploads/2022/01/02-%E0%B9%80%E0%B8%82%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-V2-1024x1024.jpg", quantity: 0 ,
    text_box:''
    }, 

  {name:'ร้านอาหารภาคใต้', price:800, img:"https://roijang.com/wp-content/uploads/2022/06/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2.jpg", quantity: 0 ,
    text_box:''
    },
  
  {name:'ร้านอาหารภาคกลาง', price:900, img:"https://img.wongnai.com/p/1920x0/2018/10/10/81be079bf23747b7b2cae57c73ac9b62.jpg", quantity: 0 ,
    text_box:''
    },

  {name:'ร้านอาหารภาคอีสาน', price:10, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuhK23JfOqOJqFiixnAMEkviOIUW49WPhWg&usqp=CAU", quantity: 0 ,
    text_box:''
    },

  
])

</script>