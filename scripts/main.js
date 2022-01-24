let myImage = document.querySelector('img'); //获取已知网页的图片

myImage.onclick = function() { //为myImage.onclick绑定功能
    let mySrc = myImage.getAttribute('src'); //获取该图像路径
    if (mySrc === 'images/5754b806-972d-4a0f-9710-bbecab762b40.png') { //判断该图像路径是否正确
        myImage.setAttribute('src', 'images/90794265_p0.jpg'); //正确就换新图
    } else {
        myImage.setAttribute('src', 'images/5754b806-972d-4a0f-9710-bbecab762b40.png'); //不正确就换该图
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}