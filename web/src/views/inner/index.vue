<template>
  <v-app>
    <div>
      <v-navigation-drawer width="200" mobile-break-point="10240" app clipped v-model="drawer" class="hidden-sm-and-up">
        <v-list>
          <v-list-tile></v-list-tile>
          <v-list-tile :to="{ path: '/'}">
            Home
          </v-list-tile>
          <v-list-tile :to="{ path: '/collections/1'}">
            Collections
          </v-list-tile>
          <v-list-tile :to="{ path: '/bookmarks/1'}">
            Bookmarks
          </v-list-tile>
          <v-list-tile :to="{ path: '/profile/1'}">
            Profile
          </v-list-tile>
          <v-list-tile :to="{ path: '/login'}">
            Sign In
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar :flat="pageScrolled" app class="white" style="z-index:1000">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link :to="{ path: '/'}"  style="color:#dcae1d;text-decoration:none">
            Researchflix
          </router-link>
        </v-toolbar-title>
        <v-layout row pl-5 class="hidden-xs-only">
          <v-flex class="text-wrapper">
            <v-text-field color="grey darken-2" flat clearable placeholder="Search" solo append-icon="search"></v-text-field>
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <!-- <v-toolbar-items class="hidden-xs-only btn-wrapper">
          <v-btn :to="{path:'/login'}" flat style="background:#00303F" dark>SIGN IN</v-btn>
        </v-toolbar-items> -->
        <v-toolbar-items class="hidden-xs-only">
          <v-btn exact-active-class="active" class="font-weight-bold" :ripple="false" exact flat :to="{path:'/'}" style="text-transform:none;position:relative;color:rgba(0,0,0,0.6);">
            <span class="my-2 mx-3">Home</span>
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
            <span class="line-4"></span>
          </v-btn>
          <v-btn exact-active-class="active" class="font-weight-bold" :ripple="false" exact flat :to="{path:'/collections/1'}" style="text-transform:none;position:relative;color:rgba(0,0,0,0.6);">
            <span class="my-2 mx-3">Collections</span>
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
            <span class="line-4"></span>
          </v-btn>
          <v-btn exact-active-class="active" class="font-weight-bold" :ripple="false" exact flat :to="{path:'/bookmarks/1'}" style="text-transform:none;position:relative;color:rgba(0,0,0,0.6);">
            <span class="my-2 mx-3">Bookmarks</span>
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
            <span class="line-4"></span>
          </v-btn>
          <v-btn exact-active-class="active" class="font-weight-bold" :ripple="false" exact flat :to="{path:'/profile/1'}" style="text-transform:none;position:relative;color:rgba(0,0,0,0.6);">
            <span class="my-2 mx-3">Profile</span>
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
            <span class="line-4"></span>
          </v-btn>
          <v-btn exact-active-class="active" class="font-weight-bold" :ripple="false" exact flat :to="{path:'/login'}" style="text-transform:none;position:relative;color:rgba(0,0,0,0.6);">
            Sign In
          </v-btn>
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
      pageScrolled: true,
      drawer: null
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
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  /* .btn-wrapper >>> .v-btn{
    height:60%!important;
    border-radius:10px;
  } */
  .text-wrapper >>> .v-input__slot{
    margin-bottom:0!important;
    width:80%;
    border:1px solid rgba(0,0,0,0.2);
    border-radius:30px!important;
  }
  .text-wrapper >>> .v-text-field.v-text-field--solo .v-input__control{
    min-height:0px!important
  }
  .v-btn::before{
    background:transparent;
  }
  .v-btn:hover{
    color:#00303F!important
  }
  .v-btn:hover .line-2, .v-btn:hover .line-4{
    height:100%
  }
  .line-1,
  .line-2,
  .line-3,
  .line-4{
    position: absolute;
    background: #dcae1d;
    transition:0.5s
  }
  .line-1{
    top:0;
    left:0;
    height:2px;
    width:0;
  }
  .line-2{
    top:0;
    right:0;
    height:0;
    width:2px;
  }
  .line-3{
    bottom:0;
    right:0;
    width:0;
    height:2px;
  }
  .line-4{
    bottom:0;
    left:0;
    height:0;
    width:2px;
  }
  .active{
    color:#00303F!important
  }
  .active .line-1{
    width:100%
  }
  .active .line-2{
    height:100%
  }
  .active .line-3{
    width:100%
  }
  .active .line-4{
    height:100%
  }
</style>
