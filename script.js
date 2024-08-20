//--------------LEVEL1----------------
//1.
const firstPara = document.querySelector('p');
console.log(firstPara);

//2.
const first = document.querySelector('#first-paragraph');
const second = document.querySelector('#second-paragraph');
const third = document.querySelector('#third-paragraph');
const fourth = document.querySelector('#fourth-paragraph');

//3.
const all = document.querySelectorAll('p');
console.log(all);

//4.
for(let i=0;i<all.length;i++){
    console.log(all[i].textContent);
}

//5.
all[3].textContent='Fourth Para';

//6.
all[0].setAttribute('class','para1');
all[1].className='para2';
all[2].classList.add('para3');

//---------------LEVEL2----------------
//1.
all.forEach((para,i)=>{
    para.style.color='blue';
    para.style.border='1px solid black';

});

//2.
all.forEach((para,i)=>{
    if (i === 0 || i === 2) {
        para.style.color = 'green';
    } else if (i === 1 || i === 3) {
        para.style.color = 'red';
    }para.style.border='1px solid black';

});

