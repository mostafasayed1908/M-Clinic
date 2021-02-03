<template>
<div class="col-md-4">
    <div class="card-wrapper" @mouseenter="transformgo" @mouseleave="transformback">
        <div class="card-container" v-bind:class="{ transmarginup : margintop, transmargindown : margintop == false}" >
            <div class="top-section">
                <h3 v-bind:class="{ transfontup : hfont, transfontdown : hfont == false}" >{{price}}<sub>L.E</sub></h3>
                <p>{{title}}</p>
            </div>
            <div class="bottom-section">
                <form action="">
                <div class="form-group">
                    <input type="text" class="form-control" id="" placeholder="Full Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="" placeholder="Mobile Number">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="" placeholder="Date">
                </div>
                <button type="submit" class="btn btn-primary">Book Now!</button>
                </form>
                <div class="card-icon" v-bind:class="{ transiconup : iconcolor, transicondown : iconcolor == false}">
                    <i :class="icon"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            isActive:false,
            margintop: false,
            hfont: false,
            iconcolor:false,
            btncolor:false
        }

    },
    methods: {
        transformgo: function () {
            this.margintop = true;
            this.hfont = true;
            this.isActive = true;
            this.iconcolor = true;
            this.btncolor = true;
            
        },
        transformback: function(){
            this.margintop = false;
            this.hfont = false;
            this.iconcolor = false;
            this.isActive = false;
            
            
        }
    },
    props: ['title','price','icon'],
}
</script>

<style>
.transmarginup {
    animation-name: marginup;
    animation-duration: 100ms;
    animation-fill-mode: forwards;
}
@keyframes marginup {
  0%    {margin-top: 70px; background-color: #ebebeb48;}
  100%  {margin-top: 30px; background-color: #f0efef}

}

.transmargindown {
    animation-name: margindown;
    animation-duration: 100ms;
    animation-fill-mode: forwards;
}

@keyframes margindown {
  0%    {margin-top: 30px; background-color: #f0efef}
  100%  {margin-top: 70px; background-color: #ebebeb48}
}

.transfontup {
    animation: fontup 100ms forwards;
}
@keyframes fontup {
  0%    {font-size: 32px}
  25%   {font-size: 36px}
  50%   {font-size: 38px}
  100%  {font-size: 40px}
}
.transfontdown {
    animation: fontdown 100ms forwards;
}
@keyframes fontdown {
  0%    {font-size: 40px}
  50%   {font-size: 38px}
  75%   {font-size: 36px}
  100%  {font-size: 32px}
}
.transiconup {
    animation: iconup 100ms forwards;
}
@keyframes iconup {
  0%    { color: #464646;}
  100%  { color: #2196f3}
}
.transicondown {
    animation: icondown 100ms forwards;
}
@keyframes icondown {
  0%  { color: #2196f3}
  100%    { color: #464646;}
}
.transbtn {
    background-color: #acd373;
    color: grey
}
</style>
