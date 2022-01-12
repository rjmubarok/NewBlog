"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_category_categories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/category/categories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/category/categories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "categories",
  data: function data() {
    return {
      selected: [],
      selectedAll: false,
      Isselected: false
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("getcategoriess");
  },
  watch: {
    selected: function selected(_selected) {
      this.Isselected = _selected.length > 0;
      this.selectedAll = _selected.length === this.GetCategory.length;
    }
  },
  computed: {
    GetCategory: function GetCategory() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    statusname: function statusname(status) {
      var data = {
        0: "Inactive",
        1: "active"
      };
      return data[status];
    },
    statuscolor: function statuscolor(status) {
      var data = {
        0: "bg-danger",
        1: "bg-success"
      };
      return data[status];
    },
    remove: function remove(id) {
      var _this = this;

      this.confirm(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get("remove-category/" + id).then(function (response) {
          _this.$store.dispatch("getcategoriess");

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        })["catch"](function (error) {});
      });
    },
    // show emry data
    emtyData: function emtyData() {
      return this.GetCategory.length < 1;
    },
    selectAll: function selectAll() {
      var _this2 = this;

      if (event.target.checked == false) {
        this.selected = [];
      } else {
        this.GetCategory.forEach(function (category) {
          if (_this2.selected.indexOf(category.id)) {
            _this2.selected.push(category.id);
          }
        });
      }
    },
    removeitems: function removeitems(selected) {
      var _this3 = this;

      this.confirm(function () {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("/categories/remove-items", {
          ids: selected
        }).then(function (response) {
          Swal.fire("Deleted!", response.data.total + "Category has been deleted Successfully !.", "success");
          _this3.selected = [];
          _this3.selectAll = false;
          _this3.Isselected = false;

          _this3.$store.dispatch("getcategoriess");
        })["catch"](function (error) {});
      });
    },
    ChangeStatus: function ChangeStatus(selected, status) {
      var _this4 = this;

      var msg = status === 1 ? "Active" : "Inactive";
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/categories/Change-Status-Active", {
        ids: selected,
        status: status
      }).then(function (response) {
        toastr.success(response.data.total + "  Category has been  Successfully " + msg);

        _this4.$store.dispatch("getcategoriess");

        _this4.selected = [];
        _this4.selectAll = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/backend/category/categories.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/backend/category/categories.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _categories_vue_vue_type_template_id_3fb66052___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.vue?vue&type=template&id=3fb66052& */ "./resources/js/components/backend/category/categories.vue?vue&type=template&id=3fb66052&");
/* harmony import */ var _categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/category/categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categories_vue_vue_type_template_id_3fb66052___WEBPACK_IMPORTED_MODULE_0__.render,
  _categories_vue_vue_type_template_id_3fb66052___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/category/categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/category/categories.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backend/category/categories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/category/categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/category/categories.vue?vue&type=template&id=3fb66052&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/backend/category/categories.vue?vue&type=template&id=3fb66052& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_3fb66052___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_3fb66052___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_categories_vue_vue_type_template_id_3fb66052___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./categories.vue?vue&type=template&id=3fb66052& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/category/categories.vue?vue&type=template&id=3fb66052&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/category/categories.vue?vue&type=template&id=3fb66052&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/category/categories.vue?vue&type=template&id=3fb66052& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row pt-3" }, [
      _c("div", { staticClass: "col-md-8 offset-2" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header" },
            [
              _c("h3", { staticClass: "card-title" }, [_vm._v("Category")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success btn-sm float-right",
                  attrs: { to: "/add-category" },
                },
                [_vm._v("\n            Add Category")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedAll,
                          expression: "selectedAll",
                        },
                      ],
                      attrs: { disabled: _vm.emtyData(), type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.selectedAll)
                          ? _vm._i(_vm.selectedAll, null) > -1
                          : _vm.selectedAll,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.selectAll()
                        },
                        change: function ($event) {
                          var $$a = _vm.selectedAll,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.selectedAll = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.selectedAll = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.selectedAll = $$c
                          }
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Created-At")]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "130px" } }, [_vm._v("Action")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.GetCategory, function (category, index) {
                    return _c("tr", { key: category.id }, [
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected,
                              expression: "selected",
                            },
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: category.id,
                            checked: Array.isArray(_vm.selected)
                              ? _vm._i(_vm.selected, category.id) > -1
                              : _vm.selected,
                          },
                          on: {
                            change: function ($event) {
                              var $$a = _vm.selected,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = category.id,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 && (_vm.selected = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.selected = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.selected = $$c
                              }
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(++index))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(category.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass: "badge",
                            class: _vm.statuscolor(category.status),
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.statusname(category.status))
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("time")(category.created_at))),
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-sm btn-info",
                              attrs: { to: "/edit-category/" + category.id },
                            },
                            [_vm._v("\n                    Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-danger",
                              attrs: { type: "submit" },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.remove(category.id)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                    Delete\n                  "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ])
                  }),
                  _vm._v(" "),
                  !_vm.emtyData()
                    ? _c("tr", [
                        _c("td", { attrs: { colspan: "2" } }, [
                          _c("div", { staticClass: "dropdown" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-info dropdown-toggle",
                                attrs: {
                                  disabled: !_vm.Isselected,
                                  type: "button",
                                  id: "dropdownMenuButton",
                                  "data-bs-toggle": "dropdown",
                                  "aria-expanded": "false",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                      Action\n                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "dropdown-menu" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "dropdown-item btn btn-sm btn-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeitems(_vm.selected)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                        Remove\n                      "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "dropdown-item btn btn-sm btn-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.ChangeStatus(_vm.selected, 1)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                        Active\n                      "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "dropdown-item btn btn-sm btn-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.ChangeStatus(_vm.selected, 0)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                        Inactive\n                      "
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.emtyData() ? _c("tr", [_vm._m(0)]) : _vm._e(),
                ],
                2
              ),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(1),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "7" } }, [
      _c("h4", { staticClass: "text-center text-danger" }, [
        _vm._v("Data Not Found"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer clearfix" }, [
      _c("ul", { staticClass: "pagination pagination-sm m-0 float-right" }, [
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("«"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("1"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("2"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("3"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v("»"),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);