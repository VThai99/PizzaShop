<template>
  <div class="c-wrapper c-fixed-components">
    <div class="c-body">
      <main class="c-main">
        <div class="container-fluid">
          <div class="fade-in">
            <button
              type="button"
              class="btn btnthem"
              data-toggle="modal"
              data-target="#modalthem"
              @click="showmodalthem"
            >
              Create New
            </button>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Group</th>
                  <th scope="col">Detail</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in result" v-bind:key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.group_name }}</td>
                  <td>{{ item.detail }}</td>
                  <td>
                    <span
                      ><button
                        type="button"
                        class="btn btnsua"
                        data-toggle="modal"
                        data-target="#modalsua"
                        @click="showmodalsua(item.id)"
                      >
                        Update
                      </button></span
                    >
                    <span
                      ><button
                        type="button"
                        class="btn btnxoa"
                        @click="Xoa(item.id)"
                      >
                        Delete
                      </button></span
                    >
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Modal sua -->
            <div
              class="modal fade"
              id="modalsua"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div>
                      <span>Name</span>
                      <span><input type="text" v-model="sua.name" /></span>
                    </div>
                    <hr />
                    <div>
                      <span>Detail</span>
                      <span><input type="text" v-model="sua.detail" /></span>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      @click="Sua"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal them -->
            <div
              class="modal fade"
              id="modalthem"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div>
                      <span>Name</span>
                      <span><input type="text" v-model="them.name" /></span>
                    </div>
                    <hr />
                    <div>
                      <span>Detail</span>
                      <span><input type="text" v-model="them.detail" /></span>
                    </div>
                    <hr />
                    <div>
                      <span>Group</span>
                      <span
                        ><select v-model="them.id_group">
                          <option
                            v-for="item in select"  v-bind:value="item.id" v-bind:key="item.id"
                          >
                            {{ item.name }}
                          </option>
                        </select></span
                      >
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      data-dismiss="modal"
                      class="btn btn-primary"
                      @click="Them"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      them: {
        name: "",
        detail: "",
        id_group: "",
      },
      sua: {
        id: "",
        name: "",
        detail: "",
      },
      select: [],
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8000/api/auth/showproduct")
      .then((response) => {
        this.result = response.data.data;
      });
  },

  methods: {
    showmodalthem() {
      this.$axios
        .get("http://localhost:8000/api/auth/showcategory")
        .then((res) => {
          this.select = res.data.data;
          console.log(res.data.data);
        });
    },
    Sua() {
      let data = {
        id: this.sua.id,
        name: this.sua.name,
        detail: this.sua.detail,
      };
      this.$axios
        .post("http://localhost:8000/api/auth/updateProduct", data)
        .then(() => {
          this.sua.name = "";
          this.sua.detail = "";
          this.sua.id = "";
          alert("Done");
          this.reload();
        });
    },
    Them() {
      let data = {
        name: this.them.name,
        detail: this.them.detail,
        group_id: this.them.id_group,
      };
      this.$axios
        .post("http://localhost:8000/api/auth/createproduct", data)
        .then(() => {
          this.them.name = "";
          this.them.detail = "";
          this.reload();
        });
    },
    showmodalsua(idcansua) {
      let datasua = {
        id: idcansua,
      };
      this.$axios
        .post("http://localhost:8000/api/auth/findproduct", datasua)
        .then((res) => {
          this.sua.name = res.data.data.name;
          this.sua.detail = res.data.data.detail;
          this.sua.id = res.data.data.id;
        });
    },
    Xoa(idxoa) {
      let data = {
        id: idxoa,
      };
      if (confirm("Are you sure?") == true) {
        this.$axios
          .post("http://localhost:8000/api/auth/deleteProduct", data)
          .then(() => {
            this.reload();
          });
      }
    },
    reload() {
      this.$axios
        .get("http://localhost:8000/api/auth/showproduct")
        .then((response) => {
          this.result = response.data.data;
        });
    },
    getgroup(idgroup) {
      this.$axios
        .get("http://localhost:8000/api/auth/group/" + idgroup + "")
        .then((res) => {
          console.log(res.data[0].name);
        });
    },
  },
};
</script>

<style>
/* .btnthem {
  background: linear-gradient(to right, #b95ab9 0%, #0404d6 100%);
  color: white !important;
  border: none !important;
  border-radius: 5px;
  float: left;
  margin: 10px 0px;
  transition: 3s;
}
.btnthem:hover {
  background: linear-gradient(to left, #b95ab9 0%, #d60404 100%);
} */
.btnthem {
  position: relative;
  color: white !important;
  border: none !important;
  float: left;
  margin: 10px 0px;
  background-image: linear-gradient(
    to right,
    hsl(211, 100%, 50%),
    hsl(179, 100%, 30%)
  );
  z-index: 1;
}

.btnthem::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    hsl(344, 100%, 50%),
    hsl(31, 100%, 40%)
  );
  z-index: -1;
  transition: opacity 1s linear;
  opacity: 0;
}

.btnthem:hover::before {
  opacity: 1;
}

.btnsua {
  background-color: transparent !important;
  margin: 0px 2%;
  color: blue !important;
  border: blue solid 0.5px !important;
  border-radius: 5px;
  transition: 1.5s !important;
}
.btnsua:hover {
  background-color: blue !important;
  color: white !important;
}
.btnxoa {
  background: transparent !important;
  color: red !important;
  border: red solid 0.5px !important;
  border-radius: 5px;
  transition: 1.5s !important;
}
.btnxoa:hover {
  background-color: red !important;
  color: white !important;
}
</style>