<template>
  <div class="vote">
    <Header title="Why would you vote for me?"/>
    <b-modal hide-footer ref="errorModalRef" id="errorModal" >
        <div class="row">
          <div class="col-12">
            <p class="text-center">{{this.errorModalMsg}}</p>
            <br />
            <button class="btn-continue btn" @click="hideErrorModal">
                Okay
            </button>
          </div>
        </div>
    </b-modal>
    <b-modal hide-footer ref="voteModalRef" id="voteModal" >
        <h5 class="thanks text-center">Thank you for standing with {{this.candidateRecord.name}}</h5>
        <div class="row">
          <div class="col-6">
            <img :src="require(`@/assets/social_${id}.png`)" class="img-downloadable" />
          </div>
          <div class="col-6">
            <p class="small">
              Feel free to download this image and post on your social media accounts using the hashtags 
              <br />
              <strong>#IStandWithYou</strong>
              <br />
              <strong>#Elections2019</strong>
            </p>
            <p class="social-icons">
              <Facebook url="https://istandwithyou.com.ng" scale="2" />
              <Twitter url="" :title="socialMediaMsg" scale="2" />
              <WhatsApp :url="socialMediaMsg" scale="2" />
            </p>
            <a :href="require(`@/assets/social_${id}.png`)" download class="btn form-control bg-green">Download Image</a>
          </div>
        </div>
    </b-modal>
    <div class="container body">
        <div class="row candidate">
            <div class="col-md-4 col-sm-4 col-12 d-none d-sm-block">
              <div class="image" :style="{ backgroundImage: `url(` + require(`@/assets/${id}.jpg`) + `)`, 
                 backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}"></div>
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
                  <label>In 140 characters, why would you vote for {{this.candidateRecord.name}}:

                  </label>
                  <textarea class="form-control" v-model="reason" maxlength="140"></textarea>
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
import { Facebook, WhatsApp, Twitter } from 'vue-socialmedia-share'

export default {
  name: 'vote',
  components: {
    Header,
    Footer,
    Facebook,
    WhatsApp,
    Twitter,
  },
  data(){
    return{
      id: this.$route.params.id,
      name: "",
      reason: "",
      anonymous: false,
      candidateRecord: {},
      errorModalMsg: '',
      socialMediaMsg: '',
      fbSocialMediaMsg: '',
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
        this.socialMediaMsg = `2019 elections are next week. I stand with ${results.name}. Who do you stand with? Visit https://istandwithyou.com.ng #Elections2019 #IStandWithYou`
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
        // console.log("Resss",results)
        // show modal
        this.$refs.voteModalRef.show()
      })
    },
    checkInput () {
      if(this.name.trim() === ""){
        this.errorModalMsg = 'Please, tell us your nickname to continue'
        this.$refs.errorModalRef.show()
        return "error"
      }
      if(this.reason.trim() === ""){
        this.errorModalMsg = `Please, give us a reason why you would vote ${this.candidateRecord.name} to continue`
        this.$refs.errorModalRef.show()
        return "error"
      }
    },
    handleButtonClick (e) {
      e.preventDefault()

      // check if input values are filled
      if(this.checkInput() === 'error')
        return

      // save 
      this.vote()
    },
    hideErrorModal () {
      this.$refs.errorModalRef.hide()
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
p.social-icons span{
  margin-right: 10px !important;
  cursor: pointer;
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
.bg-green{
  padding-top: 8px;
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
  height: 100px;
}
input, textarea{
  outline: none !important;
  box-shadow: none !important;
}
.btn-continue{
  border-radius: 0px;
  border: 2px solid black;
  background: #008751;
  color: white;
  text-transform: uppercase;
  padding: 3px 20px;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>

