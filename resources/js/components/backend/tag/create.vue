<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Tag</h3>
            <router-link to="/tags" class="btn btn-success btn-sm float-right">
              Tags</router-link
            >
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label"
                  >Category Name</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Tag Name"
                    v-model="form.name"
                    name="name"
                  />
                  <div v-if="form.errors.has('name')" v-html="form.errors.get('name')" />
                </div>
              </div>
              
            <button type="submit" :disabled="form.busy" class="btn btn-info">
              Save Category
            </button>
          
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
  name:login,
  data: () => ({
    form: new Form({
      name: null,
      status: "1",
    }),
  }),
  methods: {
    login(e) {
      console.log("login colled");
      e.preventDefault();
    },
  },

  mounted() {
    this.login();
  },
};
</script>
