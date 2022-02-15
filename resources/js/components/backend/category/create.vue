<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Category</h3>
            <router-link to="/categories" class="btn btn-success btn-sm float-right">
              Categories</router-link
            >
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form class="form-horizontal" @submit.prevent="addCategory()" method="post">
              <div class="card-body">
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Category Name</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Category Name"
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
                <button type="submit" :disabled="form.busy"  class="btn btn-info">
                  Save Category
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
      name: null,
      status: 1,
    }),
  }),
  methods: {
    addCategory: function () {
      let test = this;
      this.form.post("/store-category").then(function (data) {
        Toast.fire({
          icon: "success",
          title: "Category Added Successfully",
        });
        toastr.success("Category Added Successfully");
        test.form.name = null;
        test.form.status = null;

          test.$router.push('/categories');
      });
    },
  },
  mounted() {
    // this.addCategory();
  },
};
</script>
