<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout column text-xs-left>
          <v-flex my-5>
            <v-layout column>
              <v-flex pl-4 class="title" style="color:#00303F">
                Browse
              </v-flex>
              <v-flex mt-4 text-xs-center>
                <v-layout row wrap align-center>
                  <v-flex md1>
                    <v-btn icon large v-if="!paperView">
                      <v-icon x-large>arrow_left</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex md10 style="display:flex;overflow-x:auto;position:relative" v-if="!paperView">
                    <div v-for="(paper,i) in papers" :key="i" class="paper-browse">
                      <div class="paper-arrow">
                        <v-btn icon @click="paperDetails(paper)">
                          <v-icon>chevron_right</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex md10 v-else>
                    <div class="paper-details text-xs-left" v-if="paperView">
                      <v-layout row wrap>
                        <v-flex md1>
                          <v-btn @click="paperView=false">close</v-btn>
                        </v-flex>
                        <v-flex md1>

                        </v-flex>
                        <v-flex md10 pa-3>
                          <v-layout column>
                            <v-flex>
                              <v-layout row wrap>
                                <v-flex>
                                  {{selectedPaper.title}}
                                </v-flex>
                                <v-flex>
                                  <v-btn>open</v-btn>
                                </v-flex>
                              </v-layout>
                            </v-flex>
                            <v-flex>
                              <span v-for="(author,j) in selectedPaper.authors" :key="j">{{author}}</span>
                            </v-flex>
                            <v-flex>
                              {{selectedPaper.abstract}}
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-flex>
                  <v-flex md1>
                    <v-btn icon large v-if="!paperView">
                      <v-icon x-large>arrow_right</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex my-5>
            <v-layout column>
              <v-flex pl-4 class="subheading" style="color:#00303F">
                Or choose a topic of interest
              </v-flex>
              <v-flex mt-4 px-3>
                <v-layout row wrap>
                  <v-flex md2 pr-5 v-for="(topic,i) in topics" :key="i">
                    <v-btn block dark style="background:#00303F;border-radius:10px" flat>
                      {{topic.name}}
                    </v-btn>
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
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' },
        { title: 'abs', authors: ['aditya', 'mukul'], abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum mauris. Curabitur viverra quis urna sit amet molestie. Aenean imperdiet, diam at vestibulum vulputate, erat lectus semper tortor, vel rutrum risus velit nec risus. Sed a lorem porttitor, ultrices risus vitae, sollicitudin dui.' }
      ],
      topics: [
        { name: 'Education', id: 1 },
        { name: 'Ethics', id: 2 },
        { name: 'Government', id: 3 },
        { name: 'Health', id: 4 },
        { name: 'History', id: 5 },
        { name: 'Religion', id: 6 },
        { name: 'Science', id: 7 },
        { name: 'Technology', id: 8 },
        { name: 'Arts', id: 9 },
        { name: 'Culture', id: 10 },
        { name: 'Politics', id: 11 }
      ],
      selectedPaper: {},
      paperView: false
    }
  },
  methods: {
    paperDetails (paper) {
      this.selectedPaper = paper
      this.paperView = true
    }
  }
}
</script>

<style scoped>
  .paper-browse {
    min-width:124px;
    height:175px;
    box-shadow:0 3px 10px rgba(0,0,0,0.2);
    margin:10px;
    cursor:pointer;
    position: relative;
    transition: min-width 0.2s;
  }
  .paper-arrow{
    position: absolute;
    right:0;
    top:50%;
    transform:translateY(-50%);
    display: none;
  }
  .paper-browse:hover{
    min-width:134px;
  }
  .paper-browse:hover > .paper-arrow{
    display: block;
  }
  .paper-details{
    background: white;
    box-shadow:0 3px 10px rgba(0,0,0,0.2);
    height:180px;
    margin:10px;
    margin-bottom:0px;
  }
</style>
