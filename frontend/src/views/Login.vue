<template>
<v-container>
  <div>
    LOGIN
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="black" class="mr-4" @click="handleClick(email)">
        Entrar
      </v-btn>
    </v-form>
  </div>
    </v-container>
</template>

<script>
import router from "../router/index";
import axios from "axios";

export default {
     data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      handleClick (email) {
          router.push({ name: 'notasFiscais' })
          
            axios.post(`http://localhost:3001/user/login`, {
              email
            })
          .then((response) => {
            localStorage.setItem('userId', response.data.id);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });

        }
    }
};
</script>

<style scoped>
</style>