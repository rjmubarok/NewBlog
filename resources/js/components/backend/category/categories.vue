<template>
  <div>
    <div class="row pt-3">
      <div class="col-md-8 offset-2">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Category</h3>
            <router-link to="/add-category" class="btn btn-success btn-sm float-right">
              Add Category</router-link
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
                  <th>Name</th>
                  <th>Status</th>
                  <th>Created-At</th>
                  <th width="130px">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="category.id" v-for="(category, index) in GetCategory">
                  <td>
                    <input type="checkbox" :value="category.id" v-model="selected" />
                  </td>
                  <td>{{ ++index }}</td>
                  <td>{{ category.name }}</td>
                  <td>
                    <span class="badge" :class="statuscolor(category.status)">
                      {{ statusname(category.status) }}</span
                    >
                  </td>
                  <td>{{ category.created_at | time }}</td>
                  <td>
                    <router-link
                      :to="`/edit-category/${category.id}`"
                      class="btn btn-sm btn-info"
                    >
                      Edit</router-link
                    >

                    <button
                      type="submit"
                      class="btn btn-sm btn-danger"
                      @click.prevent="remove(category.id)"
                    >
                      Delete
                    </button>
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
  name: "categories",
  data() {
    return {
      selected: [],
      selectedAll: false,
      Isselected: false,
    };
  },
  mounted() {
    this.$store.dispatch("getcategoriess");
  },
  watch: {
    selected: function (selected) {
      this.Isselected = selected.length > 0;
      this.selectedAll = selected.length === this.GetCategory.length;
    },
  },
  computed: {
    GetCategory() {
      return this.$store.getters.getCategories;
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
    remove: function (id) {
      this.confirm(() => {
        
          axios
            .get("remove-category/" + id)
            .then((response) => {
              this.$store.dispatch("getcategoriess");

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            })
            .catch((error) => {});
        
      });
    },

    // show emry data
    emtyData() {
      return this.GetCategory.length < 1;
    },
    selectAll: function () {
      if (event.target.checked == false) {
        this.selected = [];
      } else {
        this.GetCategory.forEach((category) => {
          if (this.selected.indexOf(category.id)) {
            this.selected.push(category.id);
          }
        });
      }
    },
    removeitems: function (selected) {
      this.confirm(() => {
        axios
          .post("/categories/remove-items", { ids: selected })
          .then((response) => {
            Swal.fire(
              "Deleted!",
              response.data.total + "Category has been deleted Successfully !.",
              "success"
            );
            this.selected = [];
            this.selectAll = false;
            this.Isselected = false;

            this.$store.dispatch("getcategoriess");
          })
          .catch((error) => {});
      });
    },
    ChangeStatus: function (selected, status) {
      let msg = status === 1 ? "Active" : "Inactive";
      axios
        .post("/categories/Change-Status-Active", {
          ids: selected,
          status: status,
        })
        .then((response) => {
          toastr.success(
            response.data.total + "  Category has been  Successfully " + msg
          );
          this.$store.dispatch("getcategoriess");
          this.selected = [];
          this.selectAll = false;
        });
    },
  },
};
</script>
