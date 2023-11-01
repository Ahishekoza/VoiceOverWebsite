<template>
  <section class="contactContainer">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12   column flex-center q-py-md">
        <h5 class=" voiceOverHeading">Ready To Start Your Voice Over Project with Me</h5>
        <p  class="voiceOverContent" >Email : abhishekOza11@gmail.com</p>
        <p  class="voiceOverContent" >Phone : 7841838287</p>
        <q-btn class="bg-white" label="Let's Connect"></q-btn>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12  q-pa-sm ">
        <div class="bg-white shadow-2 full-height q-pa-md rounded-borders">
          <span class="q-pa-md" style="text-align: left; display: block; font-size: 30px; ">Get In Touch</span>
          <form @submit="handleSubmit">
            <div class="column q-pa-md ">
              <label id="name">Name:</label>
              <input for="name" type="text" class="form-control">
            </div>
            <div class="column q-pa-md">
              <label id="name">Email:</label>
              <input for="name" type="text" class="form-control">
            </div>
            <div class="column q-pa-md">
              <label id="name">Message:</label>
              <textarea for="name" type="text" class="textControl" />
            </div>
            
            <div class="q-pa-md">
              <Button class="bg-red no-border q-pa-sm rounded-borders text-white">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
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
        gender: null,
      },
      genderOptions: ["Male", "Female", "Other"],
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log("Form submitted:", this.formData);
    },
  }
}
</script>
<style scoped>
.contactContainer {
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: red;
}

.form-control {
  width: 100%;
  height: 40px;
  font-size: 20px;
}

.textControl {
  height: 100%;
  min-height: 100px;
}


.voiceOverHeading{
  font-size: 28px; color: white; width: 80%;line-height: 45px;
  text-align: left;
}
.voiceOverContent{
  font-size: 20px;
  color: white;
}
@media (max-width: 576px) {
  .voiceOverHeading{
    width: 90%;
    text-align: center;
  }
}

@media (max-width: 820px) {
  .voiceOverHeading{
  font-size: 22px; color: white; width: 80%;line-height: 40px;

}
}
/* Define your custom CSS styles here */
</style>