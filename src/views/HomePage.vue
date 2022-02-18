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
                    <h3>Habib AlMawali</h3>
                </ion-label>
            </ion-item>
        </ion-header>

        <ion-content>
            <div class="slides ion-margin-bottom">
                <ion-slides :options="slidesOptions">
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <div class="main">
                                    <img src="https://cfl.dropboxstatic.com/static/images/logo_catalog/twitter-card-glyph_m1%402x.png">
                                </div>
                                <img class="files" src="https://i.ibb.co/jD8ypLq/files.jpg">
                            </ion-card-header>
                            <ion-card-content class="ion-text-left">
                                <ion-card-title class="ion-margin-bottom">Dropbox</ion-card-title>
                                <ion-card-subtitle class="ion-text-right">10/50GB</ion-card-subtitle>
                                <ion-progress-bar value="0.5" color="custom"></ion-progress-bar>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>

                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <div class="main">
                                    <img src="https://www.freeiconspng.com/uploads/google-drive-icon-18.png">
                                </div>
                                <img class="files" src="https://i.ibb.co/jD8ypLq/files.jpg">
                            </ion-card-header>
                            <ion-card-content class="ion-text-left">
                                <ion-card-title class="ion-margin-bottom">Google Drive</ion-card-title>
                                <ion-card-subtitle class="ion-text-right">10/50GB</ion-card-subtitle>
                                <ion-progress-bar value="0.4" color="warning"></ion-progress-bar>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                </ion-slides>
            </div>
            <div class="container">
                <h2>Last File</h2>
                <ion-item lines="none">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="3">
                                <ion-button color="light" fill="clear">
                                <ion-icon slot="icon-only" name="document"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="7">
                                <ion-label>
                                    <h4>Project.PDF</h4>
                                    <h6>Google Drive/Docs</h6>
                                </ion-label>
                            </ion-col>
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                <ion-icon slot="icon-only" name="ellipsis-vertical"></ion-icon>
                                </ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>

                <ion-item lines="none">
                    <ion-grid>
                        <ion-row class="ion-align-items-center">
                            <ion-col size="3">
                                <ion-button color="light" fill="clear">
                                    <ion-icon slot="icon-only" name="film"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="7">
                                <ion-label>
                                    <h4>Project.MP4</h4>
                                    <h6>Dropbox/Videos</h6>
                                </ion-label>
                            </ion-col>
                            <ion-col size="2">
                                <ion-button color="light" fill="clear">
                                    <ion-icon slot="icon-only" name="ellipsis-vertical"></ion-icon>
                                </ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-item>
            </div>
        </ion-content> 
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { apps, notifications } from 'ionicons/icons';

export default  defineComponent({
    name: 'HomePage',
    components: {IonHeader, IonToolbar, IonContent, IonPage },

    setup() {
        return {
            apps,
            notifications,
            slidesOptions: {
                slidesPerView: 1.5
            }
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

    ion-content .slides {
        background: #f1f5f8;
        padding: 4px 10px 20px 10px;
        border-radius: 0 0 28px 28px;
    }

    ion-content ion-card {
        width: 100%;
        box-shadow: none;
        border-radius: 14px;
        padding: 14px;
        background: rgba(255,255,255,.8);
    }

    ion-content ion-card .main {
        width: 60px;
        height: 60px;
        border-radius: 50px;
        background: #FFFFFF;
        box-shadow:  7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ion-content ion-card .main img {
        width: 30px;
    }

    ion-content ion-card .files {
        padding-top: 14px;
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
        color: rgba(255,255,255,.66);
    }

    ion-content .container h2 {
        padding-bottom: 8px;
    }
</style>