<template>
  <v-app>
    <v-content>
      <v-toolbar flat>
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>ResearchFlix</v-toolbar-title>
        <v-layout row>
          <v-flex>
            <v-text-field clearable flat placeholder="Search" solo prepend-inner-icon="search"></v-text-field>
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only btn-wrapper">
          <v-btn flat class="teal darken-3" dark>SIGN IN</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        home
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>

<style scoped>
  .btn-wrapper >>> .v-btn{
    height:60%!important;
    border-radius:10px;
  }
</style>
