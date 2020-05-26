function showimg(src, alt){
	document.getElementById('photo').src = src;
	document.getElementById('name').innerHTML = alt;
}

function original(){
	document.getElementById('name').innerHTML = "여기에 사진이 크게 들어갑니다.";
	document.getElementById('photo').src = "imgs/user.png";
}
