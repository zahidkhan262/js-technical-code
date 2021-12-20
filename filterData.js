let allData = [
    { img_path: 'zahid.jpeg', name: 'shirt', price: 1200, color: 'black' },
    { img_path: 'zahid.jpeg', name: 'tshirt', price: 2200, color: 'red' },
    { img_path: 'zahid.jpeg', name: 'pant', price: 1200, color: 'green' },
    { img_path: 'zahid.jpeg', name: 'top', price: 1200, color: 'blue' },
    { img_path: 'zahid.jpeg', name: 'top', price: 1200, color: 'yellow' },
    { img_path: 'zahid.jpeg', name: 'shirt', price: 1200, color: 'black' },
    { img_path: 'zahid.jpeg', name: 'pant', price: 1200, color: 'red' },
];

card = "";


allData.forEach((ele) => {
    card += `
    <div class="card">
            <img src="${ele.img_path}"
                alt="">
            <div class="card-body">
                <p>${ele.name}</p>
                <p>${ele.price}</p>
                <p>${ele.color}</p>
            </div>
        </div>
    `
})
bind.innerHTML = card;
