var app = new Vue({
    el: '#myVueApp',
    data: {
        products: [
            {
                name: 'Milk',
                image: 'https://images.pexels.com/photos/5836625/pexels-photo-5836625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R5.00',
            },

        ],
        addToCart: [],



        methods: {
            onAddToCart: function (product) {

                this.addToCart.push(product);
                const jsonaddToCart = JSON.stringify(this.addToCart);
                localStorage.setItem('productincart', jsonaddToCart);
            },
            onRemoveItem: function (product) {

                const index = this.addToCart.indexOf(product);

                if (index > -1) {
                    this.addToCart.splice(index, 1);
                    const jsonaddToCart = JSON.stringify(this.addToCart);

                    localStorage.setItem('productincart', jsonaddToCart);
                }
            },
        },
    }
});
