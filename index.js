

  const api = {
    "success": true,
    "message": "",
    "data": [
        {
            "id": 226,
            "name": "Пальто",
            "price": 1250000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//mrP8xptcqYaNX4ONLWzfyCH75GFb2raEl41TuL0m.png"
        },
        {
            "id": 289,
            "name": "Футболка",
            "price": 350000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//rX72Iun8bOpAIqiNuSqDnoO7MiQb2kI6PWRXiK4C.jpg"
        },
        {
            "id": 468,
            "name": "ESSENTIALS ",
            "price": 390000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//eLjCd2nsKbAKeD0jRwVqf6nWBoiXpo1FLlf8hE8D.jpg"
        },
        {
            "id": 412,
            "name": "РУБАШКА ОВЕРСАЙЗ",
            "price": 390000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//qQdrmS3E7YiMJ6UcsaF7eoUmQ4ITpBoRHyDHpfmO.jpg"
        },
        {
            "id": 443,
            "name": "BALENCIAGA TRUCK",
            "price": 1300000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//ZHGvs2T8uSKKBKKnPMxCewjVq5NxC7nyQPyvOMLI.jpg"
        },
    
        {
            "id": 485,
            "name": "LOWE",
            "price": 350000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//3Lfti9S4U0QnrpPX5w7zeIUmZjT3EgMv2iIfYg79.jpg"
        },
        {
            "id": 370,
            "name": "BURBERRY",
            "price": 350000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//hRrV5TMSAKi3OQIkmxwjQqxz0lEIaJCmvbreDYse.jpg"
        },
     
        {
            "id": 274,
            "name": "Худи",
            "price": 690000,
            "discount": 0,
            "image": "https://www.alibimenstyle.uz/storage/products//HaqKdM4ELbwv9HpljEOKMvggOzmmXLfODDnzTbiO.jpg"
        }
    ],
    "code": 200,
    "meta": {
        "count": 10,
        "currentPage": 1,
        "previousPageUrl": null,
        "nextPageUrl": "https://www.alibimenstyle.uz/api/products?page=2",
        "total": 346,
        "perPage": 10,
        "lastPage": 35
    }
}

let main = document.querySelector('.main');

function htmlga() {
    let html = '';
    api.data.map((el) => {
        html += `
        <div class= "card">
        <img src=${el.image} />
        <h2>${el.name}</h2>
        <p>${el.price}</p>
        <b>${el.discount}</b>
        </div>
        `;
        main.innerHTML = html;
    });
}
htmlga();


