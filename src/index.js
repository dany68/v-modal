import Modal from './components/Modal';

const Plugin = {
    install(Vue) {
        Vue.component('v-modal', Modal);
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}

export default Plugin;
