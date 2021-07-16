<template>
  <div class="row">
    <h1 class="logo">
      <img src="../assets/images/icon-above-font.png" alt="Logo Groupomania">
    </h1>
    <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-5 pt-3 pb-3 bg-white from-wrapper">

      <div class="container">

        <h3>S'inscrire</h3>
        <hr>
        <form  @submit.prevent="signup" >
          <div class="row">
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="signup-pseudo">Pseudo</label>
                <input type="text" class="form-control" name="pseudo" id="signup-pseudo" v-model="pseudo" />
              </div>
            </div>


            <div class="col-12">
              <div class="form-group">
                <label for="signup-email">Email </label>
                <input type="text" class="form-control" name="email" id="signup-email" v-model="email"/>
              </div>
            </div>
            <div class="col-12 col-sm-6 ">
              <div class="form-group">
                <label for="signup-password">Mot de passe</label>
                <input type="password" class="form-control" name="password" id="signup-password" v-model="password"/>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group">
                <label for="signup-passwordConfirm">Confirmez le mot de passe</label>
                <input type="password" class="form-control" name="passwordConfirm" id="signup-passwordConfirm"
                       v-model="passwordConfirm"/>
              </div>
            </div>
            <div class="error-message">{{message}}</div>
            <div class="row">
              <div class="col-12 col-sm-4">
                <button type="submit" class="btn btn-primary">S'inscrire</button>
              </div>
              <div class="col-12 col-sm-8 text-right">
                <a href="/login">Vous avez déjà un compte</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignupForm',
  data() {
    return {
      message : "",
    };
  },
  methods: {
    signup() {

      const pseudo = document.getElementById("signup-pseudo").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      const passwordConfirm = document.getElementById("signup-passwordConfirm").value;

      if(password === passwordConfirm) {
        axios.post(`${this.$apiUrl}/auth/signup`,
            {
              pseudo,
              email,
              password,
              passwordConfirm
            },
            {
              headers : {
                'Content-Type' : 'application/json'
              }
            }
        )
            .then(res => {
              if(res.status === 201){
                location.href = '/login'
                this.message = "Bienvenue sur votre réseau."
              }
            })
            .catch((error) => {
              if (error.status === 401) {
                this.message= "Email non disponible"
              }
            });
      }
      else if(password != passwordConfirm) {
        this.message = " Vérifier votre email et/ou votre mot de passe"
      }
    }
  }
}
</script>

<style scoped>
.error-message{
  background-color: rgba(233, 77, 103, 0.301);

  height:40px;
  width:90%;
  margin: auto auto 1rem auto;
  color: black;
}
</style>