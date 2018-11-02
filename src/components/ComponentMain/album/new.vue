<template>
  <div class="container-fluid">
    <router-link class="btn btn-info pull-right" tag="a" :to="{name:'Albums'}">
      Album List
    </router-link>
     <div class="card">
      <div class="card-header card-header-icon" data-background-color="blue">
        <i class="material-icons">contacts</i>
      </div>
      <div class="card-content">
        <h4 class="card-title">Create New Album</h4>
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
            <label class="col-md-2 label-on-right mg-b-3">Gallery images</label>
          </div>
           <div class="row mg-top-3">
            <div class="col-sm-4 col-lg-2">
              <div class="fileinput-new thumbnail border-thumbnail">
                <img class="border-radius-4" src="../../../assets/images/tea.jpg" alt="...">
              </div>
            </div>
            <div class="col-sm-4 col-lg-2">
              <div class="fileinput-new thumbnail border-thumbnail">
                <img class="border-radius-4" src="../../../assets/images/flower.jpg" alt="...">
              </div>
            </div>
            <div class="col-sm-4 col-lg-2">
              <div class="fileinput-new thumbnail border-thumbnail">
                <img class="border-radius-4" src="../../../assets/images/heart.jpg" alt="...">
              </div>
            </div>
            <div class="col-sm-4 col-lg-2">
              <div class="fileinput-new thumbnail border-thumbnail add-thumbnail">
                <span class="btn-file">
                  <i class="material-icons">add</i>
                  <input type="file" name="..." />
                </span>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-fill btn-rose">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import { quillEditor } from 'vue-quill-editor'

  export default {
    components: {
      quillEditor
    },
    name: 'VideoNew',
    created() {
    }
  }
</script>

<style>
.border-thumbnail {
  border: 1px solid #ccc;
}
.border-radius-4 {
  border-radius: 3px;
}
.add-thumbnail {
  height: 155px;
  position: relative;
}
.btn-file {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.mg-b-3 {
  margin-bottom: 15px;
}
</style>