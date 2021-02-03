<template>
                    <div class="col-md-4">
                    <div class="square-2">
                        <div class="row small-row" @mouseenter="rowAnimate" @mouseleave="rowAnimateBack">
                            <div class="col-md-6 c-black" v-bind:class="{ rowAnimatecss : mouseentered, rowAnimateBackcss : mouseentered == false}" style="padding-right:0">
                                <div class="content-wrapper-s">
                                    <p class="post-title" v-bind:class="{ fontBigger : mouseentered, fontSmaller : mouseentered == false}">Pregnant and Starting a New Fitness Journey </p>
                                    <p class="post-details" v-bind:class="{ fontBigger2 : mouseentered, fontSmaller2 : mouseentered == false}">As a reminder, these pregnancy posts are mainly for my benefit, and for the sake of having...</p>
                                </div>
                            </div>
                            <div class="col-md-6 c-black" v-bind:class="{ rowAnimatecss2 : mouseentered, rowAnimateBackcss2 : mouseentered == false}" style="padding-left:0">
                                <div class="img-wrapper-s" style="background-image:url('https://images.pexels.com/photos/905874/pexels-photo-905874.jpeg?cs=srgb&dl=arms-care-check-905874.jpg&fm=jpg');"></div>
                            </div>
                        </div>
                        <div class="row small-row c-black" @mouseenter="rowAnimate2" @mouseleave="rowAnimateBack2">
                            <div class="col-md-6"  v-bind:class="{ rowAnimatecss2 : mouseentered2, rowAnimateBackcss2 : mouseentered2 == false}" style="padding-right:0">
                                <div class="img-wrapper-s" style="background-image:url('https://images.pexels.com/photos/1692050/pexels-photo-1692050.jpeg?cs=srgb&dl=black-and-white-black-and-white-lingerie-1692050.jpg&fm=jpg');"></div>
                            </div>
                            <div class="col-md-6 c-black" v-bind:class="{ rowAnimatecss : mouseentered2, rowAnimateBackcss : mouseentered2 == false}" style="padding-left:0">
                                <div class="content-wrapper-s">
                                    <p class="post-title"  v-bind:class="{ fontBigger : mouseentered2, fontSmaller : mouseentered2 == false}">Week 15 and Maternity Clothes Shopping </p>
                                    <p class="post-details"  v-bind:class="{ fontBigger2 : mouseentered2, fontSmaller2 : mouseentered2 == false}">I’ve had a few people ask me if I plan to run during my pregnancy, so here...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</template>

<script>
export default {
  data: function (){
      return {
        mouseentered: false,
        mouseentered2: false 
      }
  },
  methods: {
      rowAnimate: function() {
          this.mouseentered = true;
      },
      rowAnimateBack: function() {
          this.mouseentered = false;
      },
      rowAnimate2: function() {
          this.mouseentered2 = true;
      },
      rowAnimateBack2: function() {
          this.mouseentered2 = false;
      }
  }

}
</script>

<style>
.rowAnimatecss {
    animation: move-row-in 500ms forwards;
}
@keyframes move-row-in {
    0% {
        min-width: 50%;
        background-color: #404a53;
    }
    100% {
        min-width: 100%;
        background: rgb(32,40,124); /* Old browsers */
        background: -moz-linear-gradient(left, rgba(32,40,124,1) 0%, rgba(66,121,188,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, rgba(32,40,124,1) 0%,rgba(66,121,188,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, rgba(32,40,124,1) 0%,rgba(66,121,188,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#20287c', endColorstr='#4279bc',GradientType=1 ); /* IE6-9 */
    }
}
.rowAnimateBackcss {
    animation: move-row-out 500ms forwards;
}
@keyframes move-row-out {
    0% {
        min-width: 100%;
    }
    100% {
        min-width: 50%;
    }
  }



.rowAnimatecss2 {
    animation: move-row2-in 500ms forwards;
}
@keyframes move-row2-in {
    0% {
        max-width: 50%;
    }
    100% {
        max-width: 0%;

    }
}
.rowAnimateBackcss2 {
    animation: move-row2-out 500ms forwards;
}
@keyframes move-row2-out {
    0% {
        max-width: 0%;
    }
    100% {
        max-width: 50%;
    }
  }
  




  .fontBigger {
    animation: font-up 500ms forwards;
}
@keyframes font-up {
    0% {
        font-size: 14px;
        }
    100% {
        font-size: 25px;

    }
}
.fontSmaller {
    animation: font-down 500ms forwards;
}
@keyframes font-down {
    0% {
        font-size: 25px;
    }
    100% {
        font-size: 14px;
    }
  }

  .fontBigger2 {
    animation: font-up2 500ms forwards;
}
@keyframes font-up2 {
    0% {
        font-size: 10px;
        }
    100% {
        font-size: 15px;

    }
}
.fontSmaller2 {
    animation: font-down2 500ms forwards;
}
@keyframes font-down2 {
    0% {
        font-size: 15px;
    }
    100% {
        font-size: 10px;
    }
  }
</style>
