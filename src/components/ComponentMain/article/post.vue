<template>
  <div class="container-fluid">
    <router-link class="btn btn-info pull-right" tag="a" :to="{name:'List'}">
      Article List
    </router-link>
    <div class="card">
      <div class="card-header card-header-icon" data-background-color="blue">
        <i class="material-icons">contacts</i>
      </div>
      <div class="card-content">
        <h4 class="card-title">Create Post</h4>
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
            <label class="col-md-1 label-on-right">Thumbnail</label>
            <div class="col-md-3">
              <div class="form-group label-floating is-empty">
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                  <div class="fileinput-new thumbnail">
                    <img src="../../../assets/images/tea.jpg" alt="...">
                  </div>
                  <div class="fileinput-preview fileinput-exists thumbnail"></div>
                  <div>
                    <span class="btn btn-info btn-round btn-file btn-custom">
                      <span class="fileinput-new">Select image</span>
                      <span class="fileinput-exists">Change</span>
                      <input type="file" name="..." />
                    </span>
                    <a href="#pablo" class="btn btn-danger btn-round fileinput-exists btn-custom" data-dismiss="fileinput"><i
                        class="fa fa-times"></i> Remove</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <label class="col-md-1 label-on-right">Type</label>
            <div class="col-md-6 col-sm-3">
              <select class="selectpicker" data-style="select-with-transition" multiple title="Choose Type"
                data-size="6">
                <option value="2">Paris </option>
                <option value="3">Bucharest</option>
                <option value="4">Rome</option>
                <option value="5">New York</option>
                <option value="6">Piatra Neamt</option>
              </select>
            </div>
          </div>
          <label class="label-control title-text-content">Content</label>
          <quill-editor 
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption">
          </quill-editor>
          <button type="submit" class="btn btn-fill btn-rose mg-t-4">Submit</button>
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
  name: 'Post',
  created() {
  },
  data () {
    return {
      content: '<p>example content</p>',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      }
    };
  }
}
</script>
 <style>
  .title-text-content {
    margin: 20px 0;
  }
  .ql-editor {
    height: 250px;
  }
  .show-tick {
    margin-top: 15px;
  }
  .btn-custom {
    padding: 10px 20px;
  }
  .fa-times {
    font-size: 16px;
  }
  .mg-t-4 {
    margin-top: 20px;
  }
 </style>