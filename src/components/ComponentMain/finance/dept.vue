<template>
  <div class="dept">
    <div class="col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header card-header-text" data-background-color="orange">
                <h4 class="card-title">Contracts Money</h4>
                <p class="category">See the contract money status</p>
            </div>
            <div class="card-content table-responsive">
                <table class="table table-hover">
                    <thead class="text-warning">
                        <th>ID</th>
                        <th>Contract</th>
                        <th>Person</th>
                        <th>Money</th>
                        <th>Debit</th>
                        <th>Remain</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>12/12 THPT PHAN CHAU TRINH</td>
                            <td>NGUYEN THI THAO</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>1000</td>
                            <td>Giao anh</td>
                            <td><button class="btn btn-danger btn-xs">No</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>12/1 THPT PHAN CHAU TRINH</td>
                            <td>NGUYEN THI PHUONG</td>
                            <td>3000</td>
                            <td>2000</td>
                            <td>1000</td>
                            <td>Giao anh</td>
                            <td><button class="btn btn-success btn-xs">YES</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Dept',
}
</script>
