<template>
    <div >
        <q-card class="audioIconsContainer">
            <q-item>
                <q-item-section>
                    <span class="headerText">{{ title }}</span>
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
   
</template>
  
<script>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    name: 'Audio',
    props: {
        title: {
            type: String,
            default: 'HINDI'
        },
        audioPath:{
            type: String,
        }
    },
    components: {
        FontAwesomeIcon
    },
    setup(props) {
        const isPlaying = ref(false);
        let audio = null;

        const handleStartPause = () => {
            if (audio === null) {
                audio = new Audio(props.audioPath);
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
    background-color: black;
    color: white;
   
}

.audioIcon {
    height: 55px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
}

.headerText{
    letter-spacing: 1px;
    text-transform: uppercase;
}

@media (max-width: 576px) {
    .audioIconsContainer{
        width: 100%;
    }
}
</style>
  