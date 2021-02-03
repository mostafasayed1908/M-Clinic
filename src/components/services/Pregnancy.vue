<template>
<div class="preg-container">
    <div class="container bs-container">
        <div class="col-md-4">
        <div class="left-preg">
            <h3>Pregnancy</h3>
            <p class="lead">
                There are various solutions and some involve adding extra divs or a clearfix class.
                If you want a clean solution without extra divs or classes, there are two good options:
                float the parent element or add overflow:auto to the parent.
            </p>
            <!--
            <div class="btn btn-primary">View</div>
            -->
            <Pregpopup />
        </div>
        </div>
        <div class="col-md-8">
            <div class="right-preg">
                <img src="@/assets/images/services/Untitled-1.png" alt="">
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
</div>
</template>

<script>
import Pregpopup from '@/components/services/Pregpopup'
export default {
    components: {
        Pregpopup,
    }
}
</script>

<style scoped>
.preg-container {
    width: 100%;
    float: left;
    padding-top: 50px;
    color: white
}
.right-preg {
    width:100%;
    text-align: right
}
@media all and (max-width: 768px) { 
.right-preg {
    width:100%;
    text-align: center
}
 }
</style>
