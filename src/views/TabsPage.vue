<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
                <!-- fab placed to the bottom end -->
                <ion-fab vertical="center" horizontal="end" slot="fixed">
                    <ion-fab-button>
                        <ion-icon :icon="add"></ion-icon>
                    </ion-fab-button>
                </ion-fab>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="home" />
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="investment" href="/tabs/invest">
                    <ion-icon :icon="lockClosed" />
                    <ion-label>Invest</ion-label>
                </ion-tab-button>
                
                <ion-tab-button tab="savings" href="/tabs/savings">
                    <ion-icon :icon="wallet" />
                    <ion-label>Savings</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="withdrawal" href="/tabs/withdraw">
                    <ion-icon :icon="lockOpen" />
                    <ion-label>Withdraw</ion-label>
                </ion-tab-button>
                
                <ion-tab-button tab="profile" href="/tabs/profile">
                    <ion-icon :icon="person" />
                    <ion-label>Account</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { person, home, lockClosed, wallet, lockOpen, add } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { 
      IonLabel, 
        IonTabs, 
        IonTabBar, 
        IonTabButton, 
        IonIcon, 
        IonPage, 
        IonRouterOutlet, 
    },
  setup() {
        return { 
        person, 
        home,
        wallet,
        lockClosed,
        lockOpen,
        add
        }
  }
});
</script>
