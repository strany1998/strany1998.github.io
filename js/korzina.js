const ROOT_KORZINA = document.getElementById("korza");

class Korzina {
	handlerOpenShopping(){
		shoppingPage.render();
	}
	render(count) {
		const html = `
		<div class="korzina-counter">
		${count}👽
		</div>`;


		ROOT_KORZINA.innerHTML = html;
	}
}

const korzinaPage = new Korzina();
const productsStore = localStorageUtil.getProducts();



korzinaPage.render(productsStore.length);