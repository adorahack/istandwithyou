<template>
  <div class="error">
    <Header/>
    <div class="container body">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="text-center">
                    404
                </h1>
                <p class="text-center">
                    Page not found. <br />
                    <router-link to="/">Back Home</router-link>
                </p>
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
  name: 'error',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
    .error .body{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .error h1{
        font-size: 70px;
        font-weight: 900;
    }
</style>
