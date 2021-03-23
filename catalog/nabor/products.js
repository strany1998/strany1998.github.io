const ROOT_PRODUCTS = document.getElementById('rooow');
class Products {
    constructor(){
        this.classNameActive = 'product_btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';

    };

    handleSetLocationStorage(element, id){
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML =  this.labelRemove;
        }else {
            element.classList.remove(this.classNameActive);
            element.innerHTML =  this.labelAdd;
        }
        korzinaPage.render(products.length);
    }

    render(){
        const productsStore = localStorageUtil.getProducts();

        let htmlCatalog = '';
        NABOR.forEach(({id, name, price, img}) => {
           let activeClass = '';
           let activeText = '';
            if(productsStore.indexOf(id) === -1){
                activeText = 'Добавить в корзину';
            }else {
                activeClass = ' '+this.classNameActive;
                activeText = 'Удалить из корзины';
            };

            htmlCatalog +=`
            <li>
                <span>${name}</span>
                <img src="${img}" />
                <span>${price} Рублей</span>
                <button class="product_bth${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
            </li>`
        });

        const html=`
        <ul>${htmlCatalog}</ul>`;

        ROOT_PRODUCTS.innerHTML = html;

    }

}

const productsPage = new Products();
productsPage.render();