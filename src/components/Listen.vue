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
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>


                    </div>
                </div>
                <!-- Col 2 -->
                <div class="col-md-4 col-sm-6 col-xs-12  ">
                    <span class="recordingHeading">English</span>
                    <div class="column q-gutter-y-sm">
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>



                    </div>
                </div>
                <!-- Col 3 -->
                <div class="col-md-4 col-sm-6 col-xs-12  ">
                    <span class="recordingHeading">Marathi</span>
                    <div class="column q-gutter-y-sm">
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                        <div class="col-sm-3  column q-pa-xs flex-center">
                            <div v-motion-slide-visible-bottom>
                                <span class="audioHeading">Hindi Audio</span>
                                <audio controls>
                                    <source src="../assets/audios/file_example_MP3_700KB.mp3">
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import Audio from './Audio.vue';

export default {
    name: 'ListenWatch',
    setup() {
        const sources = ref([
            {
                src: "../assets/audios/file_example_MP3_700KB.mp3",
                title: "Abhishek",
                coverImage: "../assets/voiceOverLogo.jpg"
            }
        ]);
        return {
            sources
        };
    },
    components: { Audio }
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
    font-size: 20px;
}

.audioHeading {
    display: block;
    font-size: 17px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
