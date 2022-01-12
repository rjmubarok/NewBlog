<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Post</h3>
            <router-link to="/posts" class="btn btn-success btn-sm float-right"
              >Posts
            </router-link>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form class="form-horizontal" @submit.prevent="addPost">
              <div class="card-body">
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"> Title</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder=" Title"
                      v-model="form.title"
                      name="title"
                    />
                    <div
                      v-if="form.errors.has('title')"
                      v-html="form.errors.get('title')"
                    />
                  </div>
                </div>
               
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Content</label
                  >
                  <div class="col-sm-10">
                    <textarea
                      type="text"
                      class="form-control"
                      id="content"
                      placeholder="Content"
                      v-model="form.content"
                      name="content"
                    />
                    <div
                      v-if="form.errors.has('content')"
                      v-html="form.errors.get('content')"
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
      content: null,
      img: null,
      user_id: null,
      category_id: null,
      status: 1,
    }),
  }),
  methods: {
    addPost() {
      let test = this;
      this.form.post("/store-post").then(function (response) {
      
        toastr.success("Post Added Successfully");
        test.form.title = null;
        test.form.content = null;
        test.form.img = null;
        test.form.user_id = null;
        test.form.category_id = null;
        test.form.status = null;
      });
    },
  },
  mounted() {
    this.addPost();
  },
};
</script>
