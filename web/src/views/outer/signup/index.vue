<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout row justify-center py-4>
          <v-flex md5>
            <v-layout :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'py-5': $vuetify.breakpoint.smAndDown}" column style="border:1px solid rgba(0,0,0,0.2);border-radius:5px;" class="elevation-3">
              <v-flex class="headline">
                <router-link :to="{ path: '/'}"  style="color:#dcae1d;text-decoration:none">
                  Researchflix
                </router-link>
              </v-flex>
              <v-flex mt-4 px-3>
                <v-layout column>
                  <v-flex>
                    <v-form v-model="formValid">
                      <div class="text-wrapper">
                        <v-text-field solo flat v-model="user.name" placeholder="Name" :rules="[rules.required]"></v-text-field>
                      </div>
                      <div class="text-wrapper">
                        <v-text-field solo flat v-model="user.email" placeholder="Email Address" :rules="[rules.required, rules.emailValid]"></v-text-field>
                      </div>
                      <div class="text-wrapper">
                        <v-text-field :append-icon="show2 ? 'visibility_off' : 'visibility'" :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2" solo flat v-model="user.password" :rules="[rules.required, rules.min]" placeholder="Password" @input="pass=(pass===true?(user.password === retypePassword ? true : false):(retypePassword.length>0 ? (user.password === retypePassword ? true : false) : false))"></v-text-field>
                      </div>
                      <div class="text-wrapper">
                        <v-text-field :append-icon="show3 ? 'visibility_off' : 'visibility'" :type="show3 ? 'text' : 'password'" @click:append="show3 = !show3" solo flat v-model="retypePassword" :rules="[rules.required, rules.passMatch]" placeholder="Retype Password" @input="pass=(user.password === retypePassword ? true : false)"></v-text-field>
                      </div>
                      <v-btn :loading="loading" @click="submit" class="mt-4" :disabled="!formValid" flat style="background:#00303F;border-radius:10px" dark block>sign up</v-btn>
                    </v-form>
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
  name: 'signup',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      retypePassword: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailValid: v => /.+@.+/.test(v) || 'E-mail must be valid',
        passMatch: () => this.pass || ('Passwords don\'t match')
      },
      formValid: true,
      pass: true,
      show2: false,
      show3: false,
      loading: false
    }
  },
  methods: {
    submit () {
      var that = this
      if (this.valid) {
        this.loading = true
        var name = this.user.name
        var email = this.user.email.trim()
        var password = this.user.password
        this.$axios.post(this.$store.getters.getBaseUrl + '/auth/signup', {
          name, email, password
        })
          .then((res) => {
            if (res.data.success) {
              var token = res.data.token
              localStorage.setItem('token', token)
              this.$store.dispatch('createSnackbar', {
                content: 'Welcome to Researchflix!'
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
  .text-wrapper >>> .v-input__slot{
    border:1px solid rgba(0,0,0,0.2);
    border-radius:5px!important;
  }
</style>
