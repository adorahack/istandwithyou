<template>
    <div class="col-md-3 col-sm-6 col-12">
        <div class="resultcard">
            <p class="green">{{ reason.name }}</p>
            <p class="reason">{{ reason.reason }}</p>
            <p><small class="green candidate">- {{ reason.candidate.name }} ({{ reason.candidate.party }})</small></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResultCard',
    props: {
        reason: Object
    }
}
</script>

<style scoped>
.reason{
    height: 190px;
    overflow: hidden;
    
}
.resultcard{
    width: 100%;
    height: 340px;
    background: rgb(248, 247, 247);
    border-radius: 30px;
    padding: 30px;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.31);
    -moz-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.31);
    box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.31);
}
.green.candidate{
    height: 40px;
    overflow: hidden !important;
    display: block;
}
.green{
    color: #008751;
    font-weight: 600;
    margin-bottom: 5px;
}
</style>
