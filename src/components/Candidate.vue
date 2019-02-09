<template>
    <div class="candidate col-md-3 col-sm-6 col-6">
        <router-link :to="{ name: 'vote', params: { id: candidate.id }}">
            <div class="image" :style="{ backgroundImage: `url(` + require(`@/assets/${candidate.id}.jpg`) + `)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"></div>
            <p class="text-center">
                {{candidate.name}} ({{candidate.party}})
            </p>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'Candidate',
    props: {
        candidate: Object
    }
}
</script>

<style scoped>
.candidate .image{
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
}
.candidate:hover p{
    color: #008751;
}
.candidate p{
    height: 73px;
    overflow: hidden;
    margin-top: 10px;
    font-weight: 600;
    color: black;
}
.candidate{
    margin-bottom: 20px;
}
</style>
