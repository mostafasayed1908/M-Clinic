<template>
    <div class="container text-center">
        <div class="col-md-8 offset-md-2">
            <div class="form-wrapper">
                <h3>Contact Us</h3>
                <form action="">
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Full Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Mobile Number">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Describe Your Problem Here.."></textarea>
                    </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.form-wrapper {
    width: 100%;
    padding: 20px;
    background-color: #e6e6ea4f;
    text-align: left;
    font-family: 'Ubuntu', sans-serif;
    border-radius: 5px;
    color: #6b6b6b;
}
.form-wrapper form .form-group {
    margin-bottom: 30px;
}
.form-wrapper form .form-group .form-control{
    margin-bottom: 30px;
    border-radius: 5px;
}
.form-wrapper form .form-group textarea {
    height: 200px
}
</style>
