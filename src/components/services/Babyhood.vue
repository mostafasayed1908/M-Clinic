<template>
<div class="baby-container">
    <div class="container bs-container">
        <div class="col-md-8">
            <div class="right-preg">
                <img src="@/assets/images/services/Untitled-2.png" alt="">
            </div>
        </div>
        <div class="col-md-4">
        <div class="left-preg">
            <h3>Babyhood</h3>
            <p class="lead">
                There are various solutions and some involve adding extra divs or a clearfix class.
                If you want a clean solution without extra divs or classes, there are two good options:
                float the parent element or add overflow:auto to the parent.
            </p>
            <Babypopup />
        </div>
        </div>
        <div style="clear:both"></div>
    </div>
</div>
</template>

<script>
import Babypopup from '@/components/services/Babypopup'

export default {
    components: {
        Babypopup,
    }
}
</script>

<style scoped>
.baby-container {
    width: 100%;
    float: left;
    padding-top: 50px;
    color:#5c5c5c;
    background-color: rgba(255, 255, 255, 0.486);
}
.right-preg {
    width:100%;
    text-align: left
}
@media all and (max-width: 768px) { 
.right-preg {
    width:100%;
    text-align: center
}
 }
</style>
