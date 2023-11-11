<template>
    <div class="footerContainer">
        <div class="column flex-center q-py-xl">
            <q-img src="../assets/voiceOverLogo.jpg" class="imageHeightWidth" />
            <p class="paragraphContent">I have completed 2000+ successful Voice-Over projects in E-learning, Commercial ads,
                IVR, Explainer videos and more.</p>
            <div class="flex flex-center">
                <font-awesome-icon @click="handleInstaLink" class="q-mr-sm   buttonIcon" icon="fa-brands fa-instagram" />
                <font-awesome-icon @click="handleLinkdeInLink" class="q-mr-sm   buttonIcon" icon="fa-brands fa-linkedin" />
                <font-awesome-icon @click="handleYoutubeLink" class="q-mr-sm   buttonIcon" icon="fa-brands fa-youtube" />
                <font-awesome-icon @click="handleSoundCloudLink" class="q-mr-sm   buttonIcon" icon="fa-solid fa-cloud" />
            </div>
            <q-btn @click="handleConnectClick"
                class="q-my-lg text-white text-h6 bg-red q-pa-sm rounded-borders pointer">Contact Info</q-btn>
            <p class="text-white paragraphContent">
                <q-icon name="mail" color="red"></q-icon>
                abhishekoza11@gmail.com
            </p>
            <p class="text-white paragraphContent">
                <q-icon name="call" color="red"></q-icon>
                (+91) 7841838287
            </p>
        </div>
        <div style="background-color: #0F0F0F; color: white; padding: 10px; text-align: center;">
            <span>Copyright © 2023 | Pranjal Voice Artist</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    props: {
        handleInstaLink: Function,
        handleLinkdeInLink: Function,
        handleYoutubeLink: Function,
        handleSoundCloudLink: Function
    },
    methods: {
        handleConnectClick() {
            this.$emit('sectionIdScreen', 'contact')

        }
    }
}
</script>
<style scoped>
.footerContainer {
    background-color: black;
}

.imageHeightWidth {
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
}

.paragraphContent {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em;
    color: white;
}

.buttonIcon {
    background-color: white;
    padding: 5px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    font-size: 19px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin: 0 10px;
}

.buttonIcon:hover {
    background-color: #F35D52;
    color: white;
}

@media (max-width: 576px) {
    .paragraphContent {
        font-size: 1rem;
        font-weight: 500;
        width: 100% !important;
        line-height: 2rem;
        text-align: center;
        letter-spacing: 0.0125em;
        color: white;
    }
}

@media (max-width: 820px) {
    .paragraphContent {
        width: 80%;
        text-align: center;
    }
}
</style>