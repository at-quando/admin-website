<template>
  <div class="schedule">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <router-link tag="a" :to="{name: 'MakeContracts'}">
              <div class="card-header" data-background-color="blue">
                  <i class="fa fa-twitter"></i>
              </div>
              <div class="card-content">
                  <p class="category">Click here</p>
                  <h3 class="card-title">New Contract</h3>
              </div>
            </router-link>
          </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header" data-background-color="orange">
                  <i class="material-icons">weekend</i>
              </div>
              <div class="card-content">
                  <p class="category">Number of Contracts</p>
                  <h3 class="card-title">879</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i>Your money in this month
                  </div>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header" data-background-color="rose">
                  <i class="material-icons">equalizer</i>
              </div>
              <div class="card-content">
                  <p class="category">Income Contract</p>
                  <h3 class="card-title">18934tr</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons">local_offer</i> From people & your boss
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-icon" data-background-color="purple">
            <i class="material-icons">assignment</i>
          </div>
          <div class="card-content">
            <h4 class="card-title">Schedule Contracts</h4>
            <div class="toolbar">
          </div>
          <div class="material-datatables">
            <table id="datatables" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                <thead>
                    <tr>
                        <th>DateTime</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Budget</th>
                        <th>Other</th>
                        <th class="disabled-sorting text-right">Actions</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>DateTime</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Budget</th>
                        <th>Other</th>
                        <th class="disabled-sorting text-right">Actions</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td class="text-right">
                            <a href="#" class="btn btn-simple btn-info btn-icon like"><i class="material-icons">favorite</i></a>
                            <a href="#" class="btn btn-simple btn-warning btn-icon edit"><i class="material-icons">dvr</i></a>
                            <a href="#" class="btn btn-simple btn-danger btn-icon remove"><i class="material-icons">close</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011/07/25</td>
                        <td class="text-right">
                            <a href="#" class="btn btn-simple btn-info btn-icon like"><i class="material-icons">favorite</i></a>
                            <a href="#" class="btn btn-simple btn-warning btn-icon edit"><i class="material-icons">dvr</i></a>
                            <a href="#" class="btn btn-simple btn-danger btn-icon remove"><i class="material-icons">close</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009/01/12</td>
                        <td class="text-right">
                            <a href="#" class="btn btn-simple btn-info btn-icon like"><i class="material-icons">favorite</i></a>
                            <a href="#" class="btn btn-simple btn-warning btn-icon edit"><i class="material-icons">dvr</i></a>
                            <a href="#" class="btn btn-simple btn-danger btn-icon remove"><i class="material-icons">close</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012/03/29</td>
                        <td class="text-right">
                            <a href="#" class="btn btn-simple btn-info btn-icon like"><i class="material-icons">favorite</i></a>
                            <a href="#" class="btn btn-simple btn-warning btn-icon edit"><i class="material-icons">dvr</i></a>
                            <a href="#" class="btn btn-simple btn-danger btn-icon remove"><i class="material-icons">close</i></a>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Contracts'
}
</script>
