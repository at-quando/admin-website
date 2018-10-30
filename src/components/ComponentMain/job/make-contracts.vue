<template>
  <div class="contracts container-fluid">
    <div class="col-sm-8 col-sm-offset-2">
    <div class="wizard-container">
        <div class="card wizard-card" data-color="rose" id="wizardProfile">
            <form @submit="checkForm">
                <div class="wizard-header">
                    <h3 class="wizard-title">
                        Create your contract
                    </h3>
                    <h5>Fill the blank for creating a new contract.</h5>
                </div>
                <div class="wizard-navigation">
                    <ul class="nav nav-pills">
                        <li class="active">
                            <a href="#about" data-toggle="tab">Customer Information</a>
                        </li>
                        <li>
                            <a href="#account" data-toggle="tab">Timeline</a>
                        </li>
                        <li>
                            <a href="#address" data-toggle="tab">Booking Packages</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane active" id="about">
                       <div class="row">
                          <div class="col-lg-10 col-lg-offset-1">
                              <div class="col-sm-4">
                                  <div class="choice" data-toggle="wizard-checkbox" :class="{'active': contractForm.type == 0}">
                                      <input type="radio"  id="one" name="jobb" v-model="contractForm.type" value="0">
                                      <label for="one">
                                        <div class="icon">
                                          <i class="fa fa-heart"></i>
                                        </div>
                                      </label>
                                      <h6>Wedding</h6>
                                  </div>
                              </div>
                              <div class="col-sm-4">
                                  <div class="choice" data-toggle="wizard-checkbox" :class="{'active': contractForm.type == 1}">
                                      <input type="radio" id="two" name="jobb" v-model="contractForm.type" value="1">
                                      <label for="two">
                                         <div class="icon">
                                           <i class="fa fa-users"></i>
                                         </div>
                                      </label>
                                      <h6>Yearbook</h6>
                                  </div>
                              </div>
                              <div class="col-sm-4">
                                  <div class="choice" data-toggle="wizard-checkbox" :class="{'active': contractForm.type == 2}">
                                      <input type="radio" id="three" name="jobb" v-model="contractForm.type" value="2">
                                      <label for="three">
                                         <div class="icon">
                                          <i class="fa fa-building"></i>
                                         </div>
                                      </label>
                                      <h6>Event</h6>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div class="row">
                            <h4 class="info-text"> Basic Customer Information</h4>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">face</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Full Name
                                            <small>(required)</small>
                                        </label>
                                        <input name="firstname" type="text" v-model="contractForm.name" class="form-control">
                                    </div>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">record_voice_over</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Phone
                                            <small>(required)</small>
                                        </label>
                                        <input name="phone" type="text" v-model="contractForm.phone" class="form-control">
                                    </div>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">home</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Address
                                            <small>(required)</small>
                                        </label>
                                        <input name="address" type="text" v-model="contractForm.address" class="form-control">
                                    </div>
                                </div>
                                <div class="input-group form-group label-floating">
                                    <span class="input-group-addon">
                                        <i class="material-icons">home</i>
                                    </span>
                                    <label class="control-label">Town</label>
                                    <select name="country" class="form-control">
                                        <option disabled="" selected=""></option>
                                        <option value="Đà Nẵng"> Đà Nẵng </option>
                                        <option value="Huế"> Huế </option>
                                        <option value="Tam Kỳ"> Tam Kỳ </option>
                                        <option value="Điện bàn - QN"> Điện bàn - QN</option>
                                        <option value="Hội An"> Hội An </option>
                                        <option value="Duy Xuyên - QN">Duy Xuyên - QN </option>
                                        <option value="Other"> Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">account_balance</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Client
                                            <small>(Công ty - Đơn vị - Trường học)</small>
                                        </label>
                                        <input name="client" type="text" v-model="contractForm.client" class="form-control">
                                    </div>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">label</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Label
                                            <small>(niên hiệu - niên khóa)</small>
                                        </label>
                                        <input name="label" type="text" v-model="contractForm.label" class="form-control">
                                    </div>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">group_work</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Group
                                            <small>(nhóm - lớp)</small>
                                        </label>
                                        <input name="group" type="text" v-model="contractForm.group" class="form-control">
                                    </div>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="material-icons">email</i>
                                    </span>
                                    <div class="form-group label-floating">
                                        <label class="control-label">Email
                                            <small>(required)</small>
                                        </label>
                                        <input name="email" type="email" v-model="contractForm.email" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="tab-pane" id="account">
                      <div class="row">
                          <div class="col-sm-12">
                              <div class="input-group">
                                  <span class="input-group-addon">
                                    <i class="material-icons">face</i>
                                  </span>
                                  <div class="form-group label-floating">
                                    <label class="control-label">Date Picker</label>
                                    <input type="text" class="form-control datepicker" v-model="contractForm.dateTaken"/>
                                  </div>
                              </div>
                          </div>
                          <hr>
                          <h4 class="info-text">Tell me your plan</h4>
                          <div class="col-sm-6">
                              <div class="input-group">
                                  <span class="input-group-addon">
                                      <i class="material-icons">face</i>
                                  </span>
                                  <div class="form-group label-floating">
                                    <label class="control-label">Time Picker</label>
                                    <input type="text" class="form-control timepicker" v-model="plan.timeOccur" />
                                  </div>
                              </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="material-icons">record_voice_over</i>
                              </span>
                              <div class="form-group label-floating">
                                <label class="control-label">Content
                                  <small>(required)</small>
                                </label>
                                <input name="content" type="text" v-model="plan.content" class="form-control">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-9">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">account_balance</i>
                                </span>
                                <div class="form-group label-floating">
                                    <label class="control-label">Description
                                        <small>nội dung</small>
                                    </label>
                                    <input name="description" type="text" v-model="plan.description" class="form-control">
                                </div>
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <button class="btn btn-warning" @click="addPlan()">Add Plan</button>
                          </div>
                        </div>
                        <!-- / -->
                        <div class="col-md-12">
                          <div class="card card-plain">
                              <div class="card-header card-header-icon" data-background-color="green">
                                  <i class="material-icons">assignment</i>
                              </div>
                              <h4 class="card-title">Timeline of Contract Date</h4>
                              <p class="category">Some important Milestones</p>
                              <div class="card-content table-responsive">
                                  <table class="table table-hover">
                                      <thead>
                                          <th>Time</th>
                                          <th>Content</th>
                                          <th>Description</th>
                                          <th>Actions</th>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(item, index) of contractForm.plans" :key="index">
                                            <td>{{item.timeOccur}}</td>
                                            <td>{{item.content}}</td>
                                            <td>{{item.description}}</td>
                                            <td>
                                              <button type="button" @click="deletePlan(index)" rel="tooltip" class="btn btn-danger btn-link" data-original-title="" title="">
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
                    <div class="tab-pane" id="address">
                      <div class="col-sm-12">
                        <h4 class="info-text"> Which Price You Want? </h4>
                      </div>
                      <div class="row" v-if="contractForm.type==0">
                        <div class="col-sm-9">
                          <div class="form-group label-floating">
                            <label class="control-label">Packages</label>
                            <select name="country" class="form-control">
                              <option disabled="" selected=""></option>
                              <option value="Afghanistan"> Cưới Truyền Thống </option>
                              <option value="Albania"> Cưới Phóng sự </option>
                              <option value="Algeria"> Algeria </option>
                              <option value="American Samoa"> American Samoa </option>
                              <option value="Andorra"> Andorra </option>
                              <option value="Angola"> Angola </option>
                              <option value="Anguilla"> Anguilla </option>
                              <option value="Antarctica"> Antarctica </option>
                              <option value="...">...</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <button class="btn btn-warning">Add Plan</button>
                        </div>
                        <div class="col-md-12">
                          <div class="card card-plain">
                              <div class="card-header card-header-icon" data-background-color="blue">
                                  <i class="material-icons">assignment</i>
                              </div>
                              <h4 class="card-title">List of Packages </h4>
                              <p class="category">the information of this bill</p>
                              <div class="card-content table-responsive">
                                  <table class="table table-hover">
                                      <thead>
                                        <th>Name Package</th>
                                        <th>Aspect</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Chụp truyền thống</td>
                                          <td>Chụp</td>
                                          <td>4,500,000</td>
                                          <td>4,500,000</td>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-12">
                        <label class="col-sm-2">Total:</label>
                        <span>4,500,000</span>
                      </div>
                      <!-- <div class="col-sm-12">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" value="0" v-model="checkMoney"> Tôi muốn set tiền cứng
                            <span class="form-check-sign">
                              <span class="check"></span>
                            </span>
                          </label>
                        </div>
                      </div> -->
                       <!-- <div class="col-sm-12">
                        <div class="col-sm-9">
                          <div class="input-group">
                            <span class="input-group-addon">
                                <i class="material-icons">account_balance</i>
                            </span>
                            <div class="form-group label-floating">
                                <label class="control-label">Số tiền
                                    <small>Tổng tiền set cứng</small>
                                </label>
                                <input name="description" type="text" v-model="contractForm.description" :disabled="!checkMoney" class="form-control">
                            </div>
                          </div>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
                <div class="wizard-footer">
                    <div class="pull-right">
                        <input type='button' class='btn btn-next btn-fill btn-rose btn-wd' name='next' value='Next' />
                        <input type='submit' class='btn btn-finish btn-fill btn-rose btn-wd' name='finish' value='Finish' />
                    </div>
                    <div class="pull-left">
                        <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
                    </div>
                    <div class="clearfix"></div>
                </div>
            </form>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import '../../../../static/jquery.bootstrap-wizard.js'


export default {
  name: 'MakeContracts',
  data() {
    return {
      checkMoney: false,
      contractForm: {
        type: '',
        name: '',
        phone: '',
        address: '',
        town: '',
        client: '',
        dateTaken: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        label: '',
        group: '',
        email: '',
        plans: []
      },
      plan: {
        content: '',
        description: '',
        timeOccur: '08:00 AM'
      }
    }
  },
  mounted () {
    demo.initMaterialWizard()
    demo.initFormExtendedDatetimepickers()
  },
  methods: {
    checkForm: function (e) {
      if (this.contractForm.name) {
        console.log(this.contractForm)
        this.$http.post('contracts', this.contractForm)
        .then(response => {
          if (response.status=201) {
            console.log('OK')
          }
        })
      }
      this.errors = [];
      if (!this.contractForm.name) {
        this.errors.push('Name required.');
      }
      if (!this.contractForm.age) {
        this.errors.push('Age required.');
      }
      e.preventDefault();
    },
    addPlan () {
      this.contractForm.plans.push(this.plan)
      this.plan = {
        content: '',
        description: '',
        timeOccur: '08:00 AM'
      }
    },
    deletePlan (index) {
      this.contractForm.plans.splice(index,1)
    }
  }
}
</script>
