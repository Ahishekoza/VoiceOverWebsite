<template>
    <div class="aboutContainer">
        <div class="row justify-evenly  ">
            <div class="col-xs-12 col-sm-2  col-md-2  flex flex-center ">
                <div class="aboutContainerWrapper">
                    <span v-if="counting" class="countingNumber">{{ currentNumber }} </span>
                    <font-awesome-icon icon="fa-solid fa-plus" class="fa-2x q-ml-md" />
                </div>
                <span class="noOfClients">Clients</span>

            </div>
            <q-separator class="showVertical" vertical />

            <div class="col-xs-12 col-sm-8 col-md-9">
                <q-carousel class="noShowOnSmallScreen" v-model="slide" transition-prev="slide-right"
                    transition-next="slide-left" swipeable animated :autoplay="autoplay" infinite
                    :transition-duration="1000" height="150px">
                    <q-carousel-slide :name="1" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-6 full-height" src="../assets/voiceOverLogo.jpg" />
                            <q-img class="rounded-borders col-6 full-height"
                                src="https://cdn.quasar.dev/img/parallax1.jpg" />
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-6 full-height"
                                src="https://cdn.quasar.dev/img/parallax2.jpg" />
                            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
                        </div>
                    </q-carousel-slide>
                </q-carousel>

                <q-carousel class="showOnSmallScreen" v-model="slide" transition-prev="slide-right"
                    transition-next="slide-left" swipeable animated :autoplay="autoplay" infinite
                    :transition-duration="1000" height="150px">
                    <q-carousel-slide :name="1" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-12 full-height" src="../assets/voiceOverLogo.jpg" />

                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="column no-wrap">
                        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                            <q-img class="rounded-borders col-12 full-height"
                                src="https://cdn.quasar.dev/img/parallax2.jpg" />
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>

        <div style="width: 96%; margin: 10px auto; padding: 10px; ">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-5 flex flex-center">
                    <div style="padding: 10px;" v-motion-slide-visible-left>
                        <p class="homeHeaderName ">About Me</p>
                        <p class="underline"></p>
                        <p class="homeContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
                            asperiores?</p>
                        <br>
                        <p class="homeContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error
                            sint, enim
                            ratione odit
                            neque officiis recusandae veniam sed dolore.</p>
                        <br>
                        <p class="homeContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, eos odio
                            debitis
                            asperiores
                            dolor quae?</p>
                    </div>
                </div>
                <div class="col-xs-12  col-sm-6 offset-md-1 col-md-6 flex flex-center ">
                    <div class="imageWrapper " v-motion-pop-visible>
                        <q-img src="../assets/voiceOverLogo.jpg" class="displayImage" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'AboutMe',
    components: {
        FontAwesomeIcon,
    },
    setup() {
        const currentNumber = ref(0)
        const targetNumber = ref(100)
        const counting = ref(false)
        const slide = ref(1)
        const autoplay = ref(true)
        return {
            currentNumber,
            targetNumber,
            counting,
            slide,
            autoplay
        }
    },
    methods: {
        countUpToTarget() {
            if (this.currentNumber < this.targetNumber) {
                setTimeout(() => {
                    this.currentNumber++
                    this.countUpToTarget()
                }, 10)
            }
        }
    },
    mounted() {
        this.counting = true;
        this.countUpToTarget()
    }
}
</script>
<style>
.aboutContainer {
    width: 100%;
    height: 100%;
    margin: 30px auto;
}

.aboutContainerWrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.countingNumber {
    font-size: 60px;
}

.giveSpaces {
    margin-left: 16px !important;
}

.noOfClients {
    width: 80%;
    margin: 0 auto;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
}

.customerImageWrapper {
    width: 100%;
    height: 100px !important;
    padding: 10px;
    margin: 0 auto;
}

.customerImageSize {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/*  */
.homeHeaderName {
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Lora', serif;
}

.underline {
    width: 80%;
    height: 1px;
    background-color: black;
    margin: 10px 0;
}

.homeContent {
    font-size: 1.3rem;
    margin: 10px 0;
    font-family: 'Work Sans', sans-serif;
}

.imageWrapper {
    height: 400px;
    width: 400px;
}

.displayImage {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.showOnSmallScreen {
    display: none;
}

@media (max-width: 576px) {
    .customerWrapper {
        width: 80%;
        margin: 0 auto;
    }

    .customerImageWrapper {
        height: 100px !important;
    }

    .homeHeaderName {
        display: block;
        width: 100%;
        text-align: center;
    }

    .underline {
        width: 50%;

        margin: 10px auto;
    }

    .homeContent {
        font-size: 1.0rem;
        margin: 10px 0;
        font-family: 'Work Sans', sans-serif;
    }

    .noShowOnSmallScreen {
        display: none
    }

    .showOnSmallScreen {
        display: block;
    }
}

@media (max-width: 820px) {
    .showVertical {
        display: block;
    }

    .aboutContainer {
        padding: 10px;
    }

    .imageWrapper {
        height: 300px;
        width: 300px;
    }

    .noShowOnSmallScreen {
        display: none
    }

    .showOnSmallScreen {
        display: block;
    }
    .homeContent {
        font-size: 1.0rem;
        margin: 10px 0;
        font-family: 'Work Sans', sans-serif;
    }


}</style>