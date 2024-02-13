import { createStore } from 'vuex'

export const store = createStore({
    state: {
        forms: [],
    },
    mutations: {
        addForms(state, values){
            state.forms.push(values)
            console.log('aF')
        }
    },
    actions: {
        add_form(context, values){
            console.log(values)
            console.log('values a_f')
            context.commit("addForms", values)
        }
    },
    getters: {
        forms(state){
            return state.forms
        }
    }
})
