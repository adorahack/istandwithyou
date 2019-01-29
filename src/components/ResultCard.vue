<template>
    <div class="col-md-3 col-sm-6 col-12">
        <div class="resultcard">
            <p class="reason">{{reason}}</p>
            <p class="green">- Anonymous</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResultCard',
    props: {
        reason: String
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
    height: 300px;
    background: rgb(248, 247, 247);
    border-radius: 30px;
    padding: 30px;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.31);
    -moz-box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.31);
    box-shadow: 0px 0px 13px -3px rgba(0,0,0,0.31);
}
.green{
    color: #008751;
    font-weight: 600;
}
</style>
