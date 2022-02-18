<template>
    <div class="slides ion-margin-bottom">
        <ion-slides :options="slidesOptions">
            <ion-slide v-for="slide in slidesData" :key="slide.name">
                <ion-card>
                    <ion-card-header>
                        <div class="main">
                            <ion-icon color="custom" :icon="slide.icon"></ion-icon>
                        </div>
                    </ion-card-header>
                    <ion-card-content class="ion-text-left">
                        <ion-card-title class="ion-margin-bottom"> {{ slide.name }} </ion-card-title>
                        <ion-card-subtitle class="ion-custom-money">
                            <!-- currency icon here -->
                            {{ slide.amount }}
                        </ion-card-subtitle>
                    </ion-card-content>
                </ion-card>
            </ion-slide>
        </ion-slides>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { briefcase } from 'ionicons/icons';

export default defineComponent({
    name: "HomeMoneySlides",
    props: {
        homeHeaderSlideData: {
            type: Object,
            required: true,
            default: () => {
                return {};
            }
        }
    },
    setup(props) {
        return {
            slidesOptions: {
                slidesPerView: 1.3,
                // speed: 500
            },
            slidesData: props.homeHeaderSlideData
        }
    },
})
</script>

<style scoped>
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
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background: #FFFFFF;
        box-shadow:  7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }

    ion-content ion-card .main img {
        width: 30px;
    }
</style>

