<template>
  <q-layout view="lHh Lpr lFf">
    <Header 
    :handleInstaLink="handleInstaLink" 
    :handleSoundCloudLink="handleSoundCloudLink"
    @sectionIdScreen="scrollToSection($event)" 
    @sectionIdMobile="scrollToSectionMobile($event)" />
    <q-page-container>
      <q-page>
        <Home id="home" />
        <AboutMe id="why" />
        <Listen id="listenWatch" />
        <Watch />
        <div class="voiceOverLanguages">
          <span class="voiceOverLanguage">voiceOverLanguage</span>
          <p class="underline"></p>
          <div>
            <div class="row flex flex-center q-my-lg">
              <div class="col-md-3 col-xs-3  flex flex-center"><span
                  style="font-size: 30px; font-weight: 500; color:#FF4143">Hindi</span></div>
              <q-separator color="black" vertical />
              <div class="col-md-3 col-xs-4 flex flex-center"><span
                  style="font-size: 30px; font-weight: 500; color:#FF4143">English</span></div>
              <q-separator color="black" vertical />
              <div class="col-md-3 col-xs-4 flex flex-center"><span
                  style="font-size: 30px; font-weight: 500; color: #FF4143;">Marathi</span></div>
            </div>
          </div>
        </div>
        <Testimonal id="happyClients" />
        <Contact id="contact"  @sectionIdScreen="scrollToSection($event)"  />
      </q-page>
    </q-page-container>
    <Footer 
    :handleInstaLink="handleInstaLink" 
    :handleLinkdeInLink="handleLinkdeInLink" 
    :handleYoutubeLink="handleYoutubeLink" 
    :handleSoundCloudLink="handleSoundCloudLink"  
    @sectionIdScreen="scrollToSection($event)"  />
  </q-layout>
</template>
  
<script>
import { ref } from 'vue'
import Header from '@/components/Header.vue';
import Audio from '@/components/Audio.vue';
import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue';
import Listen from '@/components/Listen.vue';
import Watch from '@/components/Watch.vue';
import Testimonal from '@/components/Testimonal.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { Audio, Home, AboutMe, Listen, Watch, Testimonal, Contact, Header, Footer },
  setup() {

    const sectionIdValue = ref('')

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 200; // Adjust this to the actual height of your header
        const scrollPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        })
      };

    }
    const scrollToSectionMobile = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 100; // Adjust this to the actual height of your header
        const scrollPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        })
      };

    }
    return {

      sectionIdValue,
      scrollToSection,
      scrollToSectionMobile
    }
  },
  methods:{
    handleInstaLink(){
      console.log('Instagram Link ')
    },
    handleYoutubeLink(){
      console.log('Youtube Link ')
    },
    handleLinkdeInLink(){
      console.log('Link de In Link ')
    },
    handleSoundCloudLink(){
      console.log('SoundCloud Link ')
    }
  }
}
</script>
<style scoped>
.voiceOverLanguage {
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 2px;
  text-align: center;
  display: block;
  font-family: 'Lora', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.underline {
  width: 20%;
  height: 1px;
  background-color: black;
  margin: 10px auto;
}

@media (max-width: 576px) {
  .showNoOnMObile {
    display: none;
  }

}
</style>
  