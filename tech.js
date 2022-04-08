// const myObj = [{
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "up", models: ["gkp", "noida", "bhadohi"] },
//         { name: "delhi", models: ["gzb", "bagh", "dwarka"] },
//         { name: "pun", models: ["har", "chan", "gjj"] }
//     ]
// }
// ,
// fb
// ]



function xml2json(srcDOM) {
  let children = [...srcDOM.children];

  // base case for recursion.
  if (!children.length) {
    return srcDOM.innerHTML;
  }

  // initializing object to be returned.
  let jsonResult = {};

  for (let child of children) {
    // checking is child has siblings of same name.
    let childIsArray =
      children.filter((eachChild) => eachChild.nodeName === child.nodeName)
        .length > 1;

    // if child is array, save the values as array, 
    // else as strings.
    if (childIsArray) {
      if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [xml2json(child)];
      } else {
        jsonResult[child.nodeName].push(xml2json(child));
      }
    } else {
      jsonResult[child.nodeName] = xml2json(child);
    }
  }

  return jsonResult;
}



// for (h in myObj.cars) {
//     document.write(myObj.cars[h].name, "<br>")
//     myObj.cars[h].models.forEach((g) => {
//         document.write(g, "<br>")
//     })
// }

// for (h in myObj.cars) {
//     let x = myObj.cars[h];
//     document.write(x.name, "<br>")


//     x.models.forEach((g) => {
//         document.write(g, "<br>")
//     })
// }

var user = [1, 2, 3, 4, 5]

let newList=user.filter((item,index)=>{
    return  1 !==index;

})
console.log("new",newList)

// const d = {
//     "adult": false,
//     "backdrop_path": "/yguBaPk5V0nZCcSBthre4YFMAgk.jpg",
//     "belongs_to_collection": null,
//     "budget": 63000000,
//     "genres": [
//         {
//             "id": 18,
//             "name": "Drama"
//         }
//     ],
//     "homepage": "http://www.foxmovies.com/movies/fight-club",
//     "id": 550,
//     "imdb_id": "tt0137523",
//     "original_language": "en",
//     "original_title": "Fight Club",
//     "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//     "popularity": 42.086,
//     "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//     "production_companies": [
//         {
//             "id": 508,
//             "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
//             "name": "Regency Enterprises",
//             "origin_country": "US"
//         },
//         {
//             "id": 711,
//             "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
//             "name": "Fox 2000 Pictures",
//             "origin_country": "US"
//         },
//         {
//             "id": 20555,
//             "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
//             "name": "Taurus Film",
//             "origin_country": "DE"
//         },
//         {
//             "id": 54051,
//             "logo_path": null,
//             "name": "Atman Entertainment",
//             "origin_country": ""
//         },
//         {
//             "id": 54052,
//             "logo_path": null,
//             "name": "Knickerbocker Films",
//             "origin_country": "US"
//         },
//         {
//             "id": 25,
//             "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
//             "name": "20th Century Fox",
//             "origin_country": "US"
//         },
//         {
//             "id": 4700,
//             "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
//             "name": "The Linson Company",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "DE",
//             "name": "Germany"
//         },
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "1999-10-15",
//     "revenue": 100853753,
//     "runtime": 139,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Mischief. Mayhem. Soap.",
//     "title": "Fight Club",
//     "video": false,
//     "vote_average": 8.4,
//     "vote_count": 23021
// }

// d.production_companies.forEach(function (ele) {
//     document.write(ele.id + "<br>" + ele.logo_path + "<br>" + ele.naelee + "<br>" + ele.origin_country + "<br>")
// })


// for (i in d) {
//     let ele = d[i];
//     document.write(ele);
//     document.write("<br>");

// d.genres.map(element => {
//     document.write(element.id + " " + element.name);
// });

// }

