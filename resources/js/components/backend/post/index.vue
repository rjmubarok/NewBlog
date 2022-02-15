<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Post</h3>
            <router-link
              to="/add-post"
              class="btn btn-success btn-sm float-right"
            >
              Add Post</router-link
            >
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <input
                      :disabled="emtyData()"
                      type="checkbox"
                      @click="selectAll()"
                      v-model="selectedAll"
                    />
                  </th>
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
                  <td>
                    <input
                      type="checkbox"
                      :value="post.id"
                      v-model="selected"
                    />
                  </td>
                  <td>{{ ++index }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.content | subString(25) }}.........</td>
                  <td><img :src="post.img" alt="" width="60px" /></td>
                  <td>{{ post.category.name }}</td>
                  <td>{{ post.user.name }}</td>
                  <td>
                    <span class="badge" :class="statuscolor(post.status)">
                      {{ statusname(post.status) }}</span
                    >
                  </td>
                  <td>
                    <router-link
                      :to="`/edit-post/${post.id}`"
                      class="btn btn-sm btn-info"
                    >
                      Edit</router-link
                    >
                    <a
                      class="btn btn-sm btn-danger"
                      @click.prevent="removepost(post.id)"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                <tr v-if="!emtyData()">
                  <td colspan="2">
                    <div class="dropdown">
                      <button
                        class="btn btn-info dropdown-toggle"
                        :disabled="!Isselected"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div class="dropdown-menu">
                        <button
                          @click="removeitems(selected)"
                          type="button"
                          class="dropdown-item btn btn-sm btn-danger"
                        >
                          Remove
                        </button>
                        <button
                          @click="ChangeStatus(selected, 1)"
                          type="button"
                          class="dropdown-item btn btn-sm btn-danger"
                        >
                          Active
                        </button>
                        <button
                          @click="ChangeStatus(selected, 0)"
                          type="button"
                          class="dropdown-item btn btn-sm btn-danger"
                        >
                          Inactive
                        </button>
                      </div>
                    </div>
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
  data() {
    return {
      selected: [],
      selectedAll: false,
      Isselected: false,
    };
  },
  mounted() {
    return this.$store.dispatch("getPost");
  },
  watch: {
    selected: function (selected) {
      this.Isselected = selected.length > 0;
      this.selectedAll = selected.length === this.getpostall.length;
    },
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
    selectAll: function () {
      if (event.target.checked == false) {
        this.selected = [];
      } else {
        this.getpostall.forEach((post) => {
          if (this.selected.indexOf(post.id)) {
            this.selected.push(post.id);
          }
        });
      }
    },
    removeitems: function (selected) {
      this.confirm(() => {
        axios
          .post("/post/remove-items", { ids: selected })
          .then((response) => {
            Swal.fire(
              "Deleted!",
              response.data.total + "Category has been deleted Successfully !.",
              "success"
            );
            this.selected = [];
            this.selectAll = false;
            this.Isselected = false;

            this.$store.dispatch("getPost");
          })
          .catch((error) => {});
      });
    },
    ChangeStatus: function (selected, status) {
      let msg = status === 1 ? "Active" : "Inactive";
      axios
        .post("/post/Change-Status", {
          ids: selected,
          status: status,
        })
        .then((response) => {
          toastr.success(
            response.data.total + "  Category has been  Successfully " + msg
          );
          this.$store.dispatch("getPost");
          this.selected = [];
          this.selectAll = false;
        });
    },
  },
};
</script>
