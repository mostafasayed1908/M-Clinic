<template>
    <div class="blog-wrapper">
        <div class="container">
            <div class="row big-row">
                <MostViewed1 />
                <SmallPosts1 />
                <MostViewed2 />
            </div>
            <div class="row big-row">
                <SmallPosts2 />
                <MostViewed3 />
                <SmallPosts3 />
            </div>
        </div>
    </div>
</template>

<script>
    import MostViewed1 from '@/components//blog/MostViewed1.vue';
    import MostViewed2 from '@/components//blog/MostViewed2.vue';
    import MostViewed3 from '@/components//blog/MostViewed3.vue';
    import SmallPosts1 from '@/components//blog/SmallPosts1.vue';
    import SmallPosts2 from '@/components//blog/SmallPosts2.vue';
    import SmallPosts3 from '@/components//blog/SmallPosts3.vue';

    export default {
        components: {
            MostViewed1,
            MostViewed2,
            MostViewed3,
            SmallPosts1,
            SmallPosts2,
            SmallPosts3,
        }
    }
</script>

<style>
    .blog-wrapper {
        /*
        background-image: url('https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?cs=srgb&dl=abstract-background-blur-949587.jpg&fm=jpg');
        background-repeat: round;
        */
        padding: 0;
    }
    .big-row>div {
        height: 300px;
        padding: 0;
    }

    .big-row>div>div {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden
    }

    .img-wrapper-b {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover
    }

    .content-wrapper-b {
        width: 100%;
        height: 100%;
        padding: 0 10px;
        font-size: 16px;
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        color: white;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.66);
        background: -moz-linear-gradient(bottom, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 43%, rgba(125, 185, 232, 0) 77%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(bottom, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 43%, rgba(125, 185, 232, 0) 77%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to top, rgba(30, 87, 153, 1) 0%, rgba(125, 185, 232, 0.44) 43%, rgba(125, 185, 232, 0) 77%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e5799', endColorstr='#007db9e8', GradientType=0);
    }

    .content-wrapper-b p {
        position: absolute;
        bottom: 8px;
    }

    .content-wrapper-b h6 {
        position: absolute;
        top: 6px;
        color: #5b9cd1;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.66);
    }

    .small-row {
        height: 50%;
        margin: 0;
    }

    .small-row>div {
        padding: 0
    }

    .img-wrapper-s {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 10px;
    }
    .c-black {
        background: rgb(32,40,124);
        background: -moz-linear-gradient(left, rgb(83, 90, 173) 0%,rgb(83, 139, 207) 100%);
        background: -webkit-linear-gradient(left, rgb(83, 90, 173) 0%,rgb(83, 139, 207) 100%);
        background: linear-gradient(to right, rgb(83, 90, 173) 0%,rgb(83, 139, 207) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#20287c', endColorstr='#4279bc',GradientType=1 );    


    }
    .content-wrapper-s {
        width: 100%;
        height: 100%;
        padding: 5px;
        color: #eaeaea;
    }

    .post-title {
        font-size: 14px;
        font-weight: 600;
        font-family: 'Ubuntu', sans-serif;
        margin-bottom: 2px
    }

    .post-details {
        font-size: 10px;
        margin-bottom: 2px;
    }
</style>