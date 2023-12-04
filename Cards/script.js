const Info = [{
    name: 'Sudip',
    age: '20',
    status: 'Available',
    img: 'img1.avif',
},
{
    name: 'Ureka',
    age: '21',
    status: 'Available',
    img: 'img2.avif',
},
{
    name: 'Milli',
    age: '30',
    status: 'Unavailable',
    img: 'img3.jpg',
}];


let container = document.getElementById('container');
let inHTML = '';
for (let i = 0; i < Info.length; i++) {
    inHTML += `<div id="card">
        <img src="${Info[i].img}" alt="hello">
        <p>Name:${Info[i].name} <br>
        Age :${Info[i].age}<br>
        Status:${Info[i].status}</p>
    </div>`;
}

container.innerHTML = inHTML;
