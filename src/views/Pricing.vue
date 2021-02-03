<template>
    <div class="pricing">
        <div class="container">
            <div class="center-row">
            <div class="row no-glutter">
            <Card 
                v-for="card in cards"
                v-bind:key="card.id"
                :price="card.price"
                :title="card.title"
                :icn="card.title"
                :icon="card.icon"
            />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/pricing/Card';
export default {
    components: {
        Card,
    },
    data: function() {
        return {
            cards: [
            { id: 1, price: '350', title: 'Express Examination',icon: 'far fa-calendar-times' },
            { id: 2, price: '250', title: 'Original Examination',icon: 'fas fa-user-md' },
            { id: 3, price: '120', title: 'Online Consultation',icon: 'far fa-comments' },
            ]
        }
    },
    methods: {

    }

}
</script>

<style>
    .section-hiding {
        width: 100%;
        color: #ededed;
        font-family: 'Ubuntu', sans-serif;
        border-bottom: 1px dashed rgba(226, 226, 226, 0.7)

    }
    .pricing {
        width: 100%;
        font-family: 'Ubuntu', sans-serif;
    }
    .center-row {
        max-width: 80%;
        margin:0 10%;
    }
    .card-wrapper {
        width: 100%;
        height: 320px;
        padding-left: 0.2%;
        padding-right: 0.2%;
    }
    .card-container {
        margin-top: 70px;
        width: 100%;
        height: 100%;
        background-color: #464646;
        text-align: center;
        border-radius: 12px;
    }
    .top-section {
        width: 100%;
        height: 100px;
        color: #424242;
        padding-top: 15px
    }
    sub {
        font-size: 15px;
        font-style: italic;
    }
    .bottom-section {
        width: 100%;
        height: 220px;
        background-color:#e7e7e7d7;
        padding: 0 15px;
        padding-top: 12px;
        
    }
    .form-group {
        margin-bottom: 4px;
    }
    .form-control {
        height: 30px;
        border-radius: 0;
    }
    .form-group input::placeholder {
        font-size: 11px;
        color: #b9c3cc
    }
    .btn-primary {
        background-color :#464646;
        border:none
    }
    .btn {
        font-size: 13px;
        border-radius: 0px;
        padding-left: 30px;
        padding-right: 30px
    }
    .card-icon {
        font-size: 47px;
        color: #464646;
    }
    
</style>
