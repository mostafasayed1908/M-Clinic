<template>
    <v-dialog>
        <v-btn flat slot="activator" class="info">Hire Me</v-btn>
        <v-card>
            <v-card-title>
                <h2>My Contact Info</h2>
            </v-card-title>
            <v-card-text>
                <div class="ul-container">
                <ul>
                    <li> <a href=""><i class="fab fa-facebook"></i></a></li>
                    <li> <a href=""> <i class="fab fa-twitter"></i></a></li>
                    <li> <a href=""> <i class="fab fa-behance-square"></i></a></li>
                </ul>
                </div>
            </v-card-text>
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
h2 {
    width: 100%;
    text-align: center;
    color: #3b78bd;
}
.ul-container {
    width: 100%;
    text-align: center;
    border-right: 6px solid #6a9fda;
    border-left: 6px solid #6a9fda;
}
.ul-container ul {

}
li {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: beige;
    text-align: center;
    font-size: 30px;
    padding: 3px;
    margin-right: 10px
}
</style>
