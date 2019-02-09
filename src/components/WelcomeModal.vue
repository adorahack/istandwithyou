<template>
  <div class="home">
    <Header title="Who will you vote for?"/>
    <!-- the modal -->
    <b-modal hide-footer ref="myModalRef" id="myModal" title="#IStandWithYou">
        <p class="bolder text-center">Welcome to <span class="green">I Stand With You</span></p>
        <p class="text-center">
            Fellow Nigerians,<br />
            Elections are here again.
        </p>
        <p class="text-center">
            Who will you be voting for?<br />
            Why did you choose them?<br />
            We want to know...
        </p>
        <button class="btn-continue btn" @click="hideModal">
            Continue
        </button>
        <p class="text-center">
            <small>Remember your vote is your power. Choose wisely.</small>
        </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'welcome-modal',
  mounted(){
      if (! localStorage.istandwithyou ) {
        localStorage.istandwithyou = true;
        this.$refs.myModalRef.show();
      }
  },
  methods: {
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }

}
</script>

<style scoped>
#myModal{
    padding: 30px;
}
h5, h5.modal-title{
    font-weight: 600 !important;
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
span.green{
    color: #008751;
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
