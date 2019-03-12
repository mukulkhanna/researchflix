<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout row wrap justify-center my-5>
          <v-flex md10>
            <v-layout column text-xs-left>
              <v-flex>
                <v-layout row wrap>
                  <v-flex md8>
                    <v-layout column>
                      <v-flex class="headline font-weight-bold">
                        {{paper.title}}
                      </v-flex>
                      <v-flex mt-4>
                        <v-layout row wrap>
                          <v-flex md9>
                            <span class="font-weight-bold">Author(s):</span><br>
                            <span v-for="(author,j) in paper.authors" :key="j">
                              {{author}}<span v-if="j<paper.authors.length-1">, </span>
                            </span>
                          </v-flex>
                          <v-flex md3 pl-4>
                            <v-layout text-xs-center py-2 column style="background:rgba(220,174,29,0.2);color:#dcae1d;border-radius:5px">
                              <v-flex style="font-size:1.3em">
                                {{paper.views}}
                              </v-flex>
                              <v-flex>
                                Views
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex mt-4 pa-4 style="border:1px solid rgba(0,0,0,0.2);border-radius:5px;background:#E0E0E0">
                        {{paper.abstract}}
                      </v-flex>
                      <v-flex mt-4>
                        <v-btn flat style="background:#00303F;border-radius:10px" dark block>Open the whole paper</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex md4>
                    <v-layout justify-end row wrap>
                      <v-flex md9>
                        <v-layout py-3 px-4 column style="border:1px solid rgba(0,0,0,0.2);border-radius:5px;">
                          <v-flex>
                            <span class="font-weight-bold">Published In: </span>
                            <span>{{paper.publishedIn}}</span>
                          </v-flex>
                          <v-flex mt-2>
                            <span class="font-weight-bold">Publisher: </span>
                            <span>{{paper.publisher}}</span>
                          </v-flex>
                          <v-flex mt-2>
                            <span class="font-weight-bold">Pages: </span>
                            <span>{{paper.pages}}</span>
                          </v-flex>
                          <v-flex mt-2>
                            <span class="font-weight-bold">Date of Publication:</span><br>
                            <span>{{paper.dop}}</span>
                          </v-flex>
                          <v-flex mt-2>
                            <span class="font-weight-bold">INSPEC Accession Number: </span>
                            <span>{{paper.inspec}}</span>
                          </v-flex>
                          <v-flex mt-2>
                            <span class="font-weight-bold">DOI:</span><br>
                            <span>{{paper.doi}}</span>
                          </v-flex>
                        </v-layout>
                        <v-layout column>
                          <v-flex mt-3>
                            <v-btn flat style="background:#00303F;border-radius:10px" dark block>
                              <v-icon class="pr-1" small>note_add</v-icon>
                              add to collection
                            </v-btn>
                          </v-flex>
                          <v-flex mt-2>
                            <v-btn flat style="background:#00303F;border-radius:10px" dark block>
                              <v-icon small class="pr-2">bookmarks</v-icon>
                              bookmark
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex my-5>
                <v-divider></v-divider>
              </v-flex>
              <v-flex>
                <v-layout column>
                  <v-flex pl-4 class="title" style="color:#00303F">
                    Related
                  </v-flex>
                  <v-flex mt-4 text-xs-center>
                    <v-layout row wrap align-center justify-center>
                      <v-flex md1>
                        <v-btn icon large @click="leftScroll">
                          <v-icon x-large>arrow_left</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex md10 id="paperScroller" style="display:flex;overflow-x:auto;position:relative;">
                        <div v-for="(paper,i) in relatedPapers" :key="i" class="paper-browse">
                          <img src="https://i1.rgstatic.net/publication/2255973_Access_and_Retrieval_from_Image_Databases_Using_Image_Thumbnails/links/5498b60f0cf2eeefc30f9c6e/largepreview.png" alt="" style="height:100%">
                          <router-link :to="{path:'/paper/'+paper.pid}" tag="div" class="paper-details">
                            <p>{{paper.title}}</p>
                          </router-link>
                        </div>
                      </v-flex>
                      <v-flex md1>
                        <v-btn icon large @click="rightScroll">
                          <v-icon x-large>arrow_right</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
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
  name: 'researchPaper',
  data () {
    return {
      paper: {
        pid: 1,
        title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language',
        authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'],
        views: 5848,
        abstract: 'In this letter, a compact battery charger based on wireless power transfer (WPT) technology without any communication requirement is proposed. Here, a new intermediate coil is developed to achieve load-independent constant current (CC) and constant voltage (CV) outputs. The intermediate coil is split into two coils and is overlapped with the receiver coil to form a compact structure. Two switches on the receiver side are used to reconfigure the intermediate resonant circuit in order to select different charging modes, i.e., CC mode or CV mode. The communication between the transmitter side and the receiver side as well as complex control strategies is not needed in the proposed structure. Besides, the proposed system can achieve zero phase angle operation, fixed operating frequency, and zero-voltage switching, which not only can lower the power rating of power devices but also improve the efficiency.',
        publishedIn: 'IEEE Internet of Things Journal ( Volume: 1 , Issue: 1 , Feb. 2014 )',
        publisher: 'IEEE',
        pages: 15,
        dop: '14 February 2014',
        inspec: 14282877,
        doi: '10.1109/JIOT.2014.2306328'
      },
      relatedPapers: [
        { pid: 1, title: 'Reconfigurable Intermediate Resonant Circuit Based WPT System' },
        { pid: 2, title: 'Reconfigurable Intermediate Resonant Circuit Based WPT System' },
        { pid: 3, title: 'Reconfigurable Intermediate Resonant Circuit Based WPT System' },
        { pid: 4, title: 'Reconfigurable Intermediate Resonant Circuit Based WPT System' },
        { pid: 5, title: 'Reconfigurable Intermediate Resonant Circuit Based WPT System' },
        { pid: 6, title: 'Reconfigurable Intermediate Resonant Circuit Based WPT System' }
      ]
    }
  },
  methods: {
    leftScroll () {
      var container = this.$el.querySelector("#paperScroller")
      container.scrollLeft = container.scrollLeft - 200
    },
    rightScroll () {
      var container = this.$el.querySelector("#paperScroller")
      container.scrollLeft = container.scrollLeft + 200
    }
  }
}
</script>

<style scoped>
  .paper-browse {
    min-width:124px;
    height:175px;
    box-shadow:0 3px 10px rgba(0,0,0,0.2);
    margin:10px 18px;
    cursor:pointer;
    position: relative;
    transition: 0.2s;
    border:1px inset rgba(0,0,0,0.2);
    overflow:hidden;
  }
  .paper-details{
    position:absolute;
    top:-100%;
    left:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.65);
    transition:0.2s;
    color:rgba(255,255,255,0.9);
    padding:0 10px;
    word-wrap: break-word;
  }
  .paper-details p{
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
  .paper-browse:hover > .paper-details{
    top:0;
  }
</style>
