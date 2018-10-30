<template>
  <div class="yourteam">
   <h3>About The Classic Studio</h3>
    <br>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
            <div class="card-header card-header-icon" data-background-color="rose">
                <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">Member in Your Team</h4>
            <div class="card-content table-responsive table-full-width">
                <table class="table table-hover">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Country</th>
                        <th>City</th>
                    </thead>
                    <tbody>
                        <tr class="success">
                            <td>1</td>
                            <td>Dakota Rice (Success)</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>$23,789</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                        </tr>
                        <tr class="info">
                            <td>3</td>
                            <td>Sage Rodriguez (Info)</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                        </tr>
                        <tr class="danger">
                            <td>5</td>
                            <td>Doris Greene (Danger)</td>
                            <td>$63,542</td>
                            <td>Malawi</td>
                            <td>Feldkirchen in Kärnten</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mason Porter</td>
                            <td>$78,615</td>
                            <td>Chile</td>
                            <td>Gloucester</td>
                        </tr>
                        <tr class="warning">
                            <td>7</td>
                            <td>Mike Chaney (Warning)</td>
                            <td>$38,735</td>
                            <td>Romania</td>
                            <td>Bucharest</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
      <div class="col-md-4">
          <div class="card card-product">
              <div class="card-image" data-header-animation="true">
                  <a href="#pablo">
                      <img class="img" src="../../../assets/img/card-2.jpg">
                  </a>
              </div>
              <div class="card-content">
                  <div class="card-actions">
                      <button type="button" class="btn btn-danger btn-simple fix-broken-card">
                          <i class="material-icons">build</i> Fix Header!
                      </button>
                      <button type="button" class="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="View">
                          <i class="material-icons">art_track</i>
                      </button>
                      <button type="button" class="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="Edit">
                          <i class="material-icons">edit</i>
                      </button>
                      <button type="button" class="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="Remove">
                          <i class="material-icons">close</i>
                      </button>
                  </div>
                  <h4 class="card-title">
                      <a href="#pablo">Cozy 5 Stars Apartment</a>
                  </h4>
                  <div class="card-description">
                      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                  </div>
              </div>
              <div class="card-footer">
                  <div class="price">
                      <h4>$899/night</h4>
                  </div>
                  <div class="stats pull-right">
                      <p class="category"><i class="material-icons">place</i> Barcelona, Spain</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Your Team'
}
</script>
