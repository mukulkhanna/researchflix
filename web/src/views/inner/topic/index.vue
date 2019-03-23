<template>
  <v-app>
    <v-content class="white">
      <v-container>
        <v-layout row wrap justify-center text-xs-left>
          <v-flex md12>
            <v-layout column>
              <v-flex mb-3 class="title">
                Topic:<span class="font-weight-bold headline"> {{topic.name}}</span>
              </v-flex>
              <v-flex>
                <v-layout row wrap align-center>
                  <v-flex md3 v-for="(paper,i) in papers" :key="i" px-3 py-4>
                    <v-layout column class="paper-browse">
                      <v-flex class="font-weight-bold" px-3 pt-3 pb-1 style="font-size:1.1em">
                        {{paper.title}}
                      </v-flex>
                      <v-flex px-3 pb-1>
                        <span v-for="(author,j) in paper.authors" :key="j">
                          {{author}}<span v-if="j<paper.authors.length-1">, </span>
                        </span>
                      </v-flex>
                      <v-flex px-3 pb-1>
                        {{paper.publisher}}, {{paper.dop}}
                      </v-flex>
                      <v-flex px-3 pb-1>
                        {{paper.pages}} Pages
                      </v-flex>
                      <v-flex px-3 pb-3>
                        Keywords:
                        <span v-for="(tag,j) in paper.tags" :key="j">
                          {{tag}}<span v-if="j<paper.tags.length-1">, </span>
                        </span>
                      </v-flex>
                      <v-flex>
                        <v-layout row wrap justify-center text-xs-center py-1 class="grey lighten-3">
                          <v-flex md3>
                            <v-tooltip bottom>
                              <v-btn slot="activator" icon :to="{path:'/paper/'+paper.pid}" flat style="background:#00303F;" dark>
                                <v-icon small>open_in_new</v-icon>
                              </v-btn>
                              <span>Open</span>
                            </v-tooltip>
                          </v-flex>
                          <v-flex md3>
                            <v-tooltip bottom>
                              <v-btn slot="activator" icon flat style="background:#00303F;" dark>
                                <v-icon small>note_add</v-icon>
                              </v-btn>
                              <span>Add to Collection</span>
                            </v-tooltip>
                          </v-flex>
                          <v-flex md3>
                            <v-tooltip bottom>
                              <v-btn slot="activator" icon flat style="background:#00303F;" dark>
                                <v-icon small>bookmarks</v-icon>
                              </v-btn>
                              <span>Bookmark</span>
                            </v-tooltip>
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
        { pid: 1, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] },
        { pid: 2, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] },
        { pid: 3, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] },
        { pid: 4, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] },
        { pid: 5, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] },
        { pid: 6, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] },
        { pid: 7, title: 'Reconciling Embodied and Distributional Accounts of Meaning in Language', authors: ['Mark Andrews', 'Stefan Frank', 'Gabriella Vigliocco'], publisher: 'IEEE', pages: 15, dop: '2014', tags: ['Psychology', 'Cognitive psychology', 'Epistemology', 'Computer Science'] }
      ]
    }
  },
  created () {
    let that = this
    this.$axios.get(this.$store.getters.getBaseUrl + '/api/topic', {
      params: {
        token: localStorage.getItem('token'),
        id: this.$route.query.tid
      }
    })
      .then((res) => {
        if (res.data.success) {
          that.topic = res.data.topic
          that.papers = res.data.papers
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
  .paper-browse{
    border-radius:5px;
    border:1px solid rgba(0,0,0,0.2);
    transition:0.2s
  }
  .paper-browse:hover{
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
</style>
