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
              <v-flex class="headline font-weight-bold btn-wrapper" pt-4 pl-4 mb-4>
                <v-btn class="ma-0 pa-0" :ripple="false" flat style="text-transform:none" @click="viewCollection=false" v-if="viewCollection">
                  <v-icon style="border-radius:50%;padding:2px;" left>arrow_back</v-icon>
                  Back to Collections
                </v-btn>
                <span v-if="!viewCollection">Collections</span>
              </v-flex>
              <transition name="slide">
                <v-flex v-if="!viewCollection">
                  <v-layout row wrap justify-center fill-height>
                    <v-flex md3 sm4 xs6 v-for="(collection,i) in collections" :key="i" text-xs-center @click="viewCollection=true, collectionId=collection.id">
                      <div class="collection-stack">
                        <v-layout column class="collection-view">
                          <v-flex>
                          </v-flex>
                        </v-layout>
                        <div class="collection-shadow-1"></div>
                        <div class="collection-shadow-2"></div>
                        <div class="collection-shadow-3"></div>
                        <div class="collection-shadow-4"></div>
                      </div>
                      <v-layout row wrap>
                        <v-flex>
                          <v-layout column>
                            <v-flex>
                              {{collection.name}}
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </transition>
              <transition name="slide">
                <v-flex v-if="viewCollection">
                  <viewCollection :collectionId="collectionId"></viewCollection>
                </v-flex>
              </transition>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import viewCollection from './viewCollection/'
export default {
  name: 'collections',
  components: {
    viewCollection
  },
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
        { id: 7, name: 'Techno Savvy', paperCount: 1 },
        { id: 7, name: 'Techno Savvy', paperCount: 1 },
        { id: 7, name: 'Techno Savvy', paperCount: 1 },
        { id: 7, name: 'Techno Savvy', paperCount: 1 },
        { id: 7, name: 'Techno Savvy', paperCount: 1 }
      ],
      collectionId: null,
      viewCollection: false
    }
  },
  created () {
    let that = this
    this.$axios.get(this.$store.getters.getBaseUrl + '/api/collections', {
      params: {
        token: localStorage.getItem('token')
      }
    })
      .then((res) => {
        if (res.data.success) {
          that.user = res.data.user
          that.collections = res.data.collections
        } else {
          var payload = {
            content: res.data.reason
          }
          this.$store.dispatch('createSnackbar', payload)
        }
      })
      .catch(() => {
        that.$store.dispatch('networkError')
      })
  }
}
</script>

<style scoped>
  .collection-stack{
    margin:20px auto;
    width:100px;
    position: relative;
    cursor:pointer;
  }
  .collection-view{
    margin-top:100px;
    padding: 0 20px;
    background: #176A83;
    z-index:2;
    position: relative;
    height:60px;
    border-radius:5px;
    transition: 0.2s;
    bottom:0;
    border-top-left-radius:0;
  }
  .collection-view::before{
    content:'';
    position: absolute;
    background: #176A83;
    width:40%;
    top:-14px;
    left:0px;
    height:15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .collection-shadow-1,
  .collection-shadow-2,
  .collection-shadow-3{
    position: absolute;
    width:50%;
    height:100%;
    transition: 0.2s ease-out;
    top:0px;
    right:30%;
    z-index:1;
    border:1px solid #808B96;
    background-color: white;
    background-image:linear-gradient(lightgray 5px, transparent 0),
    linear-gradient(lightgray 5px, transparent 0),
    linear-gradient(lightgray 5px, transparent 0);
    background-repeat: no-repeat;
    background-size: 30% 100%, 80% 100%, 60% 100%;
    background-position: 5px 8px, 5px 17px, 5px 26px;
  }
  .collection-shadow-1{
    z-index:2;
  }
  .collection-shadow-2{
    right:5px;
    transform-origin: bottom right;
  }
  .collection-shadow-3{
    left:5px;
    transform-origin: bottom left;
  }
  .collection-shadow-4{
    position: absolute;
    border-radius:5px;
    width:100%;
    height:100%;
    transition: 0.3s ease-out;
    bottom:0px;
    left:0px;
    z-index:3;
    background: #00303F;
    transform-origin: bottom;
  }
  .collection-shadow-4::before{
    content:'';
    position: absolute;
    border-radius:5px;
    width:100%;
    height:100%;
    transition: 0.2s ease-out;
    bottom:0px;
    left:0px;
    background: #00303F;
    transform-origin: bottom;
  }
  /* .collection-stack:hover > .collection-view{
  } */
  .collection-stack:hover > .collection-shadow-1{
    top:-120%
  }
  .collection-stack:hover > .collection-shadow-2{
    top:-125%;
    right:-10px;
    transform:rotate(10deg)
  }
  .collection-stack:hover > .collection-shadow-3{
    top:-125%;
    left:-15px;
    transform:rotate(-10deg)
  }
  .collection-stack:hover > .collection-shadow-4{
    transform:skewX(7deg);
    height:90%;
  }
  .collection-stack:hover > .collection-shadow-4::before{
    transform:skewX(-14deg);
  }
  .btn-wrapper >>> .v-btn::before{
    background: transparent
  }
  .btn-wrapper >>> .v-btn{
    font-size:0.7em;
    color:rgba(0,0,0,0.4)
  }
  .v-btn:hover .v-icon{
    background: rgba(0,48,63,0.1)
  }
  .btn-wrapper >>> .v-btn:hover{
    color:#00303F
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
    transform-origin: center left;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: scale(0.7);
    position: absolute;
  }
  .slide-leave,
  .slide-enter-to{
    position: absolute;
    opacity: 0;
    transform: scale(0.7);
  }
  @media screen and (max-width: 599px) {
    .collection-stack{
      width: 75px;
    }
    .collection-view{
      margin-top:60px;
      height:40px
    }
    .collection-view::before{
      top:-11px;
      height:12px;
    }
  }
</style>
