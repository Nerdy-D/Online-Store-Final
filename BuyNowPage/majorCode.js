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
                name: 'Bread',
                image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Dough',
                image: 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R10.00',
            },
            {
                name: 'Icing',
                image: 'https://media.istockphoto.com/id/1306194391/photo/woman-decorates-freshly-baked-cupcakes-with-cream.jpg?b=1&s=612x612&w=0&k=20&c=bo-BQgqHvbsaHdVLydGWYmUg2df-NNBQlIfsdKXQbyY=',
                description: 'Yummy',
                price: 'R7.00',
            },
            {
                name: 'Chocolate',
                image: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R11.00',
            },
            {
                name: 'Scones',
                image: 'https://images.pexels.com/photos/7686487/pexels-photo-7686487.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Cream',
                image: 'https://media.istockphoto.com/id/515777808/photo/yogurt.jpg?b=1&s=612x612&w=0&k=20&c=i1i529QwDw4KCY2pXJDBi45YvAdrh8Wit9b-TzgD56s=',
                description: 'Yummy',
                price: 'R12.00',
            },
            {
                name: 'Milk',
                image: 'https://images.pexels.com/photos/5836625/pexels-photo-5836625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R5.00',
            },
            {
                name: 'Bread',
                image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Dough',
                image: 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R10.00',
            },
            {
                name: 'Icing',
                image: 'https://media.istockphoto.com/id/1306194391/photo/woman-decorates-freshly-baked-cupcakes-with-cream.jpg?b=1&s=612x612&w=0&k=20&c=bo-BQgqHvbsaHdVLydGWYmUg2df-NNBQlIfsdKXQbyY=',
                description: 'Yummy',
                price: 'R7.00',
            },
            {
                name: 'Chocolate',
                image: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R11.00',
            },
            {
                name: 'Scones',
                image: 'https://images.pexels.com/photos/7686487/pexels-photo-7686487.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Cream',
                image: 'https://media.istockphoto.com/id/515777808/photo/yogurt.jpg?b=1&s=612x612&w=0&k=20&c=i1i529QwDw4KCY2pXJDBi45YvAdrh8Wit9b-TzgD56s=',
                description: 'Yummy',
                price: 'R12.00',
            },
            {
                name: 'Milk',
                image: 'https://images.pexels.com/photos/5836625/pexels-photo-5836625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R5.00',
            },
            {
                name: 'Bread',
                image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Dough',
                image: 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R10.00',
            },
            {
                name: 'Icing',
                image: 'https://media.istockphoto.com/id/1306194391/photo/woman-decorates-freshly-baked-cupcakes-with-cream.jpg?b=1&s=612x612&w=0&k=20&c=bo-BQgqHvbsaHdVLydGWYmUg2df-NNBQlIfsdKXQbyY=',
                description: 'Yummy',
                price: 'R7.00',
            },
            {
                name: 'Chocolate',
                image: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R11.00',
            },
            {
                name: 'Scones',
                image: 'https://images.pexels.com/photos/7686487/pexels-photo-7686487.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Cream',
                image: 'https://media.istockphoto.com/id/515777808/photo/yogurt.jpg?b=1&s=612x612&w=0&k=20&c=i1i529QwDw4KCY2pXJDBi45YvAdrh8Wit9b-TzgD56s=',
                description: 'Yummy',
                price: 'R12.00',
            },
        ],
        productNew: [
            {
                name: 'Milk',
                image: 'https://images.pexels.com/photos/5836625/pexels-photo-5836625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R5.00',
            },
            {
                name: 'Bread',
                image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Dough',
                image: 'https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R10.00',
            },
            {
                name: 'Icing',
                image: 'https://media.istockphoto.com/id/1306194391/photo/woman-decorates-freshly-baked-cupcakes-with-cream.jpg?b=1&s=612x612&w=0&k=20&c=bo-BQgqHvbsaHdVLydGWYmUg2df-NNBQlIfsdKXQbyY=',
                description: 'Yummy',
                price: 'R7.00',
            },
            {
                name: 'Milk',
                image: 'https://images.pexels.com/photos/5836625/pexels-photo-5836625.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R5.00',
            },
        ],
        productFeature: [
            {
                name: 'Chocolate',
                image: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R11.00',
            },
            {
                name: 'Scones',
                image: 'https://images.pexels.com/photos/7686487/pexels-photo-7686487.jpeg?auto=compress&cs=tinysrgb&w=1600',
                description: 'Yummy',
                price: 'R8.00',
            },
            {
                name: 'Cream',
                image: 'https://media.istockphoto.com/id/515777808/photo/yogurt.jpg?b=1&s=612x612&w=0&k=20&c=i1i529QwDw4KCY2pXJDBi45YvAdrh8Wit9b-TzgD56s=',
                description: 'Yummy',
                price: 'R12.00',
            },

        ],
        cart: [],
    },
    computed: {
    },
    created: function () {

        const jsoncart = localStorage.getItem('cart');
        console.log(jsoncart);
        if (jsoncart) this.cart = JSON.parse(jsoncart);
    },

    methods: {


        onAddToCart: function (product) {

            this.cart.push(product);
            const jsoncart = JSON.stringify(this.cart);
            localStorage.setItem("cart", jsoncart);
        },
        onRemoveItem: function (product) {

            const index = this.cart.indexOf(product);

            if (index > -1) {
                this.cart.splice(index, 1);
                const jsoncart = JSON.stringify(this.cart);

                localStorage.setItem("cart", jsoncart);
            }
        },
    },
});
