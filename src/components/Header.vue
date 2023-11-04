<template>
    <!-- Navbar -->
    <q-header class="shadow-7 q-pa-md bg-black" elevated>
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
            <q-tabs v-model="tab" class="NotShowInSmallerDevices" @click="handleSectionScreen">
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

    <q-drawer v-model="openDrawer" overlay bordered class="bg-black text-white" @hide="onDrawerClose">
        <!-- Closing Icon -->
        <span @click="handleClosingOfDrawer">
            <font-awesome-icon class="fa-2x absolute-right q-pa-md" icon="fa-solid fa-xmark" />
        </span>
       
        <q-list class="listContainer">
            <q-item clickable v-ripple active-class="menuLinkColor" :active="listValue==='home'" @click="handleSectionMobile(listValue='home')">
                <q-item-section avatar>
                    <font-awesome-icon  class="fa-2x" icon="fa-solid fa-house" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">HOME</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple active-class="menuLinkColor" :active="listValue==='why'"  @click="handleSectionMobile(listValue='why')">
                <q-item-section avatar>
                    <font-awesome-icon class="fa-2x" :icon="['fas', 'question']" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">WHY PVS</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple active-class="menuLinkColor" :active="listValue==='listenWatch'" @click="handleSectionMobile(listValue='listenWatch')">
                <q-item-section avatar>
                    <font-awesome-icon class="fa-2x" icon="fa-solid fa-headphones" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">LISTEN AND WATCH</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple active-class="menuLinkColor" :active="listValue==='happyClients'" @click="handleSectionMobile(listValue='happyClients')">
                <q-item-section avatar>
                    <font-awesome-icon class="fa-2x" icon="fa-regular fa-pen-to-square" />
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">HAPPY CLIENTS</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple active-class="menuLinkColor" :active="listValue==='contact'" @click="handleSectionMobile(listValue='contact')">
                <q-item-section avatar>
                    <q-icon name="call" ></q-icon>
                </q-item-section>
                <q-item-section>
                    <q-item-label class="label">CONTACT</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue';
export default {
    components: {
        FontAwesomeIcon
    },
    setup(props, { emit }) {
        const tab = ref('home')
        const openDrawer = ref('false')
        const listValue = ref('home')
        return {
            tab,
            openDrawer,
            listValue
        }
    },
    methods: {
        handleSectionScreen() {
            this.$emit('sectionIdScreen', this.tab)

        },
        handleSectionMobile(sectionId) {
            this.openDrawer = false
            this.$emit('sectionIdMobile', sectionId)
        },
        handleOpeningOfDrawer() {
            this.openDrawer = true
        },
        handleClosingOfDrawer() {
            this.openDrawer = false
        },

        onDrawerClose() {
            this.handleSectionMobile(this.listValue)
        }

    },

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
    color: #F35D52;
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

.menuLinkColor{
    color: #F7B800;
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