<template>
    <div class="candidate col-md-3 col-sm-6 col-12">
        <router-link :to="{ name: 'vote', params: { id: candidate.id }}">
            <div class="image" :style="{ backgroundImage: `url('${candidate.avatar}')` }"></div>
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.candidate:hover p{
    color: #008751;
}
.candidate p{
    height: 73px;
    overflow: hidden;
    margin-top: 10px;
    font-weight: bold;
    color: black;
}
.candidate{
    margin-bottom: 20px;
}
</style>
