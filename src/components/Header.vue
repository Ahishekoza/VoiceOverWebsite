<template>
    <!-- Navbar -->
    <q-header class="shadow-7 q-pa-md bg-black" elevated >
        <q-toolbar class="socialMediaContainer">
            <span class="emailId">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                abhishekoza11@gmail.com
            </span>
            <q-space />
            <font-awesome-icon class="q-mr-sm fa-2x buttonIcon" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="fa-2x buttonIcon" icon="fa-brands fa-linkedin" />
        </q-toolbar>

        <q-toolbar inset class="insertToolbarWidth">
            <q-img src="../assets/voiceOverLogo.jpg" class="imageHeightWidth" />
            <q-space class="NotShowInSmallerDevices" />
            <q-tabs v-model="tab" class="NotShowInSmallerDevices" @click="handleSection">
                <q-tab name="home">
                    <a>Home</a>
                </q-tab>
                <q-tab name="why">
                    <a>Why PVS</a>
                </q-tab>
                <q-tab name="listenWatch">
                    <a>Listen and Watch</a>
                </q-tab>
                <q-tab name="happyClients">
                    <a>Happy Clients</a>
                </q-tab>
                <q-tab name="contact">
                    <a>Contact</a>
                </q-tab>
            </q-tabs>
            <q-space class="NotShowInBiggerDevices" />
            <span @click="handleOpeningOfDrawer">
                <font-awesome-icon class="fa-2x NotShowInBiggerDevices" style="cursor: pointer;" icon="fa-solid fa-bars" />
            </span>
        </q-toolbar>
    </q-header>

    <!-- Drawer -->

    <q-drawer v-model="openDrawer" overlay bordered class="bg-grey-2">
        <!-- Closing Icon -->
        <span @click="handleClosingOfDrawer">
            <font-awesome-icon class="fa-2x absolute-right q-pa-md" icon="fa-solid fa-xmark" />
        </span>
        <!-- @ToDo : style -->
        <q-list class="listContainer">
            <q-item clickable v-ripple @click="handleSectionScroll('home')">
                <q-item-section avatar>
                    <font-awesome-icon style="color: #007bff;" class="fa-2x" icon="fa-solid fa-house" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">HOME</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple  @click="handleSectionScroll('why')">
                <q-item-section avatar>
                    <font-awesome-icon class="fa-2x" :icon="['fas', 'question']" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">WHY PVS</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="handleSectionScroll('listenWatch')">
                <q-item-section avatar>
                    <font-awesome-icon class="fa-2x" icon="fa-solid fa-headphones" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">LISTEN AND WATCH</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="handleSectionScroll('happyClients')">
                <q-item-section avatar>
                    <font-awesome-icon class="fa-2x" icon="fa-regular fa-pen-to-square" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">HAPPY CLIENTS</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref ,defineProps, withDefaults} from 'vue';
export default {
    components: {
        FontAwesomeIcon
    },
    setup(props,{emit}) {
        const tab = ref('home')
        const openDrawer = ref('false')
        const handleSectionScroll =(sectionName)=>{
            emit('sectionIdMobile',sectionName)
        }
        return {
            tab,
            openDrawer,
            handleSectionScroll
        }
    },
    methods: {
        handleSection(){
           this.$emit('sectionId',this.tab)
        },
        handleOpeningOfDrawer() {
            this.openDrawer = true
        },
        handleClosingOfDrawer() {
            this.openDrawer = false
        },
       
    }
}
</script>
<style scoped>
/* gobal scoped */
a {
    text-decoration: none;
    color: white;
}

.emailId {
    font-family: 'roboto', sans-serif;
}

.buttonIcon {
    cursor: pointer;
    transition: all 1s ease-in-out;
}

.buttonIcon:hover {
    color: rgba(165, 18, 24);
}

.insertToolbarWidth {
    width: 80%;
    margin: 0 auto;
}

.q-toolbar--inset {
    padding-left: 0px;
}

.imageHeightWidth {
    height: 100px;
    width: 100px;
    border-radius: 10px;
}

.NotShowInBiggerDevices {
    display: none;
}


.listContainer {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


@media (max-width: 576px) {
    .socialMediaContainer {
        display: none;
    }

    .insertToolbarWidth {
        width: 100%;
        justify-content: center;
        display: flex;
    }


    .imageHeightWidth {
        height: 50px;
        width: 50px;
        margin-top: 10px;

    }

    .NotShowInSmallerDevices {
        display: none;
    }

    .NotShowInBiggerDevices {
        display: block;
    }

}

@media (max-width: 820px) {
    .NotShowInSmallerDevices {
        display: none;
    }

    .NotShowInBiggerDevices {
        display: block;
    }
}
</style>