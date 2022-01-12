<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Employees</h3>
            <router-link to="/add-emlpoyee" class="btn btn-success btn-sm float-right">
              Add Employee</router-link
            >
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Section</th>
                  <th>Depertment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(employee, index) in getAllEmployee" :key="employee.id">
                  <td>{{ ++index }}</td>
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.email }}</td>
                  <td>{{ employee.section }}</td>
                  <td>{{ employee.department }}</td>
                  <td>
                    <span class="badge" :class="statuscolor(employee.status)">
                      {{ statusname(employee.status) }}</span
                    >
                  </td>
                  <td>
                  <router-link :to="`/edit-emlpoyee/${employee.id}`" class="btn btn-sm btn-info"> Edit</router-link>
                    <a
                      class="btn btn-sm btn-danger"
                      @click.prevent="removeEmployee(employee.id)"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                  <tr v-if="emtyData()">
                  <td colspan="7">
                    <h4 class="text-center text-danger">Data Not Found</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
          <div class="card-footer clearfix">
            <ul class="pagination pagination-sm m-0 float-right">
              <li class="page-item"><a class="page-link" href="#">«</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">»</a></li>
            </ul>
          </div>
        </div>
        <!-- /.card -->

        <!-- /.card -->
      </div>
      <!-- /.col -->

      <!-- /.col -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "employee",
  mounted() {
    return this.$store.dispatch("getEmployees");
  },
  computed: {
    getAllEmployee() {
      return this.$store.getters.getEmployee;
    },
  },
  methods: {
    statusname(status) {
      let data = {
        0: "Inactive",
        1: "active",
      };
      return data[status];
    },
    statuscolor(status) {
      let data = {
        0: "bg-danger",
        1: "bg-success",
      };
      return data[status];
    },
    removeEmployee(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get("employee-remove/" + id).then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            return this.$store.dispatch("getEmployees");
          });
        }
      });
    },
     emtyData() {
      return this.getAllEmployee.length < 1;
    },
  },
};
</script>
