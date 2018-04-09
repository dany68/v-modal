# A modal component for Vue.js 2

> This package doesn't provide CSS styles. You can use the [Elements framework](https://github.com/dany68/elements) or simply grab the [modal.scss](https://github.com/dany68/elements/blob/master/sass/components/_modal.scss) file from it.

## Demo

A live demo is available [here](https://dany68.github.io/elements/docs/components/modal).


## Installation

You can install the package via npm:

```php
npm install dany68/v-modal --save
```

Then you will need to register the component globally in you main js file.

```js
// If Vue has been added to the global scope as:
// window.Vue = require('Vue')
require('v-modal');

// Otherwise
import Modal from 'v-modal';
Vue.use(Modal);
```

Alternatively you can register v-modal inside a component:

```js
// in your Component.vue file
import Modal from 'v-modal';

export default {
    components: { 'v-modal' : Modal }
}
```

## Usage

Now you can use html like this to render the modal:

```html
<button @click="showModal = true">Open Modal<button>

<v-modal :show="showModal" @close="showModal = false" type="window">
    <div class="modal-card">
        Your content goes here !
    </div>
</v-modal>
```

### Props

| Prop     | Type    | Default | Required | Description                                                                                                       |
| -------- | ------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| show     | Boolean | false   | No       | Determine if the modal is displayed.                                                                              |
| type     | String  |         | No       | Add a .modal-{variant} class to the modal                                                                         |
| closable | Boolean | true    | No       | Determine if a click on the overlay should close the modal, and if a close button should be added to the template |


### Events

| Event | Description                                                        |
| ----- | ------------------------------------------------------------------ |
| close | Emited when a click on the overlay or the modal close button happen. |


---

### Two way binding with v-model
The v-model attribute can be used to bind the `show` prop between the parent and the component to show/hide the modal.
Do not use `v-model` and the `show` prop at the same time.

```html
<v-modal v-model="showModal">
    <!-- Some content -->
</v-modal>

<!-- Instead of -->

<v-modal :show="showModal" @close="showModal = false">
    <!-- Some content -->
</v-modal>
```
