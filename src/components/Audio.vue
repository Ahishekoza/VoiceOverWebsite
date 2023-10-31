<template>
    <div >
        <q-card class="audioIconsContainer">
            <q-item>
                <q-item-section>
                    <span>{{ title }}</span>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section  @click="handleStartPause">
                    <i class="audioIcon">
                        <font-awesome-icon :icon="isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'" class="fa-2x"
                            style="color:rgb(184, 4, 4);" />
                    </i>
                </q-item-section>
            </q-item>
        </q-card>
    </div>
    <!-- <div class="audioIconsContainer" @click="handleStartPause">
        <span style="margin-right: 10px; font-size: 18px;">HINDI</span>
        <i class="audioIcon">
            <font-awesome-icon :icon="isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'" class="fa-2x"
                style="color:white;" />
        </i>
    </div> -->
</template>
  
<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import myTrack from '../assets/audios/file_example_MP3_700KB.mp3'; // Adjust the path as needed

export default {
    name: 'Audio',
    props: {
        title: {
            type: String,
            default: 'HINDI'
        }
    },
    components: {
        FontAwesomeIcon
    },
    setup() {
        const isPlaying = ref(false);
        let audio = null; // Initialize audio variable

        const handleStartPause = () => {
            if (audio === null) {
                audio = new Audio(myTrack);
            }
            if (isPlaying.value) {
                audio.pause();
            } else {
                audio.play();
            }

            isPlaying.value = !isPlaying.value;
        };

        return {
            isPlaying,
            handleStartPause
        };
    }
};
</script>
  
<style scoped>
.audioIconsContainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
}

.audioIcon {
    height: 55px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(249, 77, 77);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

@media (max-width: 576px) {
    .audioIconsContainer{
        width: 100%;
    }
}
</style>
  