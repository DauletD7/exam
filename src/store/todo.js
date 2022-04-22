import axios from 'axios'
export default {
    actions: {
        async fetchElements({commit}) {
            const res = await axios.get(`http://localhost:3001/todos`);
            const newElements = res.data;
            commit('updateElements', newElements);
        },
        getClick({commit}) {
            commit('setCounter')
        },
    },
    mutations: {
        updateElements(state, newElements) {
            state.elements = newElements
        },
        setCounter(state) {
            state.counter += 1
        },
    },
    state: {
        elements: [],
        counter: 0,
    },
    getters: {
        allElements(state) {
            return state.elements
        },
        getCounter(state) {
            return state.counter
        },
    },
}