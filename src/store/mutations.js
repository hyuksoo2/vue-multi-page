import Vue from 'vue';

export default {
    initialiseStore (state) {
        if(sessionStorage.getItem('store')) {
            this.replaceState (
                Object.assign(state, JSON.parse(sessionStorage.getItem('store')))
            )
        }
        else {
            sessionStorage.setItem('store', JSON.stringify(state));
        }
    },

    SET_TEST_STATE1(state, payload) {
        Vue.set(state, 'testState1', payload);
    },

    SET_TEST_STATE2(state, payload) {
        Vue.set(state, 'testState2', payload);
    }

}