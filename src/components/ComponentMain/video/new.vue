<template>
  <div class="container-fluid">
    <router-link class="btn btn-info pull-right" tag="a" :to="{name:'Videos'}">
      Video List
    </router-link>
     <div class="card">
      <div class="card-header card-header-icon" data-background-color="blue">
        <i class="material-icons">contacts</i>
      </div>
      <div class="card-content">
        <h4 class="card-title">Create New Video</h4>
        <form method="#" action="#" class="form-horizontal">
          <div class="row">
            <label class="col-md-1 label-on-right">Title</label>
            <div class="col-md-6">
              <div class="form-group label-floating is-empty">
                <label class="control-label"></label>
                <input type="email" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <label class="col-md-1 label-on-right">Description</label>
            <div class="col-md-6">
              <div class="form-group label-floating is-empty">
                <label class="control-label"></label>
                <input type="email" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <label class="col-md-1 label-on-right">Link</label>
            <div class="col-md-6">
              <div class="form-group label-floating is-empty">
                <label class="control-label"></label>
                <input type="email" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <label class="col-md-1 label-on-right">Type</label>
            <div class="col-md-6">
              <div class="radio-type">
                <label class="mg-r-2">
                  <input type="radio" name="optionsRadios" checked="true"> First Radio
                </label>
                <label>
                  <input type="radio" name="optionsRadios"> Second Radio
                </label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-fill btn-rose mg-top-btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import {
    quillEditor
  } from "vue-quill-editor";

  export default {
    components: {
      quillEditor
    },
    name: "VideoNew",
    created() {}
  };

</script>

<style>
.radio-type {
  padding-top: 28px;
}
.mg-r-2 {
  margin-right: 10px;
}
.mg-top-btn {
  margin-top: 30px;
}
</style>