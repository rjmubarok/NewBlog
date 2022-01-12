<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Employee</h3>
            <router-link to="/employees" class="btn btn-success btn-sm float-right"
              >Employeeies
            </router-link>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form class="form-horizontal" @submit.prevent="addEmployee">
              <div class="card-body">
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"> Name</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder=" Name"
                      v-model="form.name"
                      name="name"
                    />
                    <div
                      v-if="form.errors.has('name')"
                      v-html="form.errors.get('name')"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"> Email</label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="name"
                      placeholder="Email"
                      v-model="form.email"
                      name="email"
                    />
                    <div
                      v-if="form.errors.has('name')"
                      v-html="form.errors.get('name')"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Depertment</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="department"
                      placeholder="Department"
                      v-model="form.department"
                      name="department"
                    />
                    <div
                      v-if="form.errors.has('department')"
                      v-html="form.errors.get('department')"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Section</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="section"
                      placeholder="section"
                      v-model="form.section"
                      name="section"
                    />
                    <div
                      v-if="form.errors.has('section')"
                      v-html="form.errors.get('section')"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="status" class="col-sm-3 col-form-label">Status</label>
                  <div class="col-sm-9">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="1"
                      id="active"
                      v-model="form.status"
                    />
                    <label class="form-check-label" for="active"> Active </label>
                    <input
                      class="form-check-input ml-4"
                      type="radio"
                      value="0"
                      id="Inactive"
                      v-model="form.status"
                    />
                    <label class="form-check-label ml-5" for="Inactive"> Inactive </label>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" :disabled="form.busy" class="btn btn-info">
                  Save
                </button>
                <button type="reset" class="btn btn-default float-right">Cancel</button>
              </div>
              <!-- /.card-footer -->
            </form>
          </div>
          <!-- /.card-body -->
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
import Form from "vform";
export default {
  data: () => ({
    form: new Form({
      title: null,
      section: null,
      department: null,
      email: null,
      status: 1,
    }),
  }),
  methods: {
    addEmployee() {
      let test = this;
      this.form.post("/store-employee").then(function (data) {
        Toast.fire({
          icon: "success",
          title: "Category Added Successfully",
        });
        toastr.success("Employee Added Successfully");
        test.form.name = null;
        test.form.email = null;
        test.form.department = null;
        test.form.section = null;
        test.form.status = null;
      });
    },
  },
  mounted() {
    this.addEmployee();
  },
};
</script>
