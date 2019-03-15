<template>
  <v-app>
    <v-content class="white">
      <v-container pt-0 :class="{'fluid pa-0': $vuetify.breakpoint.smAndDown}">
        <v-layout row wrap>
          <v-flex md9>
            <v-layout column text-xs-left>
              <v-flex style="position:relative">
                <div class="cover-photo"></div>
                <v-layout row wrap class="profile-photo" :class="{'justify-center': $vuetify.breakpoint.smAndDown}">
                  <v-flex md3 xs6 style="border-radius:50%;background:white;overflow:hidden;border:1px solid rgba(0,0,0,0.2)">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/241/069/large_2x/cool-boy-with-glasses-vector.jpg" style="max-width:100%;display:block" alt="Profile Photo">
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="cover-shadow" pt-3 pb-2 :class="{'pt-5 text-xs-center': $vuetify.breakpoint.smAndDown}">
                  <v-flex md2 xs4 offset-md5>
                    <div class="title">
                      {{user.papersViewed}}
                    </div>
                    <div>
                      Papers Viewed
                    </div>
                  </v-flex>
                  <v-flex md2 xs4>
                    <div class="title">
                      {{user.collectionsAdded}}
                    </div>
                    <div>
                      Collections Added
                    </div>
                  </v-flex>
                  <v-flex md2 xs4>
                    <div class="title">
                      {{user.papersBookmarked}}
                    </div>
                    <div>
                      Papers Bookmarked
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex mt-4 pt-2>
                <v-layout row wrap justify-end :class="{'pl-3': $vuetify.breakpoint.smAndDown}">
                  <v-flex md8 xs12>
                    <v-layout column>
                      <v-flex pl-3 class="headline">
                        {{user.name}}
                      </v-flex>
                      <v-flex pl-3 class="body-1">
                        {{user.email}}
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex mt-4>
                <v-layout row wrap justify-end>
                  <v-flex md10 xs12>
                    <div class="user-options mb-4">
                      <v-layout column py-4>
                        <v-flex>
                          <v-layout row wrap align-center>
                            <v-flex md2 xs1 :class="{'pr-5': $vuetify.breakpoint.mdAndUp}">
                              <v-divider></v-divider>
                            </v-flex>
                            <v-flex md4 xs9 :class="{'px-2': $vuetify.breakpoint.smAndDown}">
                              <v-btn flat style="background:#00303F;border-radius:10px" block dark>change password</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex mt-3>
                          <v-layout row wrap align-center>
                            <v-flex md2 xs1 :class="{'pr-5': $vuetify.breakpoint.mdAndUp}">
                              <v-divider></v-divider>
                            </v-flex>
                            <v-flex md4 xs9 :class="{'px-2': $vuetify.breakpoint.smAndDown}">
                              <v-btn :to="{path:'/collections/1'}" flat style="background:#00303F;border-radius:10px" block dark>view collections</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex mt-3>
                          <v-layout row wrap align-center>
                            <v-flex md2 xs1 :class="{'pr-5': $vuetify.breakpoint.mdAndUp}">
                              <v-divider></v-divider>
                            </v-flex>
                            <v-flex md4 xs9 :class="{'px-2': $vuetify.breakpoint.smAndDown}">
                              <v-btn :to="{path:'/bookmarks/1'}" flat style="background:#00303F;border-radius:10px" block dark>view bookmarks</v-btn>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
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
  name: 'profile',
  data () {
    return {
      user: {
        name: 'Aditya Choudhary',
        email: 'aditya@gmail.com',
        papersViewed: 121,
        collectionsAdded: 4,
        papersBookmarked: 75
      }
    }
  }
}
</script>

<style scoped>
  .cover-photo{
    background-image: linear-gradient(to bottom left,#FFE000, #b21f1f,#1a2a6c);;
    width:100%;
    height:324px;
  }
  .profile-photo{
    position: absolute;
    top:100%;
    transform:translateY(-50%);
    border-radius:50%;
    left:10%;
    z-index:2;
  }
  .cover-shadow{
    position: absolute;
    bottom:0px;
    width:100%;
    z-index:1;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
    color:white
  }
  .user-options{
    border-left:2px solid rgba(0,0,0,0.2);
    margin-left:40px;
  }
  @media screen and (max-width: 599px) {
    .profile-photo{
      top:50%;
      left:0;
    }
    .cover-photo{
      height: 350px;
    }
  }
</style>
