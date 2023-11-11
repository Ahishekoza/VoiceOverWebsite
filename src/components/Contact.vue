<template>
  <div class="contactContainer">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12  contactInfoCenter   q-pa-md">
        <div class="column flex-start">
          <h5 class=" voiceOverHeading">Ready To Start Your Voice Over Project with Me</h5>
          <p class="voiceOverContent"><span style="font-family: 'Lobster', sans-serif;">Email</span> :
            <q-icon name="mail" />
            abhishekOza11@gmail.com
          </p>
          <p class="voiceOverContent"><span style="font-family: 'Lobster', sans-serif;">Phone</span> :<q-icon name="call"
              class="q-px-xs" /> (+91) 7841838287</p>
        </div>
        <q-btn @click="handleConnectClick" class="bg-black connectButton text-white q-my-md"
          label="Let's Connect"></q-btn>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12  q-pa-sm ">

        <div class="bg-white shadow-2 full-height q-pa-md rounded-borders relative">
          <span class="q-pa-md"
            style="text-align: left; display: block; font-size: 40px; font-family: 'Lobster', sans-serif; ">Get In
            Touch</span>


          <q-form class="q-pa-md relative" @submit.prevent="handleSubmit">
            <q-spinner-ios v-show="showSpinner" color="black" class="absolute-center iconSize"  />
            <q-input v-model="formData.name" label="Name *" outlined color="black" class="q-mb-xs">
              <!-- :rules="[val => val && val.length > 0 || 'Name is Required']"   -->
            </q-input>
            <q-input v-model="formData.email" label="Email *" outlined color="black" class="q-mb-xs">
              <!-- :rules="[isEmailValid]" -->
            </q-input>
            <q-input v-model="formData.message" outlined color="black" label="Message" type="textarea">
            </q-input>
            <q-btn class="q-mt-md" type="submit" label="Submit" color="red">
            </q-btn>
          </q-form>


        </div>
      </div>
    </div>
    <q-dialog v-model="dialog" position="top">
      <q-card style="width: 450px">
        <q-linear-progress :value="0.6" color="pink" />
        <q-card-section class="row items-center justify-center">
          <span class="responseSuccessMessage">{{ responseMessage }}</span>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'contact',
  data() {
    return {
      openDrawer: false,
      dialog: false,
      showSpinner : false,
      responseMessage: '',
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
    async handleSubmit(e) {
      this.showSpinner=true
      await axios.post('http://localhost:3000/sendEmail', { email: this.formData.email, name: this.formData.name, message: this.formData.message }).then((response) => {
        this.showSpinner=false;
        this.responseMessage = response.data.message
        console.log(response);
        this.dialog = true
        setTimeout(() => {
          this.dialog = false
        }, 800)
      }).catch((error) => {
        this.responseMessage = error.message
      })
    },
    handleConnectClick() {
      this.$emit('sectionIdScreen', 'contact')
    }
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

.contactInfoCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.connectButton {
  transition: all 0.2s ease-in-out;
}

.connectButton:hover {
  transform: translateY(-5px);
}

.responseSuccessMessage {
  font-size: 1.4rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.iconSize{
  font-size: 4em;
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

  .contactInfoCenter {
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