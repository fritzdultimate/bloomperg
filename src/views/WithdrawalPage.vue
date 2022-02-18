<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Withdrawal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Withdrawal Page</ion-title>
        </ion-toolbar>
      </ion-header>
      
      Withdrawal
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'WithdrawalPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
