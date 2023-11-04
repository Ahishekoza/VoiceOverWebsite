<template>
    <div class="listenContainer">
        <div class="listenContainerWrapper">
            <p class="listenHeading">Listen</p>
            <p class="underline"></p>
            <div class="row ">
                <!-- Col 1 -->
                <div class="col-md-4 col-sm-6 col-xs-12  ">
                    <span class="recordingHeading">Hindi</span>
                    <div class="column q-gutter-y-sm">

                        <div class="col-sm-3  column q-pa-xs flex-center" v-for="audio in hindi_narration">
                            <audio-normal :title="audio.title"  :audioPath="audio.track"/>
                        </div>
                        
                    </div>
                </div>
                <!-- Col 2 -->
                <div class="col-md-4 col-sm-6 col-xs-12  ">
                    <span class="recordingHeading">English</span>
                    <div class="column q-gutter-y-sm">
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>

                    </div>
                </div>
                <!-- Col 3 -->
                <div class="col-md-4 col-sm-6 col-xs-12  ">
                    <span class="recordingHeading">Marathi</span>
                    <div class="column q-gutter-y-sm">
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <audio-normal title="Hindi IVR"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import AudioNormal from './AudioNormal.vue';
import HindiTrack1 from '@/assets/audios/hindi_narration.mp3'
import HindiTrack2 from '@/assets/audios/hindi_narration_explain.mp3'
import HindiTrack3 from '@/assets/audios/aggressive_voice.mp3'
import HindiTrack4 from '@/assets/audios/child_voice.mp3'
export default {
    name: 'ListenWatch',
    setup() {
        const hindi_narration = ref([
            {
                track:HindiTrack1,
                title:'Hindi IVR',
            },
            {
                track:HindiTrack2,
                title:'Hindi Narration'
            },
            {
                track:HindiTrack3,
                title:'Motivational Voice'
            },
            {
                track:HindiTrack4,
                title:'Child`s Voice'
            }
        ])
        const english_narration = ref([])
        const marathi_naration = ref([])
        return {
            hindi_narration,
            english_narration,
            marathi_naration
        };
    },
    components: { AudioNormal }
}
</script>

<style scoped>
.listenContainer {
    width: 100%;
    height: 100%;
    margin: 20px 0;
}

.listenContainerWrapper {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
}

.listenHeading {
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-family: 'Lora', serif;
}

.underline {
    width: 30%;
    height: 1px;
    background-color: black;
    margin: 10px auto;
}

.recordingHeading {
    display: block;
    margin: 30px 0 10px 0;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    font-family: 'Sofia Sans', sans-serif;
}


</style>
