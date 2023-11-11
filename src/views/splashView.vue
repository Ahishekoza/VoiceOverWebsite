<template>
    <div class="relative">
        <q-circular-progress 
            show-value 
            indeterminate=""
            font-size="10px" 
            class="q-ma-md 
            absolute-center" 
            size="100px" 
            :thickness="0.25"
            color="black" 
            track-color="white">
            <q-avatar size="80px">
                <img src="../assets/voiceOverLogo.jpg">
            </q-avatar>
        </q-circular-progress>
    </div>
</template>
<script>
export default {
    name: 'splashView',
    mounted() {
        setTimeout(()=>{
            this.$router.push('/home')
        },5000)
    }
}
</script>