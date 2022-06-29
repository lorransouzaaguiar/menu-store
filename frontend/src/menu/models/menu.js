const Category = (data) =>
    Object.freeze({
        id: data.id,
        description: data.description,
        products: data.products,
    })

const Product = (data) =>
    Object.freeze({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
    })

const Menu = (categories) =>
    Object.freeze({
        categories,
        getDrinkCategories: function () {
            return this.categories.filter(
                (category) => category.description === 'bebidas'
            )
        },
        getMenuCategories: function () {
            return this.categories.filter(
                (category) => category.description !== 'bebidas'
            )
        },
    })

export { Product, Menu, Category }
