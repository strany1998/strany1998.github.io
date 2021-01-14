let fullImg = document.querySelector('#fullimg');
let images = [
    'primer/1.jpg',
	'primer/2.jpg',
	'primer/3.jpg',
	'primer/4.jpg',
	'primer/5.jpg',
	'primer/6.jpg',
	'primer/7.jpg',
	'primer/8.jpg',
	'primer/9.jpg',
	'primer/10.jpg',
]
function renderImage(){
    let html = '';
    for (i=0; i<images.length; i++){
        html += `
        <img class="full-item"
         src="${images[i]}"
         onclick="renderFullImage(${i})"
         />`;
    }
    document.querySelector('#cont').innerHTML = html;
}
renderImage();
function renderFullImage(num){
    fullImg.style.display = 'flex';
    fullImg.innerHTML = `
    <img class="full-item-fon"  id="foon"
    src="${images[num]}"
    />
    <img class="full-close"
    src="https://image.ibb.co/eoUyfT/close.png"
    onclick="closeFull()"
    />
   
	`
}
function closeFull(){
    fullImg.style.display = 'none';
}