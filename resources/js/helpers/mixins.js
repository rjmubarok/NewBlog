import Vue from 'vue';
import { createLogger } from 'vuex';
Vue.mixin({
    methods: {
        confirm: function(callback) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) callback();
            });
        },
        loadimage(e) {
            let test = this;
            let file = e.target.files[0];
            console.log(file.type);
            if (file.type === 'image/jpeg') {
                let fileReader = new FileReader();
                fileReader.onload = function(e) {
                    test.form.img = e.target.result;
                }
                fileReader.readAsDataURL(file);
            } else {
                toastr.error("Image Must be jpg");
            }

        },
        fileLink: function(name) {
            return 'uploades/posts/' + name;
        }
    },
})