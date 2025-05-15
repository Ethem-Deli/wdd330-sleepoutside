import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails();
        document.getElementById('addToCart')
            .addEventListener('click', this.addToCart.bind(this));
    }

    addToCart() {
        setLocalStorage('so-cart', this.product);
    }

    renderProductDetails() {
        // Populate HTML elements with product details
        // Example:
        document.querySelector('.product-name').textContent = this.product.Name;
        document.querySelector('.product-image').src = this.product.Image;
        document.querySelector('.product-description').textContent = this.product.Description;
        document.querySelector('.product-price').textContent = `$${this.product.FinalPrice}`;
    }
}
