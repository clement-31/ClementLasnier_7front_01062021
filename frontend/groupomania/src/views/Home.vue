<template>
  <div class="home">
    <LoginForm v-if="!connected"/>

    <Nav v-if="connected"/>
    <NewPost v-if="connected"/>
    <Post v-if="connected"/>
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue';
import  Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    LoginForm,
    Nav
  },
  data(){
    return{
      connected:  true
    };
  },
  created() {
    this.connectionOk()
  },
  methods : {
    connectionOk() {
      if(localStorage.user !== undefined) {
        this.connected = true;
        console.log(('Vous êtes connecté!!'));
      }
      else if(localStorage.user == undefined) {
        this.connected =  false;
        console.log('Vous n\'êtes pas connecté !!');
      }
    }
  }
}
</script>

