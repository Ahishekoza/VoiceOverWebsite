<template>
  <q-page>
    <Home />
    <AboutMe />
    <Listen />
    <Watch/>
    <div class="voiceOverLanguages">
      <span class="voiceOverLanguage">voiceOverLanguage</span>
      <p class="underline"></p>
      <div>
        <div class="row flex flex-center q-my-lg">
          <div class="col-md-3 col-xs-3  flex flex-center"><span style="font-size: 30px; font-weight: 500; color:#FF4143">Hindi</span></div>
          <q-separator  color="black" vertical/>
          <div class="col-md-3 col-xs-4 flex flex-center"><span style="font-size: 30px; font-weight: 500; color:#FF4143">English</span></div>
          <q-separator  color="black" vertical/>
          <div class="col-md-3 col-xs-4 flex flex-center"><span style="font-size: 30px; font-weight: 500; color: #FF4143;">Marathi</span></div>
        </div>
      </div>
    </div>
    <Testimonal/>
    <Contact/>
  </q-page>
</template>

<script>
import Audio from '@/components/Audio.vue';
import Home from '../components/Home.vue'
import AboutMe from '@/components/AboutMe.vue';
import Listen from '@/components/Listen.vue';
import Watch from '@/components/Watch.vue';
import Testimonal from '@/components/Testimonal.vue';
import Contact from '@/components/Contact.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { Audio, Home, AboutMe, Listen, Watch, Testimonal, Contact }
}
</script>
<style scoped>

.voiceOverLanguage {
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 2px;
  text-align: center;
  display: block;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.underline {
  width: 20%;
  height: 1px;
  background-color: black;
  margin: 10px auto;
}

@media (max-width: 576px) {
  .showNoOnMObile{
    display: none;
  }
  
}


</style>
