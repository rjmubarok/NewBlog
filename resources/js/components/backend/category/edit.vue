<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Update Category</h3>
            <router-link to="/categories" class="btn btn-success btn-sm float-right">
              Categories</router-link
            >
            <!-- {{ this.$route.params.id }} -->
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form class="form-horizontal" @submit.prevent="updatecategory()" method="post">
              <div class="card-body">
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Category Name</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Category Name"
                      id="name"
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
              <div class="card-footer">
                <button type="submit" :disabled="form.busy" class="btn btn-info">
                  Update Category
                </button>
                <button type="reset" class="btn btn-default float-right">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "vform";
import axios from "axios";

export default {
  name: "edit",
  data() {
    return {
      form: new Form({
        name: "",
        status:''
      }),
    };
  },

  methods: {
    updatecategory: function () {
      let test = this;
         this.form.post(`/update-category/${this.$route.params.id}`).then((Response) => {
           toastr.success("Category Added Successfully");
           test.$router.push('/categories');

    });



    },
    getsingelcategory:function(){
     axios.get(`/edit-category/${this.$route.params.id}`).then((Response) => {
      this.form.fill(Response.data.category);
    });
    }
  },
  mounted() {
    this.getsingelcategory();
    // this.updatecategory();
  },
};
</script>
