<template>
  <div class="opinions">
    <Header title="Opinions so far"/>
    <div class="container body">
        <div class="row">
            <ResultCard v-bind:reason="reason" />
            <ResultCard v-bind:reason="reason" />
            <ResultCard v-bind:reason="reason" />
            <ResultCard v-bind:reason="reason" />
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ResultCard from '@/components/ResultCard.vue'
import Footer from '@/components/ResultCard.vue'

export default {
  name: 'opinions',
  components: {
    Header,
    ResultCard,
    Footer
  },
  data(){
      return{
          reason: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      }
    }
}
</script>
