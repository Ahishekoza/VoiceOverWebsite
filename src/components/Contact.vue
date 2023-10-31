<template>
    <div class="contactContainer">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 bg-red full-height column flex-center q-py-md">
                <h5 class="text-center">Ready To Start Your Voice Over Project with Me</h5>
                <p style="font-size:large">Email : abhishekOza11@gmail.com</p>
                <p style="font-size:large">Phone : 7841838287</p>
                <q-btn label="Let's Connect"></q-btn>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <q-card>
              <q-card-section>
                <div class="q-gutter-md">
                  <div class="q-col-gutter-md">
                    <q-form @submit="submitForm">
                      <q-input
                        v-model="formData.name"
                        label="Name"
                        outlined
                      ></q-input>
                      <q-input
                        v-model="formData.email"
                        label="Email"
                        outlined
                      ></q-input>
                      <q-select
                        v-model="formData.gender"
                        label="Gender"
                        outlined
                        :options="genderOptions"
                      ></q-select><q-btn
                        label="Submit"
                        color="primary"
                        type="submit"
                      ></q-btn>
                    </q-form>
                  </div>
                </div>
              </q-card-section>
            </q-card>
                <!-- <form @submit="handleSubmit" >
                    <div class="column q-pa-md">
                        <label id="name">Name:</label>
                        <input for="name" type="text" class="form-control">
                    </div>
                    <div class="column q-pa-md">
                        <label id="name">Email:</label>
                        <input for="name" type="text" class="form-control">
                    </div>
                    <div class="column q-pa-md">
                        <label id="name">Message:</label>
                        <textarea for="name" type="text" class="textControl"/>
                    </div>
                    <div class="q-pa-md">
                        <q-btn>Submit</q-btn>
                    </div>
                </form> -->
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
}
.form-control {
    width: 100%;
    height: 40px;
    font-size: 20px;
}
.textControl{
    height: 100%;
    min-height: 100px;
}

/* Define your custom CSS styles here */


</style>