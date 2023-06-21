<template>
  <div id="container">
    <ion-grid>
      <ion-row>
        <ion-col size="8" offset="2">
          <strong>{{ name }}</strong>
          <slot/>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from '@ionic/vue';

defineProps({
  name: String,
  subname: String
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

</style>
