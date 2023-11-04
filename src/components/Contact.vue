<template>
  <div class="contactContainer">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12  contactInfoCenter   q-pa-md">
        <div class="column flex-start">
          <h5 class=" voiceOverHeading">Ready To Start Your Voice Over Project with Me</h5>
          <p class="voiceOverContent"><span style="font-family: 'Lobster', sans-serif;">Email</span> :
            <q-icon name="mail"/>
            abhishekOza11@gmail.com</p>
          <p class="voiceOverContent"><span style="font-family: 'Lobster', sans-serif;">Phone</span> :<q-icon name="call" class="q-px-xs"/> (+91) 7841838287</p>
        </div>
        <q-btn class="bg-black connectButton text-white q-my-md" label="Let's Connect"></q-btn>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12  q-pa-sm ">
        <div class="bg-white shadow-2 full-height q-pa-md rounded-borders">
          <span class="q-pa-md"
            style="text-align: left; display: block; font-size: 40px; font-family: 'Lobster', sans-serif; ">Get In
            Touch</span>

          <q-form class="q-pa-md" @submit.prevent="handleSubmit">
            <q-input v-model="formData.name" label="Name *" outlined color="black" class="q-mb-xs"
              :rules="[val => val && val.length > 0 || 'Name is Required']">
            </q-input>
            <q-input v-model="formData.email" label="Email *" outlined color="black" class="q-mb-xs"
              :rules="[isEmailValid]">
            </q-input>
            <q-input v-model="formData.message" outlined color="black" label="Message" type="textarea">
            </q-input>
            <q-btn class="q-mt-md" type="submit" label="Submit" color="red">
            </q-btn>
          </q-form>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data() {
    return {
      openDrawer: false,
      formData: {
        name: "",
        email: "",
        message: "",
      },
      genderOptions: ["Male", "Female", "Other"],
    };
  },
  methods: {
    isEmailValid(value) {
      if (!value) {
        return 'Email is Required'
      }
      else if (!/^\S+@\S+\.\S+$/.test(value)) {
        return 'Invalid Email Format'
      }
      return true
    },
    handleSubmit(e) {
      if (this.formData.name === 'abhishek' && this.formData.email === 'abhishekoza11@gmail.com') {
        this.$router.push('/data')
      }
    },
  }
}
</script>
<style scoped>
.contactContainer {
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: #950000;
}




.voiceOverHeading {
  font-size: 35px;
  color: white;
  width: 80%;
  letter-spacing: 2px;
  line-height: 45px;
  text-align: left;
  font-family: 'Lobster', sans-serif;
}

.voiceOverContent {
  font-size: 25px;
  color: white;


}
.contactInfoCenter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

.connectButton{
  transition: all 0.2s ease-in-out ;
}
.connectButton:hover{
  transform: translateY(-5px);
}

@media (max-width: 576px) {
  .voiceOverHeading {
    width: 100% !important;
    line-height: 50px !important;
    font-size: 25px !important;
  }

  .voiceOverContent {
    font-size: 20px !important;
    color: white;


  }
}

@media (max-width: 820px) {
  .voiceOverHeading {
    font-size: 22px;
    color: white;
    width: 80%;
    line-height: 40px;

  }
  .contactInfoCenter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .voiceOverContent {
    font-size: 20px !important;
    color: white;

  }
}

/* Define your custom CSS styles here */
</style>