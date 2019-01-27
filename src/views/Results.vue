<template>
  <div class="results">
    <Header title="Total Results"/>
    <div class="container body">
        <div class="row">
            <div class="col-sm-12">
                <p>Total Votes: <strong>200</strong></p>
                <br />
                <p>Muhammadu Buhari (APC)</p>
                <b-progress :value="votes" :max="200" show-progress variant="success"></b-progress>
                <br />
                <p>Atiku Abubakar (PDP)</p>
                <b-progress :value="votes" :max="200" show-progress variant="success"></b-progress>
                <br />
                <p>Donald Duke (SDP)</p>
                <b-progress :value="votes" :max="200" show-progress variant="success"></b-progress>
                <br />
                <p>Omoyele Sowore (AAC)</p>
                <b-progress :value="votes" :max="200" show-progress variant="success"></b-progress>
                <br />
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'results',
  components: {
    Header,
    Footer
  },
  data(){
      return{
          votes: 4
      }
    }
}
</script>
