<template>
  <v-app>
    <div>
      <v-toolbar :dense="!pageScrolled" :flat="pageScrolled" app class="white">
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link :to="{ path: '/'}"  style="color:#dcae1d;text-decoration:none">
            Researchflix
          </router-link>
        </v-toolbar-title>
        <v-layout row px-5 class="hidden-xs-only">
          <v-flex class="text-wrapper">
            <v-text-field color="grey darken-2" flat clearable placeholder="Search" solo append-icon="search"></v-text-field>
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only btn-wrapper">
          <v-btn :to="{path:'/login'}" flat style="background:#00303F" dark>SIGN IN</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view/>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'inner',
  data () {
    return {
      pageScrolled: true
    }
  },
  methods: {
    handleScroll (event) {
      let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      if (scrollTop < 48) {
        this.pageScrolled = true
      } else {
        this.pageScrolled = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
  .btn-wrapper >>> .v-btn{
    height:60%!important;
    border-radius:10px;
  }
  .text-wrapper >>> .v-input__slot{
    margin-bottom:0!important;
    width:60%;
    border:1px solid rgba(0,0,0,0.2);
    border-radius:30px!important;
  }
  .text-wrapper >>> .v-text-field.v-text-field--solo .v-input__control{
    min-height:0px!important
  }
</style>
