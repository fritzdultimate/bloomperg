<template>
    <ion-page>
        <ion-header class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        <ion-icon :icon="apps"></ion-icon>
                    </ion-button>
                </ion-buttons>

                <ion-buttons slot="end">
                    <ion-button class="bordered" fill="solid" color="light">
                        <ion-icon color="custom" :icon="notifications"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>

            <ion-item lines="none">
                <ion-avatar slot="start" style="background: blue">
                    <!-- <img src="https://habib.al-mawali.com/wp-content/uploads/IMG_4838-1-768x768.jpg"> -->
                </ion-avatar>
                <ion-label>
                    <p>Hello,</p>
                    <h3>Nwosu Darlington</h3>
                </ion-label>
            </ion-item>
        </ion-header>

        <ion-content>
            <home-money-slides :homeHeaderSlideData="homeHeaderSlideData"></home-money-slides>
            <div class="container ">
                <h2>What-To-Do-Today</h2>
                <ion-item lines="none">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                    <ion-icon :icon="briefcase"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="10">
                                <ion-label>
                                    <h4>Safelock</h4>
                                    <h6>Don't spend it</h6>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>

                <ion-item lines="none">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                    <ion-icon :icon="timerOutline"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="10">
                                <ion-label>
                                    <h4>Set A Target</h4>
                                    <h6>Invest Wisely</h6>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>

                <ion-item lines="none">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                    <ion-icon :icon="wallet"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="10">
                                <ion-label>
                                    <h4>Topup Your Account</h4>
                                    <h6>Make Transactions easy</h6>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </div>
            <div class="container what-to-do">
                <h2>What-To-Do</h2>
                <ion-item lines="none" style="white-space: nowrap;">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                    <ion-icon :icon="lockClosed"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="10">
                                <ion-label style="white-space: nowrap;">
                                    <h4 class="">Set Security Questions</h4>
                                    <h6>Secure Your Account</h6>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>

                <ion-item lines="none" style="white-space: nowrap;">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                    <ion-icon :icon="lockClosed"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="10">
                                <ion-label style="white-space: nowrap;">
                                    <h4 class="">Set Two Step Authentication</h4>
                                    <h6>Strenghten Your Security</h6>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </div>
            <div class="other-options" style="display: flex; flex-direction: column">
                <h3 class="subhead">
                    Other Options
                </h3>
                <ion-grid class="ion-justify-content-center">
                    <ion-row class="ion-align-items-center">
                        <ion-col size="6">
                            <ion-card style="background: rgb(108 79 84 / 18%)">
                                <ion-card-header>
                                    <div class="main">
                                        <ion-icon style="font-size: 20px" color="custom" :icon="wallet"></ion-icon>
                                    </div>
                                </ion-card-header>
                                <ion-card-content class="ion-text-left">
                                    <ion-card-title class="ion-margin-bottom"> Today's Rate</ion-card-title>
                                    
                                    <ion-text class="tiny-text">
                                        Check out today's rates across all investment and savings features
                                    </ion-text>

                                    <ion-button type="button" fill="clear" size="small">
                                        See Rates
                                    </ion-button>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <ion-col size="6">
                            <ion-card style="background: rgb(255 7 7 / 18%)">
                                <ion-card-header>
                                    <div class="main">
                                        <ion-icon style="font-size: 20px; color: rgb(245 5 171)" :icon="wallet"></ion-icon>
                                    </div>
                                </ion-card-header>
                                <ion-card-content class="ion-text-left">
                                    <ion-card-title class="ion-margin-bottom" style="color: rgb(245 5 171)"> Today's Rate</ion-card-title>
                                    
                                    <ion-text class="tiny-text">
                                        Check out today's rates across all investment and savings features
                                    </ion-text>

                                    <ion-button type="button" fill="clear" size="small" style="color: rgb(245 5 171)">
                                        See Rates
                                    </ion-button>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <ion-col size="6">
                            <ion-card style="background: rgb(108 79 84 / 18%)">
                                <ion-card-header>
                                    <div class="main">
                                        <ion-icon style="font-size: 20px" color="custom" :icon="wallet"></ion-icon>
                                    </div>
                                </ion-card-header>
                                <ion-card-content class="ion-text-left">
                                    <ion-card-title class="ion-margin-bottom"> Today's Rate</ion-card-title>
                                    
                                    <ion-text class="tiny-text">
                                        Check out today's rates across all investment and savings features
                                    </ion-text>

                                    <ion-button type="button" fill="clear" size="small">
                                        See Rates
                                    </ion-button>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <ion-col size="6">
                            <ion-card style="background: rgb(255 7 7 / 18%)">
                                <ion-card-header>
                                    <div class="main">
                                        <ion-icon style="font-size: 20px; color: rgb(245 5 171)" :icon="wallet"></ion-icon>
                                    </div>
                                </ion-card-header>
                                <ion-card-content class="ion-text-left">
                                    <ion-card-title class="ion-margin-bottom" style="color: rgb(245 5 171)"> Today's Rate</ion-card-title>
                                    
                                    <ion-text class="tiny-text">
                                        Check out today's rates across all investment and savings features
                                    </ion-text>

                                    <ion-button type="button" fill="clear" size="small" style="color: rgb(245 5 171)">
                                        See Rates
                                    </ion-button>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content> 
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { apps, notifications, briefcase, lockClosed, pulse, analytics, sunnyOutline, timerOutline, wallet } from 'ionicons/icons';
import HomeMoneySlides from '@/components/slides/HomeMoneySlides.vue'

export default  defineComponent({
    name: 'HomePage',
    components: {
        IonHeader, 
        IonToolbar, 
        IonContent, 
        IonPage,
        HomeMoneySlides,
        IonGrid, 
        IonRow, 
        IonCol
    },

    setup() {
        return {
            apps,
            notifications,
            briefcase,
            lockClosed,
            sunnyOutline,
            timerOutline,
            wallet,
            slidesOptions: {
                slidesPerView: 1.8
            },
            homeHeaderSlideData: [
                {
                    name: "Total Savings",
                    amount: 100928.32,
                    icon: briefcase
                },
                {
                    name: "Total Investments",
                    amount: 48.42,
                    icon: lockClosed
                },
                {
                    name: "Flex Dollar",
                    amount: 0.00,
                    icon: analytics
                },
                {
                    name: "Locked Fund",
                    amount: 200.32,
                    icon: pulse
                }
            ]
        }
    }
});
</script>


<style scoped>
    ion-header ion-toolbar, ion-header ion-item {
        --background: #f1f5f8;
        background: #f1f5f8;
        padding: 0 10px;
    }

    ion-header ion-toolbar .bordered {
        --border-radius: 10px;
        --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;
    }

    ion-item h3 {
        font-weight: 700;
        font-size: 14px;
    }

    ion-item p {
        font-weight: 500;
        font-size: 14px;
    }

    ion-item ion-avatar {
        --border-radius: 40%;
    }

    ion-content {
        --background: linear-gradient(90deg, rgba(43,90,148,1) 0%, rgba(45,112,229,1) 35%, rgba(45,112,229,1) 100%);
    }

    ion-content ion-card {
        width: 100%;
        box-shadow: none;
        border-radius: 14px;
        padding: 14px;
        background: rgba(255,255,255,.8);
    }
    .container {
        padding: 6px 20px;
        color: #ffffff;
    }

    .container ion-item {
        --background: rgba(255,255,255,.1);
        padding: 0;
        margin: 14px 0;
        --border-radius: 14px;
        color: #FFFFFF;
        font-weight: 600;
    }

    .container ion-item ion-label {
        padding: 6px 0;
    }

    .container ion-item ion-label h4 {
        font-weight: 600;
        font-size: 16px;
    }

    .container ion-item ion-label h6 {
        color: rgb(255,255,255);
    }

    ion-content .container h2 {
        padding-bottom: 8px;
        
    }

    .other-options {
        background: #f1f5f8;
        padding: 4px 10px 20px 10px;
        border-radius: 0 0 28px 28px;
    }

    .other-options .subhead {
        font-weight: 700;
        color: rgba(3, 4, 12, 0.2);
    }

    ion-content ion-card {
        width: 100%;
        box-shadow: none;
        border-radius: 14px;
        padding: 14px;
        background: rgba(255,255,255,.8);
    }

    .tiny-text {
        font-size: 10px;
        font-weight: 600;
        color: rgba(37, 37, 37, 0.89);
    }
</style>