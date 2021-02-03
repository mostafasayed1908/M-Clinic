<template>
    <v-dialog>
        <v-btn flat slot="activator" class="info">Show More</v-btn>
        <v-card>
            <v-card-title>
                <h2>Here I'm</h2>
            </v-card-title>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

}
</script>

<style scoped>
.theme--light.v-sheet[data-v-59a036d6] {
    background-color: #f985a6;
    border-color: #fff;
    color: rgba(251, 251, 251, 0.87);
}
.v-btn:not(.v-btn--outline).primary[data-v-59a036d6], .v-btn:not(.v-btn--outline).secondary[data-v-59a036d6], .v-btn:not(.v-btn--outline).accent[data-v-59a036d6], .v-btn:not(.v-btn--outline).success[data-v-59a036d6], .v-btn:not(.v-btn--outline).error[data-v-59a036d6], .v-btn:not(.v-btn--outline).warning[data-v-59a036d6], .v-btn:not(.v-btn--outline).info[data-v-59a036d6] {
    color: #fff;
}
.info[data-v-59a036d6] {
    background-color: #f985a6 !important;
    border-color: #e7e7e7 !important;
}
</style>
