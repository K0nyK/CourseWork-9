var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    "results": [
      {
        "id": 219957,
        "title": "Carrot & sesame burgers",
        "image": "https://spoonacular.com/recipeImages/219957-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 219871,
        "title": "Halloumi aubergine burgers with harissa relish",
        "image": "https://spoonacular.com/recipeImages/219871-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 210685,
        "title": "The great breakfast burger",
        "image": "https://spoonacular.com/recipeImages/210685-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 521885,
        "title": "Pesto & Mozzarella Turkey Burger",
        "image": "https://spoonacular.com/recipeImages/521885-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 220182,
        "title": "Turkey burgers with beetroot relish",
        "image": "https://spoonacular.com/recipeImages/220182-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 573337,
        "title": "Spicy Mango Black Bean Turkey Burgers",
        "image": "https://spoonacular.com/recipeImages/573337-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 210827,
        "title": "Tangy tuna burgers",
        "image": "https://spoonacular.com/recipeImages/210827-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 46139,
        "title": "Turkey Burgers With Cucumber-Pineapple Relish",
        "image": "https://spoonacular.com/recipeImages/46139-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 210039,
        "title": "Sunshine burgers",
        "image": "https://spoonacular.com/recipeImages/210039-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 864592,
        "title": "Black Bean Mushroom Burgers with Chipotle Mayo",
        "image": "https://spoonacular.com/recipeImages/864592-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 225225,
        "title": "Lamb & feta burgers with minty yogurt",
        "image": "https://spoonacular.com/recipeImages/225225-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 610905,
        "title": "Jalapeno Bacon Turkey Burger",
        "image": "https://spoonacular.com/recipeImages/610905-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 213800,
        "title": "Aussie burgers with the lot",
        "image": "https://spoonacular.com/recipeImages/213800-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 217402,
        "title": "Lemon & thyme turkey burgers",
        "image": "https://spoonacular.com/recipeImages/217402-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 220393,
        "title": "The ultimate makeover: Burgers",
        "image": "https://spoonacular.com/recipeImages/220393-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 210030,
        "title": "Aussie burgers",
        "image": "https://spoonacular.com/recipeImages/210030-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 225200,
        "title": "Skinny Thai burgers with sweet potato chips & pineapple salsa",
        "image": "https://spoonacular.com/recipeImages/225200-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 501162,
        "title": "Spiced turkey patties with fruity quinoa salad",
        "image": "https://spoonacular.com/recipeImages/501162-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 219129,
        "title": "Garlic & mushroom burgers",
        "image": "https://spoonacular.com/recipeImages/219129-312x231.jpg",
        "imageType": "jpg"
      },
      {
        "id": 225158,
        "title": "Mini chicken bagel burgers",
        "image": "https://spoonacular.com/recipeImages/225158-312x231.jpg",
        "imageType": "jpg"
      }
    ],
    "baseUri": "https://spoonacular.com/recipeImages/",
    "offset": 0,
    "number": 20,
    "totalResults": 58,
    "processingTimeMs": 194
  })
});

router.get('/11124', function(req, res, next) {
  res.send({
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 13,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 30,
    "cookingMinutes": 20,
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/11011/carrot-and-sesame-burgers",
    "spoonacularSourceUrl": "https://spoonacular.com/carrot-sesame-burgers-219957",
    "aggregateLikes": 910,
    "spoonacularScore": 98,
    "healthScore": 36,
    "creditsText": "BBC Good Food",
    "sourceName": "BBC Good Food",
    "pricePerServing": 147.75,
    "extendedIngredients": [
      {
        "id": 11124,
        "aisle": "Produce",
        "image": "sliced-carrot.png",
        "consitency": "solid",
        "name": "carrots",
        "original": "750g carrots, peeled and grated",
        "originalString": "750g carrots, peeled and grated",
        "originalName": "carrots, peeled and grated",
        "amount": 750,
        "unit": "g",
        "meta": [
          "grated",
          "peeled"
        ],
        "metaInformation": [
          "grated",
          "peeled"
        ],
        "measures": {
          "us": {
            "amount": 1.653,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 750,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 16058,
        "aisle": "Canned and Jarred",
        "image": "chickpeas.png",
        "consitency": "solid",
        "name": "canned chickpeas",
        "original": "410g can chickpeas, drained and rinsed",
        "originalString": "410g can chickpeas, drained and rinsed",
        "originalName": "chickpeas, drained and rinsed",
        "amount": 410,
        "unit": "g",
        "meta": [
          "drained and rinsed",
          "canned"
        ],
        "metaInformation": [
          "drained and rinsed",
          "canned"
        ],
        "measures": {
          "us": {
            "amount": 14.462,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 410,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 11282,
        "aisle": "Produce",
        "image": "brown-onion.png",
        "consitency": "solid",
        "name": "onion",
        "original": "1 small onion, roughly chopped",
        "originalString": "1 small onion, roughly chopped",
        "originalName": "onion, roughly chopped",
        "amount": 1,
        "unit": "small",
        "meta": [
          "roughly chopped"
        ],
        "metaInformation": [
          "roughly chopped"
        ],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "small",
            "unitLong": "small"
          },
          "metric": {
            "amount": 1,
            "unitShort": "small",
            "unitLong": "small"
          }
        }
      },
      {
        "id": 12698,
        "aisle": "Ethnic Foods;Health Foods",
        "image": "tahini-paste.png",
        "consitency": "solid",
        "name": "tahini paste",
        "original": "2 tbsp tahini paste, plus 1 tsp to serve",
        "originalString": "2 tbsp tahini paste, plus 1 tsp to serve",
        "originalName": "tahini paste, plus 1 tsp to serve",
        "amount": 2,
        "unit": "tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 1002014,
        "aisle": "Spices and Seasonings",
        "image": "ground-cumin.jpg",
        "consitency": "solid",
        "name": "ground cumin",
        "original": "1 tsp ground cumin",
        "originalString": "1 tsp ground cumin",
        "originalName": "ground cumin",
        "amount": 1,
        "unit": "tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 1123,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg.png",
        "consitency": "solid",
        "name": "egg",
        "original": "1 egg",
        "originalString": "1 egg",
        "originalName": "egg",
        "amount": 1,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consitency": "liquid",
        "name": "olive oil",
        "original": "3 tbsp olive oil",
        "originalString": "3 tbsp olive oil",
        "originalName": "olive oil",
        "amount": 3,
        "unit": "tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 3,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 18079,
        "aisle": "Pasta and Rice",
        "image": "breadcrumbs.jpg",
        "consitency": "solid",
        "name": "breadcrumbs",
        "original": "100g wholemeal breadcrumbs",
        "originalString": "100g wholemeal breadcrumbs",
        "originalName": "wholemeal breadcrumbs",
        "amount": 100,
        "unit": "g",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 3.527,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 100,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 9156,
        "aisle": "Produce",
        "image": "zest-lemon.jpg",
        "consitency": "solid",
        "name": "lemon zest",
        "original": "zest 1 lemon, plus 1 tsp juice",
        "originalString": "zest 1 lemon, plus 1 tsp juice",
        "originalName": "zest lemon, plus 1 tsp juice",
        "amount": 1,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1001116,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "plain-yogurt.jpg",
        "consitency": "liquid",
        "name": "natural yogurt",
        "original": "150ml pot natural yogurt",
        "originalString": "150ml pot natural yogurt",
        "originalName": "pot natural yogurt",
        "amount": 150,
        "unit": "ml",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 5.073,
            "unitShort": "fl. oz",
            "unitLong": "fl. ozs"
          },
          "metric": {
            "amount": 150,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 98940,
        "aisle": "Bakery/Bread",
        "image": "french-rolls.jpg",
        "consitency": "solid",
        "name": "sub buns",
        "original": "6 buns, rocket leaves, sliced red onion, sliced avocado and chilli sauce, to serve",
        "originalString": "6 buns, rocket leaves, sliced red onion, sliced avocado and chilli sauce, to serve",
        "originalName": "buns, rocket leaves, sliced red onion, sliced avocado and chilli sauce, to serve",
        "amount": 6,
        "unit": "",
        "meta": [
          "red",
          "sliced"
        ],
        "metaInformation": [
          "red",
          "sliced"
        ],
        "measures": {
          "us": {
            "amount": 6,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 6,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 12023,
        "aisle": "Ethnic Foods;Spices and Seasonings",
        "image": "sesame-seeds.png",
        "consitency": "solid",
        "name": "sesame seeds",
        "original": "3 tbsp sesame seeds",
        "originalString": "3 tbsp sesame seeds",
        "originalName": "sesame seeds",
        "amount": 3,
        "unit": "tbsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 3,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      }
    ],
    "id": 219957,
    "title": "Carrot & sesame burgers",
    "readyInMinutes": 50,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/219957-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [
      "american"
    ],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "malbec",
        "merlot",
        "zinfandel"
      ],
      "pairingText": "Burger can be paired with Malbec, Merlot, and Zinfandel. Merlot will be perfectly adequate for a classic burger with standard toppings. Bolder toppings call for bolder wines, such as a malbec or peppery zinfandel. One wine you could try is Tikal Amorio Malbec. It has 4.2 out of 5 stars and a bottle costs about 28 dollars.",
      "productMatches": [
        {
          "id": 444771,
          "title": "Tikal Amorio Malbec",
          "description": "Aromas of smoky oak and cherry. Mouthwatering, penetrating flavors of ripe red and black cherries, red berries. Quite rich and velvety on the palate, and finishes with just enough grip to make it a real winner with food. This is some seriously sexy Malbec. Pairs well with grilled or smoked meats such as beef, pork, and lamb. Also complements dishes prepared with cheese or cream sauces.",
          "price": "$27.99",
          "imageUrl": "https://spoonacular.com/productImages/444771-312x231.jpg",
          "averageRating": 0.8400000000000001,
          "ratingCount": 5,
          "score": 0.7775000000000001,
          "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ftikal-amorio-malbec-2008%2F104742"
        }
      ]
    },
    "instructions": "Put a third of the grated carrot in a food processor with the chickpeas, onion, 2 tbsp tahini, cumin and egg. Whizz to a thick paste, then scrape into a large bowl. Heat 1 tbsp oil in your largest frying pan, tip in the remaining carrot and cook for 8-10 mins, stirring until the carrot is softened  it will become more golden as it is cooked. Add this cooked carrot to the whizzed paste with the breadcrumbs, lemon zest and sesame seeds. Add seasoning, then mix together well with your hands.\nDivide the mixture into 6, then using wet hands shape into burgers. Cover and chill until serving. Mix the yogurt with the remaining tahini and lemon juice, then chill.\nFire up the barbecue, or heat a non-stick frying pan and brush the burgers with the remaining oil. Cook the burgers for 5 mins on each side, until golden and crisp. Meanwhile warm or toast the buns (or sit them on the barbecue alongside the burgers). When the burgers are ready, spread each bun with some of the lemony sesame yogurt, add the avocado, top with the burger, onion and rocket. Finish with a drizzle of chilli sauce.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Put a third of the grated carrot in a food processor with the chickpeas, onion, 2 tbsp tahini, cumin and egg. Whizz to a thick paste, then scrape into a large bowl.",
            "ingredients": [
              {
                "id": 11124,
                "name": "carrot",
                "image": "sliced-carrot.png"
              },
              {
                "id": 12698,
                "name": "tahini",
                "image": "tahini-paste.png"
              },
              {
                "id": 1002014,
                "name": "cumin",
                "image": "ground-cumin.jpg"
              },
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              },
              {
                "id": 1123,
                "name": "egg",
                "image": "egg.png"
              }
            ],
            "equipment": [
              {
                "id": 404771,
                "name": "food processor",
                "image": "food-processor.png"
              },
              {
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Heat 1 tbsp oil in your largest frying pan, tip in the remaining carrot and cook for 8-10 mins, stirring until the carrot is softened  it will become more golden as it is cooked.",
            "ingredients": [
              {
                "id": 11124,
                "name": "carrot",
                "image": "sliced-carrot.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": {
              "number": 10,
              "unit": "minutes"
            }
          },
          {
            "number": 3,
            "step": "Add this cooked carrot to the whizzed paste with the breadcrumbs, lemon zest and sesame seeds.",
            "ingredients": [
              {
                "id": 12023,
                "name": "sesame seeds",
                "image": "sesame-seeds.png"
              },
              {
                "id": 18079,
                "name": "breadcrumbs",
                "image": "breadcrumbs.jpg"
              },
              {
                "id": 9156,
                "name": "lemon zest",
                "image": "zest-lemon.jpg"
              },
              {
                "id": 11124,
                "name": "carrot",
                "image": "sliced-carrot.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Add seasoning, then mix together well with your hands.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Divide the mixture into 6, then using wet hands shape into burgers. Cover and chill until serving.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Mix the yogurt with the remaining tahini and lemon juice, then chill.",
            "ingredients": [
              {
                "id": 12698,
                "name": "tahini",
                "image": "tahini-paste.png"
              },
              {
                "id": 1116,
                "name": "yogurt",
                "image": "plain-yogurt.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Fire up the barbecue, or heat a non-stick frying pan and brush the burgers with the remaining oil. Cook the burgers for 5 mins on each side, until golden and crisp. Meanwhile warm or toast the buns (or sit them on the barbecue alongside the burgers). When the burgers are ready, spread each bun with some of the lemony sesame yogurt, add the avocado, top with the burger, onion and rocket. Finish with a drizzle of chilli sauce.",
            "ingredients": [
              {
                "id": 12023,
                "name": "sesame seeds",
                "image": "sesame-seeds.png"
              },
              {
                "id": 1116,
                "name": "yogurt",
                "image": "plain-yogurt.jpg"
              },
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": {
              "number": 5,
              "unit": "minutes"
            }
          }
        ]
      }
    ]
  })
});

module.exports = router;
