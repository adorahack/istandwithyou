<template>
  <div class="results">
    <Header title="Total Results"/>
    <div class="container body">
        <div class="row">
            <div class="col-sm-12">
                <p>Total Votes: <strong>{{votes.length}}</strong></p>
                <br />
                <div v-for="candidate in candidates" :key="candidate.id">
                    <p>{{ candidate.name }} ({{ candidate.party }}) - {{candidate.votes.length}} votes</p>
                    <b-progress :max="votes.length" variant="success" show-progress>
                      <b-progress-bar :value="candidate.votes.length" :label="`~${ Math.round(candidate.votes.length / votes.length * 100)}%`">
                      </b-progress-bar>
                    </b-progress>
                    <br />
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { candidates, votes } from '@/utils/data.js'

export default {
  name: 'results',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.getAllVotes()
    this.getAllCandidates()
  },
  data(){
    return{
      votes: [],
      candidates: []
    }
  },
  methods: {
    getAllCandidates: function(){
      candidates().then((results) => {
        // console.log(results)
        this.candidates = results.sort((a,b) => b.votes.length - a.votes.length)
      })
    },
    getAllVotes: function(){
      votes().then((results) => {
        // console.log(results)
        this.votes = results
      })
    }
  }
}
</script>
