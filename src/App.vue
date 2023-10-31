<template>
  <q-layout view="lHh Lpr lFf">
      <Header />
    <q-page-container>
      <HomeView/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';

export default {
  name: 'LayoutDefault',
  setup() {
    return {
      leftDrawerOpen: ref(false)
    };
  },
  components: { Header, HomeView }
}
</script>
