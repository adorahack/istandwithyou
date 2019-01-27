<template>
  <div class="home">
    <Header title="Who will you vote for?" />
    <WelcomeModal />
    <div class="container body">
        <div class="row">
            <Candidate v-bind:candidate="candidate" />
            <Candidate v-bind:candidate="candidate" />
            <Candidate v-bind:candidate="candidate" />
            <Candidate v-bind:candidate="candidate" />
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

export default {
  name: 'home',
  components: {
    Header,
    WelcomeModal,
    Candidate,
    Footer
  },
  data(){
        return{
            candidate: {
                id: 1,
                name: "President Muhammadu Buhari",
                party: "APC",
                avatar: "https://via.placeholder.com/300"
            }
        }
    }
}
</script>