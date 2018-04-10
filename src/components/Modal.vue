<template lang="html">
    <div v-if="show" class="modal" :class="type ? `modal-${type}` : ''" @click="close">
        <div class="modal-container">
            <slot></slot>
        </div>

        <div v-if="closable" class="modal-close-btn" @click="close" title="Close" role="button"></div>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * Define if the modal is displayed or not.
         * If not the modal is removed from the DOM.
         */
        show: {
            type: Boolean,
            default: false
        },

        /**
         * Will append a class '.modal-{type}' on the .modal-container.
         */
        type: {
            type: String,
            default: null
        },

        /**
         * Determine if a click on the overlay should close the modal
         * and if a close button should be added
         */
        closable: {
            type: Boolean,
            default: true
        }
    },

    /**
    * Bind the parent v-model with the show prop.
    */
    model: {
        prop: 'show',
        event: 'input'
    },

    created() {
        this.setBodyOverflow();
    },

    watch: {
        show() {
            this.setBodyOverflow();
        }
    },

    methods: {
        /**
         * Close the modal and emit a `close` event.
         */
        close(e) {
            if (this.closable && e.target === e.currentTarget) {
                this.$emit('close');
                this.$emit('input', false);
            }
        },

        /**
         * Prevent the body to be scrollable when the modal is open.
         */
        setBodyOverflow() {
            if (this.show) {
                document.body.style.overflow = 'hidden';
            }
            else if (this.$parent.$options.name != 'v-modal') {
                document.body.style.overflow = 'auto';
            }
        }
    }
}
</script>
