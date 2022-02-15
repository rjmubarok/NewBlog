<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-10 offset-1">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Post</h3>
            <router-link to="/posts" class="btn btn-success btn-sm float-right"
              >Posts
            </router-link>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <form role="form"
              class="form-horizontal"
              @submit.prevent="addPost()"
              enctype="multipart/form-data"
            >
              <div class="card-body">
                <div class="form-group row">
                  <label for="category_id" class="col-sm-2 col-form-label">
                    Category</label
                  >
                  <div class="col-sm-10">
                    <select
                      name="category_id"
                      id="category_id"
                      class="form-control"
                      v-model="form.category_id"
                    >
                      <option value="" style="display: none" selected>
                        Select Category
                      </option>
                      <option
                        :value="category.id"
                        v-for="category in GetCategory"
                        :key="category.id"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                    <div
                      v-if="form.errors.has('category_id')"
                      v-html="form.errors.get('category_id')"
                    />
                  </div>
                </div>
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
                      :class="{ 'is-invalid': form.errors.has('title') }"
                    />
                    <div
                      v-if="form.errors.has('title')"
                      v-html="form.errors.get('title')"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="content" class="col-sm-2 col-form-label">Content</label>
                  <div class="col-sm-10">
                    <vue-editor v-model="form.content" ></vue-editor>
                    <div
                      v-if="form.errors.has('content')"
                      v-html="form.errors.get('content')"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="img" class="col-sm-2 col-form-label">Tambnail</label>
                  <div class="col-sm-10">
                    <input
                      type="file"
                      name="img"
                      :v-model="form.img"
                      id="img"
                      @change="loadimage($event)"
                    />
                    <img :src="form.img" alt="" height="70px" />
                    <div v-if="form.errors.has('img')" v-html="form.errors.get('img')" />
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
                    <span :class="{ 'is-invalid': form.errors.has('status') }"></span>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" :disabled="form.busy" class="btn btn-info">
                  Save
                </button>

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
import { VueEditor } from "vue2-editor";
import Form from "vform";
export default {
  components: {
    VueEditor,
  },
  data: () => ({
    form: new Form({
      title: null,
      content: null,
      img: null,
      user_id: null,
      category_id: "",
      status: 1,
    }),
  }),
  mounted() {
    this.$store.dispatch("getActiveCategories");
    // this.addPost();
  },
  computed: {
    GetCategory() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    addPost() {
      let test = this;
      test.form.post("/add-posts").then(
        function (response) {
          toastr.success("Category Added Successfully");
        }
      )
          .catch((err) => console.log(err))
          .finally(() => (this.loadin = false));
    },

    loadimage(e) {
      let test = this;
      let file = e.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = function (e) {
        test.form.img = e.target.result;
      };
      fileReader.readAsDataURL(file);
    },
  },

};
</script>
