<template>
    <div class="testimonalContainer">
        <span class="testimonalHeading">Testimonals</span>
        <p class="underline"></p>
        <q-carousel class="noShowOnSmallScreen " v-model="slide" control-color="amber" :transition-duration="1000"
            navigation padding autoplay infinite transition-prev="slide-right" transition-next="slide-left" swipeable
            animated height="300px">
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card>
                    <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card>

                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card>
                    <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card> <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card> <q-card class="col-6 full-height ">
                        <q-card-section class="full-height">
                            <div class="column flex-center  q-pa-sm full-height">
                                <span class="text-h6">Client Name</span>
                                <p class="q-my-md text-h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </p>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </q-carousel-slide>
        </q-carousel>
        <!-- Show On Small Devices -->
        <q-carousel v-model="slide1" ref="carousel" :transition-duration="1000" height="300px" control-color="amber" swipeable autoplay
            infinite class="bg-grey-9 showOnSmallDevices">
            <q-carousel-slide :name="1" class="column nowrap">

                <q-card class="full-height ">
                    <q-card-section class="full-height">
                        <div class="column flex-center  q-pa-sm full-height">
                            <span class="">Client Name</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </p>
                        </div>
                    </q-card-section>
                </q-card>

            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <q-card class="full-height ">
                    <q-card-section class="full-height">
                        <div class="column flex-center  q-pa-sm full-height">
                            <span class="">Client Name</span>
                            <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </p>
                        </div>
                    </q-card-section>
                </q-card>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
                <q-card class="full-height ">
                    <q-card-section class="full-height">
                        <div class="column flex-center  q-pa-sm full-height">
                            <span class="">Client Name</span>
                            <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </p>
                        </div>
                    </q-card-section>
                </q-card>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
                <q-card class="full-height ">
                    <q-card-section class="full-height">
                        <div class="column flex-center  q-pa-sm full-height">
                            <span class="">Client Name</span>
                            <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </p>
                        </div>
                    </q-card-section>
                </q-card>
            </q-carousel-slide>

            <template v-slot:control>
                <q-carousel-control class="q-gutter-xs" position="bottom-right" :offset="[18,18]">
                    <q-btn push round dense color="orange" text-color="black" icon="arrow_left"
                        @click="$refs.carousel.previous()" />
                    <q-btn push round dense color="orange" text-color="black" icon="arrow_right"
                        @click="$refs.carousel.next()" />

                </q-carousel-control>
            </template>
        </q-carousel>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'Testimonal',
    setup() {
        const slide = ref(1)
        const slide1 = ref(1)
        return {
            slide,
            slide1
        }
    }
}
</script>
<style scoped>
.testimonalContainer {
    margin: 50px 0;
}

.testimonalHeading {
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    display: block;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.underline {
    width: 20%;
    height: 1px;
    background-color: black;
    margin: 10px auto;
}

.showOnSmallDevices {
    display: none;
}

@media (max-width: 576px) {
    .noShowOnSmallScreen {
        display: none;
    }

    .showOnSmallDevices {
        display: block;
    }
}

@media (max-width:820px) {
    .noShowOnSmallScreen {
        display: none;
    }

    .showOnSmallDevices {
        display: block;
    }
}
</style>