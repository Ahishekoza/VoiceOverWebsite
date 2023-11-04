<template>
    <div class="testimonalContainer">
        <span class="testimonalHeading">Testimonals</span>
        <p class="underline"></p>
        <!-- Big Screen Carousel -->
        <q-carousel class="noShowOnSmallScreen " v-model="slide" control-color="black" :transition-duration="1000"
            navigation padding autoplay infinite transition-prev="slide-right" transition-next="slide-left" swipeable
            animated height="300px">
            <q-carousel-slide :name="1" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap">
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span  style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span  style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span  style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span  style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span  style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                    <div class="col-6 full-height">
                        <q-img src="../assets/border-design-transparent-background-6.png"
                            class="full-height rounded-borders">
                            <span class="absolute-center  flex flex-center" style="width: 80%;margin: 0 auto;">
                                <span class="q-mb-md" style="font-size: 18px;">Client Name</span>
                                <span  style="font-size: 17px;">Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit.
                                    Deserunt maxime, minima amet
                                    necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                                </span>
                            </span>
                        </q-img>
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
        <!-- Small Screen Carousel -->
        <q-carousel v-model="slide1" ref="carousel" :transition-duration="1000" height="300px" control-color="amber"
            swipeable class="bg-grey-9 showOnSmallDevices">
            <q-carousel-slide :name="1" class="column nowrap">

                <div class="full-height">
                    <q-img src="../assets/border-design-transparent-background-6.png"
                        class="full-height bg-white rounded-borders">
                        <span class="absolute-full  column flex-center" style="width: 90%; margin: 0 auto; z-index: 20;">
                            <span class="q-mb-sm">Client Name</span>
                            <span style="width: 80%;" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </span>
                        </span>
                    </q-img>
                </div>

            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
                <div class="full-height">
                    <q-img src="../assets/border-design-transparent-background-6.png"
                        class="full-height bg-white rounded-borders">
                        <span class="absolute-full column flex-center" style="width: 90%; margin: 0 auto;">
                            <span class="q-mb-sm">Client Name</span>
                            <span style="width: 80%;">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </span>
                        </span>
                    </q-img>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
                <div class="full-height">
                    <q-img src="../assets/border-design-transparent-background-6.png"
                        class="full-height bg-white rounded-borders">
                        <span class="absolute-full column flex-center" style="width: 90%; margin: 0 auto;">
                            <span class="q-mb-sm">Client Name</span>
                            <span style="width: 80%;">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </span>
                        </span>
                    </q-img>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
                <div class="full-height">
                    <q-img src="../assets/border-design-transparent-background-6.png"
                        class="full-height bg-white rounded-borders">
                        <span class="absolute-full column flex-center" style="width: 90%; margin: 0 auto;">
                            <span class="q-mb-sm">Client Name</span>
                            <span style="width: 80%;">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Deserunt maxime, minima amet
                                necessitatibus quasi nesciunt ea placeat. Unde id perferendis eius atque modi, ab omnis!
                            </span>
                        </span>
                    </q-img>
                </div>
            </q-carousel-slide>

            <template v-slot:control>
                <q-carousel-control class="q-gutter-xs" position="bottom-right" :offset="[18, 18]">
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
    font-family: 'Lora', serif;
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
}</style>