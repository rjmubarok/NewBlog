<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Update Post</h3>
            <router-link to="/posts" class="btn btn-success btn-sm float-right">
              Post</router-link
            >
            <!-- {{ this.$route.params.id }} -->
          </div>
          <!-- /.card-header -->
           <div class="card-body">
            <form role="form"
              class="form-horizontal"
              @submit.prevent="updatepost()"
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
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button type="submit" :disabled="form.busy" class="btn btn-info">
                  Update Post
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
import { VueEditor } from "vue2-editor";
import Form from "vform";
import axios from "axios";

export default {
    components: {
    VueEditor,
  },
  name: "edit",
  data() {
    return {
      form: new Form({
       title: null,
      content: null,
      img: null,
      user_id: null,
      category_id: "",
      status: 1,
      }),
    };
  },

  methods: {
    updatepost: function () {
      let test = this;
         this.form.post(`/update-post/${this.$route.params.id}`).then((Response) => {
           toastr.success("Post Update Successfully");
           test.$router.push('/posts');

    });



    },
    getPost:function(){
     axios.get(`/edit-post/${this.$route.params.id}`).then((Response) => {
      this.form.fill(Response.data.post);
    });
    }
  },

  mounted() {
    this.$store.dispatch("getActiveCategories");
    this.getPost();

  },
  computed: {
    GetCategory() {
      return this.$store.getters.getCategories;
    },
  },

};
</script>
