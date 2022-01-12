<template>
  <div>
    <div class="row pt-3"> 
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Post</h3>
            <router-link to="/add-post" class="btn btn-success btn-sm float-right">
              Add Post</router-link
            >
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Created By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post, index) in getpostall" :key="post.id">
                  <td>{{ ++index }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.content | subString(25) }}.........</td>
                  <td><img :src="post.img" alt="" width="60px"></td>
                  <td>{{ post.category.name }}</td>
                  <td>{{ post.user.name }}</td>
                  <td>
                    <span class="badge" :class="statuscolor(post.status)">
                      {{ statusname(post.status) }}</span
                    >
                  </td>
                  <td>
                  <router-link :to="`/edit-post/${post.id}`" class="btn btn-sm btn-info"> Edit</router-link>
                    <a
                      class="btn btn-sm btn-danger"
                      @click.prevent="removepost(post.id)"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                  <tr v-if="emtyData()">
                  <td colspan="9">
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
  name: "post",
  mounted() {
    return this.$store.dispatch("getPost");
  },
  computed: {
    getpostall() {
      return this.$store.getters.GetPost;
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
    removepost(id) {
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
          axios.get("post-remove/" + id).then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            return this.$store.dispatch("getPost");
          });
        }
      });
    },
     emtyData() {
      return this.getpostall.length < 1;
    },
  },
};
</script>
