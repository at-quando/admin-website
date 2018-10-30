<template>
  <div class="assignment">
    <div class="card card-plain">
      <div class="card-header card-header-icon" data-background-color="rose">
        <i class="material-icons">assignment</i>
      </div>
      <h4 class="card-title">Assignment</h4>
      <p class="category">Pick User for working</p>
      <div class="card-content table-responsive">
        <table class="table table-hover" v-if="contracts.length > 0">
          <thead>
              <th>ID</th>
              <th>Contract Name</th>
              <th>Contract Phone</th>
              <th>Contract Client - address - town</th>
              <th>Contract Group</th>
              <th>Plans - Assign</th>
              <th>Actions</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) of contracts" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.client}} - {{item.addess}} - {{item.town}}</td>
              <td>{{item.group}}</td>
              <td>
                <router-link :to="{name: 'AssignmentId', params: { id: item.id }}" class="btn btn-simple btn-warning btn-icon edit"><i class="material-icons">dvr</i></router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Assignment',
  data () {
    return {
      contracts: [],
      users: [],
      updatePlans: []
    }
  },
  mounted () {
    this.$http.get('contracts')
    .then(response => {
      this.contracts = response.body.contracts
    })
    .catch(function (e) {
      if (e.status === 401) {
        console.log(e)
      }
    })

    // this.$http.get('users')
    // .then(response => {
    //   this.users = response.body.users
    // })
    // .catch(function (e) {
    //   if (e.status === 401) {
    //     console.log(e)
    //   }
    // })
  },
  methods: {
    onChange(e, planId) {
      this.updatePlans = this.updatePlans.filter(x => x.id !== planId)
      this.updatePlans.push({contract_date_id: planId, photographer: e.target.value})
    },
    submitChange() {
      this.$http.post('contractplans', this.updatePlans)
      .then(response => {
        if (response.status = 200) {
          console.log('OK')
        }
      })
      .catch(function (e) {
        if (e.status === 401) {
          console.log(e)
        }
      })
    }
  }
}
</script>
