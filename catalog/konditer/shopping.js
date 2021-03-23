const ROOT_SHOPPING = document.getElementById('shopping');


class Shopping{
	
	handleClear(){
		ROOT_SHOPPING.innerHTML = '';
	};
	

	render(){
		const productsStore = localStorageUtil.getProducts();

        let htmlCatalog = '';
		let sumCatalog = 0;
		KONDITER.forEach(({id, name, price}) => {
			if(productsStore.indexOf(id) !== -1){
				htmlCatalog += `
				<tr class="shop__br">
					<td class="shop__name">${name}</td>
					<td class="shop_price">${price.toLocaleString()} Рублей</td>
					<td class="remov" onclick="shopslice()"></td>
				</tr>
				`;
				sumCatalog += price;
			}
		});


		const html = `
		<div class="shooop">
		<div class="shop__close" onclick="shoppingPage.handleClear()"></div>
			<table>
				${htmlCatalog}
				<tr>
					<td class="shop__name">Сумма: </td>
					<td class="shop_price">${sumCatalog.toLocaleString()} Рублей</td>
				</tr>
			</table>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;

	}

}
const shoppingPage = new Shopping();