<template>
  <div class="container-fluid">
    <router-link class="btn btn-info pull-right" tag="a" :to="{name:'Video'}">
      <i class="material-icons">add</i>
      New Video
    </router-link>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-icon" data-background-color="blue">
            <i class="material-icons">assignment</i>
          </div>
          <h4 class="card-title">Article List</h4>
          <div class="card-content">
            <div class="table-responsive">
              <table class="table table-shopping">
                <thead>
                  <tr>
                    <th class="text-center"></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Link</th>
                    <th class="text-right">Date</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="img-container img-customize">
                        <img src="../../../assets/images/tea.jpg" alt="...">
                      </div>
                    </td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td>2013</td>
                    <td>http://</td>
                    <td class="text-right">&euro; 99,225</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                        <i class="material-icons">person</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-success btn-simple">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="img-container img-customize">
                        <img src="../../../assets/images/mooncake.jpg" alt="...">
                      </div>
                    </td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td>2013</td>
                    <td>http://</td>
                    <td class="text-right">&euro; 99,225</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                        <i class="material-icons">person</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-success btn-simple">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="img-container img-customize">
                        <img src="../../../assets/images/heart.jpg" alt="...">
                      </div>
                    </td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td>2013</td>
                    <td>http://</td>
                    <td class="text-right">&euro; 99,225</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                        <i class="material-icons">person</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-success btn-simple">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="img-container img-customize">
                        <img src="../../../assets/images/flower1.jpg" alt="...">
                      </div>
                    </td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td>2013</td>
                    <td>http://</td>
                    <td class="text-right">&euro; 99,225</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" class="btn btn-info btn-simple">
                        <i class="material-icons">person</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-success btn-simple">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" class="btn btn-danger btn-simple">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!--  end card  -->
      </div>
      <!-- end col-md-12 -->
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
    name: "Videos",
    created() {}
  };

</script>
<style>
.img-customize {
  width: 75px !important;
}
</style>
