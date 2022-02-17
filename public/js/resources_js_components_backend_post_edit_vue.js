"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_post_edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/post/edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/post/edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__.VueEditor
  },
  name: "edit",
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["default"]({
        title: null,
        content: null,
        img: null,
        user_id: null,
        category_id: "",
        status: 1
      })
    };
  },
  methods: {
    updatepost: function updatepost() {
      var test = this;
      this.form.post("/update-post/".concat(this.$route.params.id)).then(function (Response) {
        toastr.success("Post Update Successfully");
        test.$router.push('/posts');
      });
    },
    getPost: function getPost() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("/edit-post/".concat(this.$route.params.id)).then(function (Response) {
        _this.form.fill(Response.data.post);
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("getActiveCategories");
    this.getPost();
  },
  computed: {
    GetCategory: function GetCategory() {
      return this.$store.getters.getCategories;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/backend/post/edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/backend/post/edit.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_28296aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=28296aba& */ "./resources/js/components/backend/post/edit.vue?vue&type=template&id=28296aba&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/post/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_28296aba___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_28296aba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/post/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/post/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/backend/post/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/post/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/post/edit.vue?vue&type=template&id=28296aba&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/backend/post/edit.vue?vue&type=template&id=28296aba& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_28296aba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_28296aba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_28296aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=28296aba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/post/edit.vue?vue&type=template&id=28296aba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/post/edit.vue?vue&type=template&id=28296aba&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/post/edit.vue?vue&type=template&id=28296aba& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
              _c("h3", { staticClass: "card-title" }, [_vm._v("Update Post")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success btn-sm float-right",
                  attrs: { to: "/posts" },
                },
                [_vm._v("\n            Post")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                staticClass: "form-horizontal",
                attrs: { role: "form", enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.updatepost()
                  },
                },
              },
              [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "category_id" },
                      },
                      [_vm._v("\n                  Category")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.category_id,
                              expression: "form.category_id",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { name: "category_id", id: "category_id" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "category_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              staticStyle: { display: "none" },
                              attrs: { value: "", selected: "" },
                            },
                            [
                              _vm._v(
                                "\n                      Select Category\n                    "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.GetCategory, function (category) {
                            return _c(
                              "option",
                              {
                                key: category.id,
                                domProps: { value: category.id },
                              },
                              [
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(category.name) +
                                    "\n                    "
                                ),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.form.errors.has("category_id")
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.form.errors.get("category_id")
                              ),
                            },
                          })
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "inputEmail3" },
                      },
                      [_vm._v(" Title")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.title,
                            expression: "form.title",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("title") },
                        attrs: {
                          type: "text",
                          id: "title",
                          placeholder: " Title",
                          name: "title",
                        },
                        domProps: { value: _vm.form.title },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "title", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("title")
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(_vm.form.errors.get("title")),
                            },
                          })
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "content" },
                      },
                      [_vm._v("Content")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("vue-editor", {
                          model: {
                            value: _vm.form.content,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "content", $$v)
                            },
                            expression: "form.content",
                          },
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("content")
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.form.errors.get("content")
                                ),
                              },
                            })
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "img" },
                      },
                      [_vm._v("Tambnail")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c("input", {
                        attrs: {
                          type: "file",
                          name: "img",
                          "v-model": _vm.form.img,
                          id: "img",
                        },
                        on: {
                          change: function ($event) {
                            return _vm.loadimage($event)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        attrs: { src: _vm.form.img, alt: "", height: "70px" },
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("img")
                        ? _c("div", {
                            domProps: {
                              innerHTML: _vm._s(_vm.form.errors.get("img")),
                            },
                          })
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-3 col-form-label",
                        attrs: { for: "status" },
                      },
                      [_vm._v("Status")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-9" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.status,
                            expression: "form.status",
                          },
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "radio", value: "1", id: "active" },
                        domProps: { checked: _vm._q(_vm.form.status, "1") },
                        on: {
                          change: function ($event) {
                            return _vm.$set(_vm.form, "status", "1")
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label",
                          attrs: { for: "active" },
                        },
                        [_vm._v(" Active ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.status,
                            expression: "form.status",
                          },
                        ],
                        staticClass: "form-check-input ml-4",
                        attrs: { type: "radio", value: "0", id: "Inactive" },
                        domProps: { checked: _vm._q(_vm.form.status, "0") },
                        on: {
                          change: function ($event) {
                            return _vm.$set(_vm.form, "status", "0")
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label ml-5",
                          attrs: { for: "Inactive" },
                        },
                        [_vm._v(" Inactive ")]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info",
                      attrs: { type: "submit", disabled: _vm.form.busy },
                    },
                    [_vm._v("\n                Update Post\n              ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default float-right",
                      attrs: { type: "reset" },
                    },
                    [_vm._v("Cancel")]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);