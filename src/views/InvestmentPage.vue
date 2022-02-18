<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Investment</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Investment Page</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Investment Page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'InvestmentPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
