<template>
  <div id="app">
    <v-snackbar style="color:#2c3e50" v-model="$store.getters.getSnack.state" :multi-line="true" :right="true" :timeout="$store.getters.getSnack.time" :top="true" :color="$store.getters.getSnack.color" :auto-height="true">
      {{ $store.getters.getSnack.content }}
      <v-btn icon color="pink" flat @click="$store.dispatch('closeSnackbar')">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
