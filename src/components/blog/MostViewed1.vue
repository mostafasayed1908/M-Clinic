<template>
    <div class="col-md-4"  @mouseenter="mvanimate" @mouseleave="mvanimateback">
        <div class="square-1">
            <div class="img-wrapper-b" v-bind:class="{ mvianimateclass : zoom, mvianimateclassback : zoom == false}" style="background-image:url('https://drclh-givvljoa1hah1dca03mh.netdna-ssl.com/wp-content/uploads/2015/06/placeholder-banner-1024x634.jpg?x28450');">
                    <div v-bind:class="{ mvanimateclass : zoom, mvanimateclassback : zoom == false}" class="content-wrapper-b">
                        <h6 v-bind:class="{ mvhanimateclass : zoom, mvhanimateclassback : zoom == false}"><i class="fas fa-check-double"></i>Most Viewed</h6>
                        <p v-bind:class="{ mvpanimateclass : zoom, mvpanimateclassback : zoom == false}">Benefits of Walking Through Pregnancy </p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function (){
      return {
        zoom: false

      }
  },
  methods: {
      mvanimate: function() {
          this.zoom = true;
      },
      mvanimateback: function() {
          this.zoom = false;
      }
  }

}
</script>

<style>
.mvanimateclass {
  animation: bounce-in 500ms forwards;
}
.mvanimateclassback {
  animation: bounce-out 500ms forwards;
}
@keyframes bounce-in {
  0% {
        background: linear-gradient(to top, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 43%, rgba(125, 185, 232, 0) 77%);
  }
  100% {
        background: linear-gradient(to top, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 70%, rgba(125, 185, 232, 0) 100%);
        font-size: 28px;
  }

}
@keyframes bounce-out {
  0% {
        background: linear-gradient(to top, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 70%, rgba(125, 185, 232, 0) 100%);
        font-size: 28px;
  }
  100% {
        background: linear-gradient(to top, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 43%, rgba(125, 185, 232, 0) 77%);
  }

}
.mvpanimateclass {
    animation: bounce-p-in 500ms forwards;
}
.mvpanimateclass {
    animation: bounce-p-out 500ms forwards;
}
@keyframes bounce-p-in {
  0% {
        bottom: 8px
  }
  100% {
        bottom: 80px
  }

}
@keyframes bounce-p-out {
  0% {
       bottom: 80px 
  }
  100% {
        bottom: 8px
  }

}
.mvhanimateclass {
    color: red;
}
.mvianimateclass {
  animation: bounce-i-in 500ms forwards;
}
@keyframes bounce-i-in {
  0% {
       background-position: unset
  }
  100% {
       background-position: bottom
        
  }
}
.mvianimateclassback {
  animation: bounce-i-out 500ms forwards;
}
@keyframes bounce-i-out {
  0% {
       background-position: bottom
  }
  100% {
       background-position: unset
        
  }
}
</style>
