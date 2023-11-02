<template>
    <div class="servicesContainer">
        <span class="serviceHeading">Watch</span>
        <p class="underline"></p>
        <div class="row flex flex-center q-gutter-y-md videoBackgroundSize bg-white shadow-2 rounded-borders " >
            <div  v-motion-fade-visible class="col-md-4 col-sm-4  col-xs-12 flex flex-center ">
                <q-video class="shadow-2 videoSize" src="https://www.youtube.com/embed/67_CU8E9sdY?si=vUaO46XxO2s_Wsuz">

                </q-video>
            </div>
            <div v-motion-fade-visible  class="col-md-4 col-sm-4 col-xs-12 flex flex-center">
                <q-video class="shadow-2 videoSize" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0">

                </q-video>
            </div>
            <div v-motion-fade-visible  class="col-md-4 col-sm-4 col-xs-12 flex flex-center">
                <q-video class="shadow-2 videoSize" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0">

                </q-video>
            </div>
            <div v-motion-fade-visible  class="col-md-4 col-sm-4 col-xs-12 flex flex-center">
                <q-video class="shadow-2 videoSize" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0">

                </q-video>
            </div>
            <div v-motion-fade-visible  class="col-md-4 col-sm-4 col-xs-12 flex flex-center">
                <q-video class="shadow-2 videoSize" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0">

                </q-video>
            </div>
            <div v-motion-fade-visible  class="col-md-4 col-sm-4 col-xs-12 flex flex-center">
                <q-video class="shadow-2 videoSize" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0">

                </q-video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>
<style scoped>
.servicesContainer {
    width: 100%;
    height: 100%;
    margin: 30px 0;
    background-color: #0F0F0F;
    padding: 10px;
}



.serviceHeading {
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-align: center;
    display: block;
    color: white;
    font-family: 'Lora', serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.underline {
    width: 30%;
    height: 1px;
    background-color: white;
    margin: 10px auto;
}

.videoBackgroundSize {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
}

.videoSize {
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin: 0 10px;
}

@media (max-width: 576px) {
    .videoSize {
        width: 100%;
    }

    .videoBackgroundSize {
        width: 100%;
    }
}
</style>