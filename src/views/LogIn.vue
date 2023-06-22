<template>

    <ion-content :fullscreen="true">
      <ExploreContainer  subname="This is a Subname">
        {{state.count}}
        <ion-input size="200" type="text" class="ion-margin-bottom"  fill="outline" placeholder="User name"></ion-input>
        <ion-input type="password"  fill="outline" placeholder="Password"></ion-input>
        <ion-button id="open-toast" expand="block" @click="login">Log in</ion-button>
        <ion-button expand="block" @click="api">Api Test</ion-button>



      </ExploreContainer>
      <ion-toast trigger="open-toast" message="This toast will disappear after 1 seconds" :duration="1000"></ion-toast>

    </ion-content>

</template>
<script lang="ts">

</script>
<script setup lang="ts">
  import { IonInput, IonToast, IonContent, IonButton } from '@ionic/vue';
  import ExploreContainer from '../components/ExploreContainer.vue';
  import {onMounted} from "vue"; //Импорт загрузочного скрипта
  import {services} from "@/services"; //Импорт важных функций

  import { reactive } from 'vue' //Импорт реактивных переменных

  const state = reactive({ count: 0 })

  function api(element: string) {
    services.apitest("This is passed to api() from LogIn.vue" + element)
  }
  function login() {
    services.login()
    state.count +=1
  }
  function init() {
    console.log("This function onMounted(init) is called from LogIn.vue")
  }
  onMounted(init)
</script>

