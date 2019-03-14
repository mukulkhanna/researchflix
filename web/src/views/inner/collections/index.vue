<template>
  <v-app>
    <v-content class="white">
      <v-container fluid>
        <v-layout row wrap justify-center text-xs-left>
          <v-flex md2 sm3 xs10>
            <v-layout column pa-4 text-xs-center>
              <v-flex>
                <img src="https://static.vecteezy.com/system/resources/previews/000/241/069/large_2x/cool-boy-with-glasses-vector.jpg" style="max-width:100%;display:block;border-radius:50%" alt="">
              </v-flex>
              <v-flex class="title" mt-3>
                {{user.name}}
              </v-flex>
              <v-flex>
                {{user.email}}
              </v-flex>
              <v-flex mt-3 class="hidden-sm-and-up">
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md8 sm9 :class="{'pl-0': $vuetify.breakpoint.smAndDown, 'pl-5': $vuetify.breakpoint.mdAndUp}">
            <v-layout column>
              <v-flex class="headline font-weight-bold" pt-4 pl-4 mb-4>
                Collections
              </v-flex>
              <v-flex>
                <v-layout row wrap fill-height>
                  <v-flex md3 sm4 v-for="(collection,i) in collections" :key="i" text-xs-center>
                    <div class="collection-stack">
                      <v-layout column class="collection-view">
                        <v-flex>
                          {{collection.paperCount}} Papers<br>
                          {{collection.name}}
                        </v-flex>
                      </v-layout>
                      <div class="collection-shadow-1"></div>
                      <div class="collection-shadow-2"></div>
                    </div>
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
  name: 'collections',
  data () {
    return {
      user: {
        id: 1,
        name: 'Aditya Choudhary',
        email: 'aditya@gmail.com'
      },
      collections: [
        { id: 1, name: 'Techno Savvy', paperCount: 10 },
        { id: 2, name: 'Sassy Wassy', paperCount: 9 },
        { id: 3, name: 'Yo Yo Yo Yo', paperCount: 2 },
        { id: 4, name: 'Moh Maya', paperCount: 5 },
        { id: 5, name: 'Techno Savvy', paperCount: 11 },
        { id: 6, name: 'Techno Savvy', paperCount: 4 },
        { id: 7, name: 'Techno Savvy', paperCount: 1 }
      ]
    }
  }
}
</script>

<style scoped>
  .collection-stack{
    margin:20px 30px;
    position: relative;
    cursor:pointer;
  }
  .collection-view{
    padding: 0 20px;
    border:2px solid #797D7F;
    background: white;
    z-index:3;
    position: relative;
    height:140px;
    border-radius:5px;
    transition: 0.2s;
  }
  .collection-shadow-1,
  .collection-shadow-2{
    /* background: black; */
    /* border:2px solid transparent; */
    position: absolute;
    border-radius:5px;
    width:100%;
    height:100%;
    transition: 0.2s ease-out;
    background: white;
  }
  .collection-shadow-1{
    top:0px;
    right:0px;
    z-index:2;
    background: #A6ACAF
  }
  .collection-shadow-2{
    top:0px;
    right:0px;
    z-index:1;
    background: #D7DBDD
  }
  .collection-stack:hover > .collection-view{
    transform:translate(-10px,10px)
  }
  .collection-stack:hover > .collection-shadow-1{
    /* top:-10px;
    right:-10px; */
  }
  .collection-stack:hover > .collection-shadow-2{
    transform:translate(10px,-10px)
  }
</style>
