import axios from 'axios'
export default {
    actions: {
        async fetchElements(result) {
            const res = await axios.get(`http://localhost:3001/todos`);
            const newElements = res.data;
            result.commit('updateElements', newElements);
        }
    },
    mutations: {
        updateElements(state, newElements) {
            state.elements = newElements
        }
    },
    state: {
        elements: []
    },
    getters: {
        allElements(state) {
            return state.elements
        }
    },
}