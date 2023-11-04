<template>
    <div v-motion-slide-visible-bottom>
        <span class="audioHeading">{{ title }}</span>
        <audio controls>
            <source :src="audioPath">
        </audio>
    </div>
</template>
<script>
export default {
    name:'AudioNormal',
    props:{
        title:{
            type:String
        },
        audioPath:{
            type:String
        }
    }
}
</script>
<style scoped>
.audioHeading {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family:'kaushan', cursive;
}
</style>