Vue.component('product', {
    props: ['name', 'image', 'description', 'price', 'show-add', 'show-remove'],
    template: `
    <div class="product">
    <img v-bind:src="image" width="190px" height="250px">
    <h3 class="name">
    {{name}}
    </h3>
    <p class="description">{{description}}</p>
    <p class="price">{{price}}</p>
    <button v-if="showAdd" v-on:click="$emit('add-to-cart')">Add</button>
    <button v-if="showRemove" v-on:click="$emit('remove-from-cart')">Remove</button>
    </div>`,
});