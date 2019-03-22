<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout row justify-center py-4>
          <v-flex md5 xs12>
            <v-layout :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'py-5': $vuetify.breakpoint.smAndDown}" column style="border:1px solid rgba(0,0,0,0.2);border-radius:5px;" class="elevation-3">
              <v-flex class="headline">
                <router-link :to="{ path: '/'}"  style="color:#dcae1d;text-decoration:none">
                  Researchflix
                </router-link>
              </v-flex>
              <v-flex mt-4 px-3>
                <v-layout column>
                  <v-flex>
                    <v-form v-model="valid">
                      <div class="text-wrapper">
                        <v-text-field solo flat v-model="user.email" :rules="emailRules" placeholder="Email Address"></v-text-field>
                      </div>
                      <div class="text-wrapper">
                        <v-text-field solo flat v-model="user.password" :rules="passwordRules" type="password" placeholder="password"></v-text-field>
                      </div>
                      <v-layout row wrap align-center>
                        <v-flex md6 xs12 class="checkbox-wrapper">
                          <v-checkbox hide-details v-model="remember" label="Remember Me"></v-checkbox>
                        </v-flex>
                        <v-flex md6 xs12 :class="{'text-xs-right': $vuetify.breakpoint.mdAndUp, 'text-xs-left mt-2': $vuetify.breakpoint.smAndDown}"  class="forgot-password">
                          Forgot Password?
                        </v-flex>
                      </v-layout>
                      <v-btn class="mt-4" :loading="loading" :disabled="!valid" flat style="background:#00303F;border-radius:10px" dark block>sign in</v-btn>
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
      loading: false,
      remember: false,
      valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters long.'
      ]
    }
  },
  methods: {
    login () {
      var that = this
      if (this.valid) {
        this.loading = true
        var email = this.user.email.trim()
        var password = this.user.password
        this.$axios.post(this.$store.getters.getBaseUrl + '/auth/login', {
          email, password
        })
          .then((res) => {
            if (res.data.success) {
              var token = res.data.token
              localStorage.setItem('token', token)
              this.$store.dispatch('createSnackbar', {
                content: 'Welcome Back!'
              })
              this.$router.push('/')
            } else {
              var payload = {
                content: res.data.reason
              }
              this.$store.dispatch('createSnackbar', payload)
              this.loading = false
            }
          })
          .catch(() => {
            that.$store.dispatch('networkError')
          })
      }
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
