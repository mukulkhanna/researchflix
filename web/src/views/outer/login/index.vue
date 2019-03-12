<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout row justify-center py-4>
          <v-flex md5>
            <v-layout pa-5 column style="border:1px solid rgba(0,0,0,0.2);border-radius:5px;" class="elevation-3">
              <v-flex style="color:#dcae1d" class="headline">
                Researchflix
              </v-flex>
              <v-flex mt-4 px-3>
                <v-layout column>
                  <v-flex>
                    <v-form>
                      <div class="text-wrapper">
                        <v-text-field solo flat v-model="user.email" placeholder="Email Address"></v-text-field>
                      </div>
                      <div class="text-wrapper">
                        <v-text-field solo flat v-model="user.password" type="password" placeholder="password"></v-text-field>
                      </div>
                      <v-layout row wrap align-center>
                        <v-flex md6 class="checkbox-wrapper">
                          <v-checkbox hide-details v-model="remember" label="Remember Me"></v-checkbox>
                        </v-flex>
                        <v-flex md6 text-xs-right class="forgot-password">
                          Forgot Password?
                        </v-flex>
                      </v-layout>
                      <v-btn class="mt-4" flat style="background:#00303F;border-radius:10px" dark block>sign in</v-btn>
                    </v-form>
                  </v-flex>
                  <v-flex mt-2 class="font-weight-bold subheading">
                    OR
                  </v-flex>
                  <v-flex mt-2>
                    <v-btn :to="{path: '/signup'}" flat style="background:#00303F;border-radius:10px" dark block>create an account</v-btn>
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
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      remember: false
    }
  }
}
</script>

<style scoped>
  .checkbox-wrapper >>> .v-input--selection-controls{
    margin-top:0px!important
  }
  .checkbox-wrapper >>> label{
    color: #dcae1d
  }
  .forgot-password{
    padding-top:4px;
    cursor:pointer;
    color:#dcae1d;
    font-size:16px;
  }
  .forgot-password:hover{
    text-decoration: underline
  }
  .text-wrapper >>> .v-input__slot{
    border:1px solid rgba(0,0,0,0.2);
    border-radius:5px!important;
  }
</style>
