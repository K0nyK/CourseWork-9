# CourseWork
to install packages run:
npm i

to run project
npm start







IMPORTANT!!!!! 
We use spoonacular API and limit it is small limit. Use tests url if it is posible.

TEst env:
Method: GET
URL: /test 
return 20 element

Method: GET
URL: /test/11124 
return one full recipe

PROD env:
One recipe:
Method: GET
URL: /recipe/:id
id - The id of the recipe.
Recip by filter:
example:
http://localhost:3000/recipe/search?query=burger&cuisine=american&offset=0&number=20
Method: GET
URL: /recipe/search
Parametrs:

    REQUIRED:
        offset: The number of results to skip (between 0 and 900).
        number: The number of results to return (between 1 and 100).
        
    OPTIONAL:
       name: query
       type: STRING
        OPTIONAL
        The recipe search query.
        
       name: cuisine
        STRING
        american
        OPTIONAL
        The cuisine(s) of the recipes. One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american.
       
        name: diet
        STRING
        OPTIONAL
        The diet to which the recipes must be compliant. Possible values are: pescetarian, lacto vegetarian, ovo vegetarian, vegan, paleo, primal, and vegetarian.
        
        name: includeIngredients
        STRING
        example: onions, lettuce, tomato
        OPTIONAL
        A comma-separated list of ingredients that should/must be contained in the recipe.
        
        excludeIngredients
        STRING
        coconut, mango
        OPTIONAL
        An comma-separated list of ingredients that must not be contained in the recipes.
        
        intolerances
        STRING
        peanut, shellfish
        OPTIONAL
        A comma-separated list of intolerances. All found recipes must not have ingredients that could cause problems for people with one of the given tolerances. Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.
        
        type
        STRING
        main course
        OPTIONAL
        The type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.
        
        ranking
        NUMBER
        2
        OPTIONAL
        Whether to minimize missing ingredients (0), maximize used ingredients (1) first, or rank recipes by relevance (2).
        
        minCalories
        NUMBER
        150
        OPTIONAL
        The minimum number of calories the recipe must have.
        
        maxCalories
        NUMBER
        1500
        OPTIONAL
        The maximum number of calories the recipe can have.
        
        minFat
        NUMBER
        5
        OPTIONAL
        The minimum number of grams of fat the recipe must have.
        
        maxFat
        NUMBER
        100
        OPTIONAL
        The maximum number of grams of fat the recipe can have.
        
        minProtein
        NUMBER
        5
        OPTIONAL
        The minimum number of grams of protein the recipe must have.
        
        maxProtein
        NUMBER
        100
        OPTIONAL
        The maximum number of grams of protein the recipe can have.
       
        minCarbs
        NUMBER
        5
        OPTIONAL
        The minimum number of grams of carbohydrates the recipe must have.
      
        maxCarbs
        NUMBER
        100
        OPTIONAL
        The maximum number of grams of carbohydrates the recipe can have.
       
        fillIngredients
        BOOLEAN
        OPTIONAL
        Add information about the used and missing ingredients in each recipe.
       
        instructionsRequired
        BOOLEAN
        OPTIONAL
        Whether the recipes must have instructions.
       
        addRecipeInformation
        BOOLEAN
        OPTIONAL
        If set to true, you get more information about the recipes returned. This saves the calls to get recipe information.
       
        minAlcohol
        NUMBER
        0
        OPTIONAL
        The minimum number of grams of alcohol the recipe must have.
       
        maxAlcohol
        NUMBER
        1000
        OPTIONAL
        The maximum number of grams of alcohol the recipe can have.
       
        minCaffeine
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of caffeine the recipe must have.
       
        maxCaffeine
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of caffeine the recipe can have.
       
        minCopper
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of copper the recipe must have.
        maxCopper
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of copper the recipe can have.
        minCalcium
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of calcium the recipe must have.
        maxCalcium
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of calcium the recipe can have.
        minCholine
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of choline the recipe must have.
        maxCholine
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of choline the recipe can have.
        minCholesterol
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of cholesterol the recipe must have.
        maxCholesterol
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of cholesterol the recipe can have.
        minFluoride
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of fluoride the recipe must have.
        maxFluoride
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of fluoride the recipe can have.
        minSaturatedFat
        NUMBER
        0
        OPTIONAL
        The minimum number of grams of saturated fat the recipe must have.
        maxSaturatedFat
        NUMBER
        50
        OPTIONAL
        The maximum number of grams of saturated fat the recipe can have.
        minVitaminA
        NUMBER
        0
        OPTIONAL
        The minimum number of IU of Vitamin A the recipe must have.
        maxVitaminA
        NUMBER
        5000
        OPTIONAL
        The maximum number of IU of Vitamin A the recipe can have.
        minVitaminC
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin C the recipe must have.
        maxVitaminC
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin C the recipe can have.
        minVitaminD
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of Vitamin D the recipe must have.
        maxVitaminD
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of Vitamin D the recipe can have.
        minVitaminE
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin E the recipe must have.
        maxVitaminE
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin E the recipe can have.
        minVitaminK
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of Vitamin K the recipe must have.
        maxVitaminK
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of Vitamin K the recipe can have.
        minVitaminB1
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin B1 the recipe must have.
        maxVitaminB1
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin B1 the recipe can have.
        minVitaminB2
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin B2 the recipe must have.
        maxVitaminB2
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin B2 the recipe can have.
        minVitaminB3
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin B3 the recipe must have.
        maxVitaminB3
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin B3 the recipe can have.
        minVitaminB5
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin B5 the recipe must have.
        maxVitaminB5
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin B5 the recipe can have.
        minVitaminB6
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of Vitamin B6 the recipe must have.
        maxVitaminB6
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of Vitamin B6 the recipe can have.
        minVitaminB12
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of Vitamin B12 the recipe must have.
        maxVitaminB12
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of Vitamin B12 the recipe can have.
        minFiber
        NUMBER
        0
        OPTIONAL
        The minimum number of grams of fiber the recipe must have.
        maxFiber
        NUMBER
        1000
        OPTIONAL
        The maximum number of grams of fiber the recipe can have.
        minFolate
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of folate the recipe must have.
        maxFolate
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of folate the recipe can have.
        minFolicAcid
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of folic acid the recipe must have.
        maxFolicAcid
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of folic acid the recipe can have.
        minIodine
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of iodine the recipe must have.
        maxIodine
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of iodine the recipe can have.
        minIron
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of iron the recipe must have.
        maxIron
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of iron the recipe can have.
        minMagnesium
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of magnesium the recipe must have.
        maxMagnesium
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of magnesium the recipe can have.
        minManganese
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of manganese the recipe must have.
        maxManganese
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of manganese the recipe can have.
        minPhosphorus
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of phosphorus the recipe must have.
        maxPhosphorus
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of phosphorus the recipe can have.
        minPotassium
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of potassium the recipe must have.
        maxPotassium
        NUMBER
        1000
        OPTIONAL
        The maxnimum number of milligrams of potassium the recipe can have.
        minSelenium
        NUMBER
        0
        OPTIONAL
        The minimum number of micrograms of selenium the recipe must have.
        maxSelenium
        NUMBER
        1000
        OPTIONAL
        The maximum number of micrograms of selenium the recipe can have.
        minSodium
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of sodium the recipe must have.
        maxSodium
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of sodium the recipe can have.
        minSugar
        NUMBER
        0
        OPTIONAL
        The minimum number of grams of sugar the recipe must have.
        maxSugar
        NUMBER
        1000
        OPTIONAL
        The maximum number of grams of sugar the recipe can have.
        minZinc
        NUMBER
        0
        OPTIONAL
        The minimum number of milligrams of zinc the recipe must have.
        maxZinc
        NUMBER
        1000
        OPTIONAL
        The maximum number of milligrams of zinc the recipe can have.
        author
        STRING
        OPTIONAL
        The username of the recipe author.
        equipment
        STRING
        pan
        OPTIONAL
        The equipment required. Multiple values will be interpreted as 'or'. For example, value could be "blender, frying pan, bowl"