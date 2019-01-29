<template>
  <div class="vote">
    <Header title="Why would you vote for me?"/>
    <b-modal hide-footer ref="voteModalRef" id="voteModal" >
        <h5 class="thanks text-center">Thank you for standing with {{this.candidateRecord.name}}</h5>
        <div class="row">
          <div class="col-6">
            <img src="https://via.placeholder.com/300" class="img-downloadable" />
          </div>
          <div class="col-6">
            <p class="small">
              Feel free to download this image and post on your social media accounts using the hashtags 
              <br />
              <strong>#IStandWithYou</strong>
              <br />
              <strong>#Elections2019</strong>
            </p>
            <button class="btn form-control bg-green">Download Image</button>
          </div>
        </div>
    </b-modal>
    <div class="container body">
        <div class="row candidate">
            <div class="col-md-4 col-sm-4 col-12">
              <div class="image" :style="{ backgroundImage: `url(https://via.placeholder.com/300)` }"></div>
              <p class="text-center">{{this.candidateRecord.name}} ({{this.candidateRecord.party}}) </p>
            </div>
            <div class="col-md-1 col-sm-1 col-12"></div>
            <div class="col-md-7 col-sm-7 col-12">
              <form>
                <div class="form-group">
                  <label>My nickname is:</label>
                  <input type="text" class="form-control" v-model="name"/>
                </div>
                <div class="form-group">
                  <label>I would vote for {{this.candidateRecord.name}} because:</label>
                  <textarea class="form-control" v-model="reason"></textarea>
                </div>
                <div class="form-group">
                  <label>
                    <input type="checkbox" v-model="anonymous"/>&nbsp;&nbsp;Appear anonymous
                    </label>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <button class="btn bg-green" @click="handleButtonClick">Let's Go!</button>
                    <router-link to="/" class="btn bg-black">Startover</router-link>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { candidate, addVote } from '@/utils/data.js'

export default {
  name: 'vote',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      id: this.$route.params.id,
      name: "",
      reason: "",
      anonymous: false,
      candidateRecord: {}
    }
  },
  mounted (){
    this.getCandidate()
  },
  methods: {
    getCandidate: function(){
      candidate(this.id).then((results) => {
        ! results.id && this.$router.push('/error')
        this.candidateRecord = results
      })
    },
    vote () {
      let candidateVote =
      {
        candidate_id: this.$route.params.id,
        name: this.name,
        reason: this.reason,
        anonymous: this.anonymous,
      }
      addVote(candidateVote).then((results) => {
        console.log("Resss",results)
        // image generation logic

        // show modal
      })
    },
    handleButtonClick (e) {
      e.preventDefault()
      // image generation logic

      // save to db
      this.vote()

      // show modal
      this.$refs.voteModalRef.show()
    },
    hideModal () {
      this.$refs.voteModalRef.hide()
    }
  }
}
</script>

<style scoped>
p.small{
  font-size: 13px;
}
.img-downloadable{
  width: 100%;
  margin-bottom: 20px;
}
#voteModal{
    padding: 30px;
}
#voteModal .row{
  margin-bottom: 40px;
}
#voteModal .btn{
font-size: 13px;
}
.modal-header .close{
  opacity: 1;
  font-weight: 100;
  font-size: 60px;
  line-height: 0;
  padding: 10px 20px;
  margin-top: 0px;
  outline: none;
}
.modal-header{
  border-bottom: none;
}
h5.thanks{
  font-family: 'Pacifico', cursive;
  margin-bottom: 30px;
}
.bg-green{
  background: #008751;
  padding: 4px 20px;
  border-radius: 0px;
  border: 1px solid black;
  color: white;
}
.candidate .bg-black{
  background: #000000;
  padding: 4px 20px;
  border-radius: 0px;
  border: 1px solid black;
  color: white;
  margin-left: 20px;
}
.candidate .image{
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
strong{
  font-weight: 600 !important;
}
.candidate p{
  height: 73px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 30px;
  font-weight: 600;
  color: black;
}
textarea{
  height: 150px;
}
input, textarea{
  outline: none !important;
  box-shadow: none !important;
}
</style>

