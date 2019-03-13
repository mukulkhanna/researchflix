<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout row wrap justify-center text-xs-left>
          <v-flex md10>
            <v-layout column>
              <v-flex mb-3 class="title">
                Topic:<span class="font-weight-bold headline"> {{topic.name}}</span>
              </v-flex>
              <v-flex my-3 v-for="(paper,i) in papers" :key="i">
                <v-layout row wrap justify-center>
                  <v-flex md2 style="position:relative;border:1px inset rgba(0,0,0,0.2);">
                    <img src="https://i1.rgstatic.net/publication/2255973_Access_and_Retrieval_from_Image_Databases_Using_Image_Thumbnails/links/5498b60f0cf2eeefc30f9c6e/largepreview.png" alt="" style="width:100%">
                  </v-flex>
                  <v-flex md9 pa-3 class="grey lighten-2">
                    <v-layout row wrap>
                      <v-flex md8>
                        <v-layout column>
                          <v-flex class="font-weight-bold">
                            {{paper.title}}
                          </v-flex>
                          <v-flex mt-2 pt-1>
                            <span class="font-weight-bold">Author(s):</span>
                            <span v-for="(author,j) in paper.authors" :key="j">
                              {{author}}<span v-if="j<paper.authors.length-1">, </span>
                            </span>
                          </v-flex>
                          <v-flex mt-2 pt-1>
                            <span class="font-weight-bold">Tag(s):</span>
                            <span v-for="(tag,j) in paper.tags" :key="j">
                              {{tag}}<span v-if="j<paper.tags.length-1">, </span>
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex md4 ma-0>
                        <v-layout column pl-4>
                          <v-flex>
                            <v-btn block :to="{path:'/paper/'+paper.pid}" flat style="background:#00303F;border-radius:10px;font-size:0.9em" dark>open</v-btn>
                          </v-flex>
                          <v-flex>
                            <v-btn block :to="{path:'/paper/'+paper.pid}" flat style="background:#00303F;border-radius:10px;font-size:0.9em" dark>add to collection</v-btn>
                          </v-flex>
                          <v-flex>
                            <v-btn block :to="{path:'/paper/'+paper.pid}" flat style="background:#00303F;border-radius:10px;font-size:0.9em" dark>bookmark</v-btn>
                          </v-flex>
                        </v-layout>
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
  name: 'topic',
  data () {
    return {
      topic: {
        id: 1,
        name: 'Education'
      },
      papers: [
        { pid: 1, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science', 'Artificial intelligence', 'Mathematics', 'Linguistics', 'Sociology', 'Social psychology', 'Anthropology', 'Cognitive science'] },
        { pid: 2, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science', 'Artificial intelligence', 'Mathematics', 'Linguistics', 'Sociology', 'Social psychology', 'Anthropology', 'Cognitive science'] },
        { pid: 3, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science', 'Artificial intelligence', 'Mathematics', 'Linguistics', 'Sociology', 'Social psychology', 'Anthropology', 'Cognitive science'] },
        { pid: 4, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science', 'Artificial intelligence', 'Mathematics', 'Linguistics', 'Sociology', 'Social psychology', 'Anthropology', 'Cognitive science'] },
        { pid: 5, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science', 'Artificial intelligence', 'Mathematics', 'Linguistics', 'Sociology', 'Social psychology', 'Anthropology', 'Cognitive science'] },
        { pid: 6, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science', 'Artificial intelligence', 'Mathematics', 'Linguistics', 'Sociology', 'Social psychology', 'Anthropology', 'Cognitive science'] }
      ]
    }
  }
}
</script>
