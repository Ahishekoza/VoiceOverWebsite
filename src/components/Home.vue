<template>
  <section class="homeContainer">
    <div class="homeWrapperContainer">
      <div class="row ">
        <div class="col-md-4  col-lg-3 col-sm-6 col-xs-12 flex flex-center">
          <q-img src="../assets/voiceOverLogo.jpg" class="homeImage  "  />
        </div>
        <div class="col-md-8 col-lg-8 col-sm-6 col-xs-12 column flex-center q-mt-md">
          <span class="homeHeaderName ">Pranjal Vyas</span>
          <span class="underline"></span>
          <div class="homeContentContainer ">
            <p class="homeContent  ">Indian Female Voice Artist (Marathi/Hindi/English/)</p>
            <p class="homeContent">Pranjal Vyas is a skilled and versatile voice-over artist with a rich, resonant
              voice. With a passion for bringing scripts to life, Pranjal's narration captivates listeners with its
              expressive and emotive delivery.</p>
          </div>
          <div class="row  q-gutter-y-md" style="width: 90%; margin: 0 auto;">
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 " v-for="audio in mainNarrationTracks"><Audio
                :title="audio.title" :audioPath="audio.track" /></div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>
  
<script>
import Audio from '@/components/Audio.vue';
import HindiTrack from '@/assets/audios/hindi_narration.mp3'
import EnglishTrack from '@/assets/audios/english_narration.mp3'
import ChildTrack from '@/assets/audios/child_voice.mp3'
import { ref } from 'vue';

// @ is an alias to /src

export default {
  name: 'Home',

  components: { Audio },
  setup() {

    const mainNarrationTracks = ref([
      {
        track: HindiTrack,
        title: 'HINDI NARRATION'
      },
      {
        track: EnglishTrack,
        title: 'ENGLISH NARRATION'
      },
      {
        track: ChildTrack,
        title: "CHILD'S VOICE"
      }
    ])
    return {
      mainNarrationTracks
    }
  }
}
</script>
<style scoped>
.homeContainer {
  height: 100%;
  width: 100%;
  padding: 10px;
  min-height: 400px;
}

.homeWrapperContainer {
  width: 90%;
  margin: 0 auto;
  padding: 10px;

}

.homeImage {
  width: 100%;
  height: 100%;
  object-fit: cover;

  
}

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
  margin: 10px auto;
}

.homeContentContainer {
  width: 80%;
  text-align: left;
}

.homeContent {
  font-size: 1.3rem;
  margin: 10px 0;
  font-family: 'Work Sans', sans-serif;
}

@media (max-width: 576px) {
  .homeWrapperContainer {
    width: 90%;

  }

  .homeImage {
    width: 100%;
    height: 300px !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .underline {
    width: 50%;
    height: 1px;
    background-color: black;
    margin: 10px auto;
  }

  .homeContent {
    font-size: 1.0rem;
    margin: 10px 0;
  }
}

@media (max-width: 820px) {
  .homeWrapperContainer {
    width: 100%;

  }

  .homeContent {
    font-size: 1.0rem;
    margin: 10px 0;
  }
}
</style>
  