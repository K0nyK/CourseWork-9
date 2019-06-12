var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET users listing. */
router.get('/search', function(req, res, next) {


  let obj = req.query;
  var str = "&";
  for (var key in obj) {
    if (str != "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }
console.log(str);
  // axios.get('https://api.edamam.com/search?app_id=af4e7186&app_key=62826f959bbd25219813e19275dc7113' + str).then(r=> console.log(r)||res.send(r.data)).catch(e=>console.log(e));
  // res.send('respond with a resource');
  let config = {
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "6707bbcd02msh53ee712c892604ep15507cjsn38a308e4c1e2"
    }
  }

  let data = {
    ...req.query
  }
console.log(data);
  const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex';
  // axios.get(URL, data, config).then(result=>res.send(result.body)).catch(e=>console.log(e));
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?"+str)
      .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", "6707bbcd02msh53ee712c892604ep15507cjsn38a308e4c1e2")
      .end(function (result) {
        res.send(result.body);
      });
});
router.get('/test', function(req, res, next) {
res.send({
  "results": [
    {
      "id": 592479,
      "title": "Kale and Quinoa Salad with Black Beans",
      "image": "https://spoonacular.com/recipeImages/592479-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 547775,
      "title": "Creamy Avocado Pasta",
      "image": "https://spoonacular.com/recipeImages/547775-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 818941,
      "title": "Avocado Toast with Eggs, Spinach, and Tomatoes",
      "image": "https://spoonacular.com/recipeImages/818941-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 495111,
      "title": "Citrus Sesame Kale",
      "image": "https://spoonacular.com/recipeImages/495111-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 689502,
      "title": "Melt In Your Mouth Kale Salad",
      "image": "https://spoonacular.com/recipeImages/689502-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 837136,
      "title": "Kale Pineapple Smoothie",
      "image": "https://spoonacular.com/recipeImages/837136-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 582897,
      "title": "Mexican Salad with Lime Dressing",
      "image": "https://spoonacular.com/recipeImages/582897-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 777037,
      "title": "Weekly Meal Plan #17",
      "image": "https://spoonacular.com/recipeImages/777037-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 801710,
      "title": "Matcha Green Tea and Pineapple Smoothie",
      "image": "https://spoonacular.com/recipeImages/801710-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 695486,
      "title": "Green Smoothie",
      "image": "https://spoonacular.com/recipeImages/695486-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 812966,
      "title": "Low Carb Frosty",
      "image": "https://spoonacular.com/recipeImages/812966-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 584495,
      "title": "Chopped Kale Salad with Pomegranate & Avocado",
      "image": "https://spoonacular.com/recipeImages/584495-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 547899,
      "title": "Sweet Potato and Black Bean Mexican Salad",
      "image": "https://spoonacular.com/recipeImages/547899-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 696698,
      "title": "Tuscan-Style Tuna Salad",
      "image": "https://spoonacular.com/recipeImages/696698-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 613079,
      "title": "Smashed White Bean and Avocado Sandwich",
      "image": "https://spoonacular.com/recipeImages/613079-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 512226,
      "title": "Creamy Broccoli Spinach Soup | A Bowl of Green",
      "image": "https://spoonacular.com/recipeImages/512226-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 995889,
      "title": "Low Calorie Peanut Butter Banana Spinach Smoothie",
      "image": "https://spoonacular.com/recipeImages/995889-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 483531,
      "title": "Black Bean and Barley Salad",
      "image": "https://spoonacular.com/recipeImages/483531-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 695642,
      "title": "Bean Burgers with Spicy Guacamole",
      "image": "https://spoonacular.com/recipeImages/695642-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 473243,
      "title": "Green Lemonade",
      "image": "https://spoonacular.com/recipeImages/473243-312x231.jpg",
      "imageType": "jpg"
    }
  ],
  "baseUri": "https://spoonacular.com/recipeImages/",
  "offset": 0,
  "number": 20,
  "totalResults": 307547,
  "processingTimeMs": 695
})
});


router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${req.params.id}/information`)
      .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
          .header("X-RapidAPI-Key", "6707bbcd02msh53ee712c892604ep15507cjsn38a308e4c1e2")
          .end(function (result) {
            res.send(result.body);
          });
  //http://localhost:3000/recipes?query=burger&cuisine=american&offset=0&number=2
})



module.exports = router;
