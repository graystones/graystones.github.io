


let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dogs.jpg') {
	  myImage.setAttribute('src', 'images/img2.jpg');
	} else {
	  myImage.setAttribute('src', 'images/dogs.jpg');
	}
}
function setHeading(Lisa) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello!' + Lisa + '!';
}   
function setUserName() {
    let myName = prompt('请输入你的名字','lisa');
    localStorage.setItem('name', myName);
    setHeading(myName);
}    
    let storedName = localStorage.getItem('name');
    if(!storedName) {
    setUserName();
   } else {
    setHeading(storedName);
   }    
    let myButton = document.querySelector('button'); 
    myButton.onclick = setUserName;
