// import cities from '../../assets/data/cities.json' assert {type: 'json'};
// const cities = require('../../assets/data/cities.json');
// fs.readFile('../../assets/data/cities.json', function (error, content) {
//     let cities = JSON.parse(content);
// });

const cities = JSON.parse(citiesimage);

// let city = ['Medan', "Jakarta"];
// let imageSource = ['https://media.istockphoto.com/id/587189046/photo/roundabout-hi-jakarta.jpg?b=1&s=170667a&w=0&k=20&c=0bDk_2X8eVq88MlheNT78BThkimvWIkV3ETGCX1kFIM=', 
//                         'https://media.istockphoto.com/id/587189046/photo/roundabout-hi-jakarta.jpg?b=1&s=170667a&w=0&k=20&c=0bDk_2X8eVq88MlheNT78BThkimvWIkV3ETGCX1kFIM=']

// let cities = [
//     {
//         'city' : 'Medan',
//         'imageSrc' : 'https://media.istockphoto.com/id/587189046/photo/roundabout-hi-jakarta.jpg?b=1&s=170667a&w=0&k=20&c=0bDk_2X8eVq88MlheNT78BThkimvWIkV3ETGCX1kFIM='
//     },
//     {
//         'city' : 'Jakarta',
//         'imageSrc' : 'https://media.istockphoto.com/id/587189046/photo/roundabout-hi-jakarta.jpg?b=1&s=170667a&w=0&k=20&c=0bDk_2X8eVq88MlheNT78BThkimvWIkV3ETGCX1kFIM='
//     },
// ]

// p.appendChild(text);
// div.appendChild(img);
// div.appendChild(p);

// getCityId.appendChild(div);

for(let i=0; i<city.length; i++) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    // img.src = "https://media.istockphoto.com/id/587189046/photo/roundabout-hi-jakarta.jpg?b=1&s=170667a&w=0&k=20&c=0bDk_2X8eVq88MlheNT78BThkimvWIkV3ETGCX1kFIM=";
    
    let p = document.createElement('h1');
    img.src = cities[i].imageSrc;
    let text = document.createTextNode(cities[i].city);
    p.appendChild(text);
    div.appendChild(img);
    div.appendChild(p);
    document.getElementById('cities').appendChild(div);
    // getCityId.appendChild(div);

}

// console.log(imageSource[1]);