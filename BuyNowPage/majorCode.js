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
            {
                name: 'Milk',
                image: 'https://images.pexels.com/photos/5836625/pexels-photo-5836625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R5.00',
            },
        ],
        cart: [],
    },
    created: function () {

        const jsoncart = localStorage.getItem('addToCart');
        console.log(jsoncart);
        if (jsoncart) this.watchlist = JSON.parse(jsoncart);
    },

    methods: {
        onAddToCart: function (product) {

            this.addToCart.push(product);
            const jsoncart = JSON.stringify(this.addToCart);
            localStorage.setItem('cart', jsoncart);
        },
        onRemoveItem: function (product) {

            const index = this.addToCart.indexOf(product);

            if (index > -1) {
                this.addToCart.splice(index, 1);
                const jsoncart = JSON.stringify(this.addToCart);

                localStorage.setItem('addToCart', jsoncart);
            }
        },
    },
});
