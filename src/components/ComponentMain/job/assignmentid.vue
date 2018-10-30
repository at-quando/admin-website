<template>
  <div class="assignmentid">
    <div class="col-md-12">
        <div class="card">
            <div class="form-horizontal" v-if="contract">
                <div class="card-header card-header-text" data-background-color="rose">
                  <h4 class="card-title">Form Assign</h4>
                </div>
                <div class="card-content">
                  <h3 class="title text-center">Basic Information</h3>
                  <div class="row"> 
                      <label class="col-sm-2 label-on-left">Type</label>
                      <div class="col-sm-2">
                        <div class="form-group">
                          <p class="form-control-static">{{contract.type}}</p>
                        </div>
                      </div>
                      <label class="col-sm-2 label-on-left">Code</label>
                      <div class="col-sm-3">
                        <div class="form-group">
                          <p class="form-control-static">{{contract.code}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <label class="col-sm-2 label-on-left">Contract Name</label>
                      <div class="col-sm-5">
                        <div class="form-group label-floating is-empty">
                          <label class="control-label"></label>
                          <input type="text" class="form-control" v-model="contract.name">
                          <span class="help-block">A block of help text that breaks onto a new line.</span>
                        </div>
                      </div>
                      <label class="col-sm-1 label-on-left">Phone</label>
                      <div class="col-sm-3">
                        <div class="form-group label-floating is-empty">
                          <label class="control-label"></label>
                          <input type="text" class="form-control" v-model="contract.phone">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Address</label>
                        <div class="col-sm-5">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" class="form-control" v-model="contract.address">
                            </div>
                        </div>
                        <label class="col-sm-1 label-on-left">Town</label>
                        <div class="col-sm-3">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" class="form-control" v-model="contract.town">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Client</label>
                        <div class="col-sm-3">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" v-model="contract.client" class="form-control">
                            </div>
                        </div>
                        <label class="col-sm-1 label-on-left">Group</label>
                        <div class="col-sm-2">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" v-model="contract.group" class="form-control">
                            </div>
                        </div>
                        <label class="col-sm-1 label-on-left">Label</label>
                        <div class="col-sm-2">
                            <div class="form-group label-floating is-empty">
                                <label class="control-label"></label>
                                <input type="text" v-model="contract.label" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-sm-2 label-on-left">Static control</label>
                        <div class="col-sm-10">
                            <div class="form-group">
                                <p class="form-control-static">hello@creative-tim.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-md-5 pricing-contract">
                            <h3 class="title text-center">Pricing</h3>
                            <div class="row">
                        <div class="col-sm-8">
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
                          <button class="btn btn-info">Add Plan</button>
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
                        <div class="row">
                          <label class="col-sm-2">Total:</label>
                          <span>4,500,000</span>
                        </div>
                        <div class="row">
                          <label class="col-sm-2">Deposit:</label>
                          <span>500,000</span>
                        </div>
                        <div class="row">
                          <label class="col-sm-2">Remain:</label>
                          <span>4,000,000</span>
                        </div>
                      </div>
                    </div>
                      </div>
                        <div class="col-md-7">
                            <h3 class="title text-center">Assignment for Date Contract</h3>
                            <br />
                            <div class="nav-center">
                                <ul class="nav nav-pills nav-pills-warning nav-pills-icons" role="tablist">
                                    <li class="nav-item" :class="{'active': index === 0}" v-for="(item, index) of contract.contract_dates" :key="index">
                                      <a :href="`#date${item.id}`" role="tab" data-toggle="tab">
                                        <i class="material-icons">info</i> {{item.taken_date | dateTimeFormat}}
                                      </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane" :class="{'active': ind === 0}" v-for="(item, ind) of contract.contract_dates" :key="ind" :id="`date${item.id}`">
                                  <div class="card">
                                    <div class="card-header">
                                      <h4 class="card-title">Add Photographer For {{item.taken_date}}</h4>
                                      <p class="category">
                                        Add and remove
                                      </p>
                                    </div>
                                    <div class="card-content">
                                      <div class="row">
                                        <div class="alert alert-info col-lg-3 col-md-3 col-sm-3" v-if="photo.contract_date_id == item.id" v-for="(photo, index) of persons" :key="index">
                                          <button type="button" @click="check(photo.id)" class="close">
                                            <i class="material-icons">close</i>
                                          </button>
                                          <span><b>{{photo.name}}</b>- {{role.filter(x=> x.id == photo.role)[0].role}}</span>
                                          <p><b>{{missions.filter(x=> x.id == photo.mission)[0].mission}}</b></p>
                                        </div>
                                      </div> 
                                      <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-2">
                                          <select v-model="tempPerson.name" class="selectpicker" data-style="btn btn-primary btn-round" title="Single Select" data-size="7">
                                            <option value="null" disabled selected>Choose photogapher</option>
                                            <option v-for="(photo, index) of photographers" :key="index" :value="photo.id">{{photo.name}}</option>
                                          </select>
                                        </div>
                                        <div class="col-lg-3 col-md-4 col-sm-2">
                                          <select v-model="tempPerson.role"  class="selectpicker" data-style="btn btn-primary btn-round" title="Single Select" data-size="7">
                                            <option disabled>Role</option>
                                            <option value="0" selected >{{role[0].role}}</option>
                                            <option v-for="(role, index) of role.slice(1,role.length)" :key="index" :value="role.id">{{role.role}}</option>
                                          </select>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-2">
                                          <select v-model="tempPerson.mission" class="selectpicker" data-style="btn btn-primary btn-round" title="Single Select" data-size="7">
                                            <option disabled >Mission</option>
                                            <option value="0" selected >{{missions[0].mission}}</option>
                                            <option :value="miss.id" v-for="(miss, index) of missions.slice(1,missions.length)" :key="index">{{miss.mission}}</option>
                                          </select>
                                        </div>
                                        <div class="col-md-2 col-sm-2">
                                          <button class="btn btn-reddit" @click="addPerson(item.id)">
                                            <i class="fa fa-reddit"></i> Add
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-2"></div>
                      <div class="col-lg-8 mx-auto">
                        <button class="col-md-12 btn btn-tumblr" @click="updateContractDate()">
                          <i class="fa fa-tumblr-square"></i> Update
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'AssignmentId',
  data() {
    return {
      contract: null,
      photographers: null,
      tempPerson: {
        role: 0,
        mission: 0,
        name: null
      },
      persons: [],
      dates: [],
      role:[
        {id: 0, role: 'Support'},
        {id: 1, role: 'Leader'}
      ],
      missions: [
        {id: 0, mission: 'Photographer'},
        {id: 1, mission: 'Camera Man'},
        {id: 2, mission: 'Intern'},
        {id: 3, mission: 'Decor'},
        {id: 4, mission: 'MC'}
      ]
    }
  },
  mounted () {
    this.$http.get(`contracts/${this.$route.params.id}`)
    .then(response => {
      this.contract = response.body.contract
      this.dates = this.contract.contract_dates
    })
    .catch(function (e) {
      if (e.status === 401) {
      }
    })

    this.$http.get('users')
    .then(response => {
      this.photographers = response.body.users
    })
    .catch(function (e) {
      if (e.status === 401) {
      }
    })
  },
  updated () {
    if($('.selectpicker').length != 0) {
      $('.selectpicker').selectpicker()
    }
  },
  methods: {
    check (value) {
      this.persons = this.persons.filter(x=> x.user_id !== value)
      console.log(this.persons)
    },
    addPerson (val) {
      let temp1 = {user_id: '', name: '', role:'', mission: '', contract_date_id: ''}
      let obj = this.photographers.filter(x => x.id == this.tempPerson.name)[0]
      temp1.user_id = obj.id
      temp1.name = obj.name
      temp1.role = this.tempPerson.role
      temp1.mission = this.tempPerson.mission
      temp1.contract_date_id = val
      this.persons.push(temp1)
    },
    updateContractDate() {
      let payload = this.persons.length > 0 ? { contract: this.contract, assign: this.persons } : { contract: this.contract }
      this.$http.put(`contract_dates/${this.contract.id}`, payload)
      .then(response => {
       console.log(response)
      })
      .catch(function (e) {
        if (e.status === 401) {
        }
      })
    }
  }
}
</script>
