<template>
  <v-app>
    <v-content class="white">
      <v-toolbar flat class="white">
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title style="color:#dcae1d">ResearchFlix</v-toolbar-title>
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
      <v-container>
        <v-layout column text-xs-left>
          <v-flex>
            <v-layout column>
              <v-flex>
                Browse
              </v-flex>
              <v-flex text-xs-center>
                <v-layout row wrap>
                  <v-flex md1 class="red">
                    left
                  </v-flex>
                  <v-flex md10 class="purple" style="display:flex;overflow-x:hidden;">
                    <div v-for="(paper,i) in papers" :key="i" style="min-width:124px;height:175px;background:black; margin:10px">

                    </div>
                  </v-flex>
                  <v-flex md1 class="red">
                    right
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      papers: [
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
        {title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.'},
      ]
    }
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
