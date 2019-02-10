<template>
  <div class="home">
    <Header title="Who will you vote for?" />
    <WelcomeModal />
    <div class="container body">
        <div class="row">
            <Candidate v-for="candidate in candidates" :key="candidate.id" v-bind:candidate="candidate" />
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import WelcomeModal from '@/components/WelcomeModal.vue'
import Candidate from '@/components/Candidate.vue'
import Footer from '@/components/Footer.vue'
import { candidates } from '@/utils/data.js'

export default {
  name: 'home',
  components: {
    Header,
    WelcomeModal,
    Candidate,
    Footer
  },
  mounted (){
    this.getCandidates()
  },
  data(){
    return{
      candidates: []
    }
  },
  methods: {
    getCandidates: function(){
      candidates().then((results) => {
        // console.log(results)
        this.candidates = results
      })
    }
  }
}
</script>