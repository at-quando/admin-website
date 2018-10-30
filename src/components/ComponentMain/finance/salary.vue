<template>
  <div class="salary">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
                <div class="card-header" data-background-color="orange">
                    <i class="material-icons">weekend</i>
                </div>
                <div class="card-content">
                    <p class="category">Unpaid Money</p>
                    <h3 class="card-title">VND 184</h3>
                </div>
                <div class="card-footer">
                    <div class="stats">
                        <i class="material-icons">date_range</i>Your money in this month
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-content table-responsive">
        <table class="table table-hover">
            <thead>
                <th>ID</th>
                <th>Nội dung Show</th>
                <th>Địa điểm chụp</th>
                <th>Thời gian</th>
                <th>Tình trạng</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Dakota Rice</td>
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
                <tr>
                    <td>3</td>
                    <td>Sage Rodriguez</td>
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
                <tr>
                    <td>5</td>
                    <td>Doris Greene</td>
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
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import * as types from '../../../store/types'

export default {
  name: 'Salary',
  computed: {
    ...mapGetters({
      user: types.USER
    })
  }
}
</script>
