<template>
  <div class="opinions">
    <Header title="Opinions so far"/>
    <div class="container body">
        <div class="row">
          <ResultCard  v-for="opinion in opinions" :key="opinion.id" v-bind:reason="opinion" />     
        </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import ResultCard from '@/components/ResultCard.vue'
import Footer from '@/components/Footer.vue'
import { votes } from '@/utils/data.js'

export default {
  name: 'opinions',
  components: {
    Header,
    ResultCard,
    Footer,
  },
  methods: {
    getOpinions(){
      votes().then((results) => {
        this.all_opinions = results
        this.arrayLength = this.all_opinions.length
        this.opinions = this.all_opinions.slice(0, this.to)
        this.to += 6
      })
    },
    scroll(){
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          if(this.to < this.arrayLength){
            this.opinions = this.all_opinions.slice(0, this.to)
            this.to += 6
          }else{
            this.opinions = this.all_opinions
          }
        }
      };
    },
    loadMore(){
    }
  },
  beforeMount(){
    this.getOpinions()
  },
  mounted (){
    
    this.scroll()
  },
  data(){
    return{
      opinions: [],
      all_opinions: [],
      arrayLength: 0,
      reason: {},
      busy: false,
      to: 12,
    }
  }
}
</script>
