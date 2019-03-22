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
          <v-flex md10>
            <v-layout column>
              <v-flex class="headline font-weight-bold" pt-4 pl-3>
                Bookmarks
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
                              <span>Remove Bookmark</span>
                            </v-tooltip>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <div class="bookmark-hover"></div>
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
  name: 'bookmarks',
  data () {
    return {
      user: {
        id: 1,
        name: 'Aditya Choudhary',
        email: 'aditya@gmail.com'
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
    this.$axios.get(this.$store.getters.getBaseUrl + '/api/bookmarks', {
      params: {
        token: localStorage.getItem(token)
      }
    })
      .then((res) => {
        if (res.data.success) {
          that.user = res.data.user
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
    transition:0.2s;
    position: relative;
  }
  .paper-browse:hover{
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  .bookmark-hover{
    position: absolute;
    top:-1px;
    right:10px;
    width:14px;
    height:0;
    background: #00303F;
    transition:0.3s;
  }
  .bookmark-hover::before,
  .bookmark-hover::after{
    content:'';
    position: absolute;
    top:calc(100% - 2px);
  }
  .paper-browse:hover > .bookmark-hover::after{
    border-top:10px solid #00303F;
    border-left:10px solid transparent;
    right:0;
    box-shadow:2px -2px 5px rgba(0,0,0,0.2)
  }
  .paper-browse:hover > .bookmark-hover{
    height:26px;
    box-shadow:2px 2px 5px rgba(0,0,0,0.2)
  }
  .paper-browse:hover > .bookmark-hover::before{
    border-top:10px solid #00303F;
    border-right:10px solid transparent;
    left:0;
  }
</style>
