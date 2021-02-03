<template>
    <div class="services-container"> 
        <Pregnancy />
        <Babyhood />
        <Childhood />
    </div>
</template>

<script>
import Pregnancy from '@/components/services/Pregnancy';
import Babyhood from '@/components/services/Babyhood';
import Childhood from '@/components/services/Childhood';
export default {
    components: {
        Pregnancy,
        Babyhood,
        Childhood
    }
}
</script>

<style>
.services-container {
    font-family: 'Ubuntu', sans-serif;
    overflow: auto;
}
.bs-container > div {
    float: left;
    padding: 0
}
.left-preg {
    text-align: center;
    padding-top: 30px;
}
.left-preg p{
    font-size: 15px
}

.right-preg img {
    max-width: 80%;
}
</style>
