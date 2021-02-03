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
.theme--light.v-sheet {
    background-color: #4fa1d5;
    border-color: #fff;
    color: rgba(251, 251, 251, 0.87);
}
.v-btn:not(.v-btn--outline).primary, .v-btn:not(.v-btn--outline).secondary, .v-btn:not(.v-btn--outline).accent, .v-btn:not(.v-btn--outline).success, .v-btn:not(.v-btn--outline).error, .v-btn:not(.v-btn--outline).warning, .v-btn:not(.v-btn--outline).info {
    color: #f985a6;
}
.info {
    background-color: #fff !important;
    border-color: #2196f3 !important;
}
</style>
