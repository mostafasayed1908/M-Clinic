<template>
    <v-dialog>
        <v-btn flat slot="activator" class="info">Show More</v-btn>
        <v-card>
            <v-card-title>
                <h2>Pregnancy Articles by Ann Douglas</h2>
            </v-card-title>
            <v-card-text>
            Pregnancy Health and Wellness Mindfulness During Pregnancy and Early Motherhood:
            <br/> It’s impossible to overlook the physical changes of pregnancy. But, as dramatic as those changes may be, the invisible transformations you experience en route to motherhood are every bit as far-reaching.
            Awakening the Senses:
            <br/> Pregnancy Body Changes: How your senses are affected by the hormonal changes of pregnancy.<br/>
            Pregnant With Possibility, Bursting with Life: Your body knows exactly what it needs to do to prepare itself for pregnancy, birth, and beyond.
            Feed Your Pregnant Body Wisely: <br/>Pregnancy is not supposed to be a nine-and-a-half-month ticket to the buffet — nor is it supposed to be a nine-and-a-half-month exercise in self-denial.
            The Pregnancy Workout Guide: You're exercising for two, baby.<br/>
            Your Top Ten Pregnancy Sex Questions Answered: There's no need to spend the next nine months fumbling around in the dark, looking for answers to all your pregnancy-related sex questions.
            Have Belly, Will Travel:<br/> Planning to take your belly on the road? Here are some tips on staying comfortable whether you're travelling by plane, train, or car.
            Sleep Deprivation in Pregnant Women:<br/> It's normal. It's also very, very frustrating.<br/>
            Unusual Pregnancy Complaints:<br/> Belly-button soreness, skin tags, dry eye? Yep, they're all pregnancy-related.<br/>
            Top Ten Pregnancy-Related Aches and Pains: Looking for the (pregnancy) complaint department? It's right here.<br/>
            Just Say Spahhhh:<br/> Spa Do's and Don'ts for Pregnant Women:<br/> Nurture your inner diva by treating yourself to a day for two at the spa.
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
export default {

}
</script>

<style scoped>
.theme--light.v-sheet {
    background-color: #4fa1d5;
    border-color: #fff;
    color: rgba(251, 251, 251, 0.87);
}
.v-btn:not(.v-btn--outline).primary, .v-btn:not(.v-btn--outline).secondary, .v-btn:not(.v-btn--outline).accent, .v-btn:not(.v-btn--outline).success, .v-btn:not(.v-btn--outline).error, .v-btn:not(.v-btn--outline).warning, .v-btn:not(.v-btn--outline).info {
    color: #137899;
}
.info {
    background-color: #fff !important;
    border-color: #2196f3 !important;
}
</style>
