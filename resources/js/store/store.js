import axios from "axios"

export default {
    state: {
        catData: [],
        employeeData: [],
        PostData: []
    },
    getters: {
        getCategories(state) {
            return state.catData
        },
        getEmployee(state) {
            return state.employeeData
        },
        GetPost(state) {
            return state.PostData
        }
    },
    actions: {
        getcategoriess(data) {
            axios.get('get-categories').then((response) => {
                data.commit('categoriess', response.data.categories)
            }).catch((error) => {
                console.log(error);
            })
        },
        getEmployees(data) {
            axios.get('get-employees').then((response) => {
                data.commit('Employeess', response.data.employee)

            }).catch((error) => {
                console.log(error);
            })
        },
        getPost(data) {
            axios.get('get-posts').then((response) => {
                data.commit('Posts', response.data.posts)

            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mutations: {
        categoriess(state, data) {
            return state.catData = data;

        },
        Employeess(state, data) {
            return state.employeeData = data
        },
        Posts(state, data) {
            return state.PostData = data
        }


    }
}