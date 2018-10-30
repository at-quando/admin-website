<template>
  <div class="hiring">
      <div class="col-md-6">
        <h3 class="title text-center">Team Devices</h3> 
        <div class="nav-center">
            <ul class="nav nav-pills nav-pills-warning nav-pills-icons" role="tablist">
                <li>
                    <a href="#description-1" role="tab" data-toggle="tab">
                        <i class="material-icons">info</i> Photo Devices
                    </a>
                </li>
                <li class="active">
                    <a href="#schedule-1" role="tab" data-toggle="tab">
                        <i class="material-icons">location_on</i> Video Devices
                    </a>
                </li>
                <li>
                    <a href="#tasks-1" role="tab" data-toggle="tab">
                        <i class="material-icons">gavel</i> LED & FLASH
                    </a>
                </li>
                <li>
                    <a href="#tasks-2" role="tab" data-toggle="tab">
                        <i class="material-icons">help_outline</i> OTHER
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane" id="description-1">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Description about product</h4>
                        <p class="category">
                            More information here
                        </p>
                    </div>
                    <div class="card-content">
                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        <br />
                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
                    </div>
                </div>
            </div>
            <div class="tab-pane active" id="schedule-1">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Location of the product</h4>
                        <p class="category">
                            More information here
                        </p>
                    </div>
                    <div class="card-content">
                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                        <br />
                        <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions.
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="tasks-1">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Legal info of the product</h4>
                        <p class="category">
                            More information here
                        </p>
                    </div>
                    <div class="card-content">
                        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                        <br />
                        <br />Dynamically innovate resource-leveling customer service for state of the art customer service.
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="tasks-2">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Help center</h4>
                        <p class="category">
                            More information here
                        </p>
                    </div>
                    <div class="card-content">
                        From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.
                        <br />
                        <br /> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-social btn-fill col-md-12 col-sm-12 btn-google">
            <i class="fa fa-google-square"></i> Submit Your Request
        </button>
    </div>
    <div class="col-md-6">
      <div class="card">
            <div class="card-header card-header-icon" data-background-color="rose">
                <i class="material-icons">today</i>
            </div>
            <div class="card-content">
                <h4 class="card-title">Datetime Picker</h4>
                <div class="form-group">
                    <label class="label-control">Datetime Picker</label>
                    <input type="text" class="form-control datetimepicker" value="10/05/2016" />
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header card-header-icon" data-background-color="rose">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">Simple Table</h4>
            <div class="card-content">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th>Name</th>
                                <th>Job Position</th>
                                <th>Since</th>
                                <th class="text-right">Salary</th>
                                <th class="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td>Andrew Mike</td>
                                <td>Develop</td>
                                <td>2013</td>
                                <td class="text-right">&euro; 99,225</td>
                                <td class="td-actions text-right">
                                    <button type="button" rel="tooltip" class="btn btn-info">
                                        <i class="material-icons">person</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-success">
                                        <i class="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-danger">
                                        <i class="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td>John Doe</td>
                                <td>Design</td>
                                <td>2012</td>
                                <td class="text-right">&euro; 89,241</td>
                                <td class="td-actions text-right">
                                    <button type="button" rel="tooltip" class="btn btn-info btn-round">
                                        <i class="material-icons">person</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-success btn-round">
                                        <i class="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-danger btn-round">
                                        <i class="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">3</td>
                                <td>Alex Mike</td>
                                <td>Design</td>
                                <td>2010</td>
                                <td class="text-right">&euro; 92,144</td>
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
                                <td class="text-center">4</td>
                                <td>Mike Monday</td>
                                <td>Marketing</td>
                                <td>2013</td>
                                <td class="text-right">&euro; 49,990</td>
                                <td class="td-actions text-right">
                                    <button type="button" rel="tooltip" class="btn btn-info btn-round">
                                        <i class="material-icons">person</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-success btn-round">
                                        <i class="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-danger btn-round">
                                        <i class="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">5</td>
                                <td>Paul Dickens</td>
                                <td>Communication</td>
                                <td>2015</td>
                                <td class="text-right">&euro; 69,201</td>
                                <td class="td-actions text-right">
                                    <button type="button" rel="tooltip" class="btn btn-info">
                                        <i class="material-icons">person</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-success">
                                        <i class="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" class="btn btn-danger">
                                        <i class="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Hiring',
}
</script>
