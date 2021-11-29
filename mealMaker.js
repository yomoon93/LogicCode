const menu = {
    _courses:{
      appetizers:[],
      mains:[],
      desserts:[]
    },
  
  
  get appetizers(){  
    return this._courses.appetizers
  },
  get mains(){
    return this._courses.mains
  },
  get desserts(){
    return this._courses.desserts
  },
  set appetizers(appetizer){
    this._courses.appetizers = appetizers
    },
  set mains(mains){
    this._courses.mains = mains
    },
  set desserts(desserts){
    this._courses.desserts = desserts
    },
    get courses(){
    return {
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts,
    };
  },
  
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name:dishName,
        price:dishPrice,
      } 
      return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex]
    
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name}, ${main.name}, and your dessert ${dessert.name}.The total price is ${totalPrice}`
    }
  };
  
  
  
    menu.addDishToCourse('appetizers','meatballs', 11.50)
    menu.addDishToCourse('appetizers','mozzarella sticks', 5.00)
    menu.addDishToCourse('appetizers','spinich dip', 8.50)
    menu.addDishToCourse('mains','chicken',20.00)
    menu.addDishToCourse('mains','steak',20.00)
    menu.addDishToCourse('mains','tacos',20.00)
    menu.addDishToCourse('desserts','cookies and ice cream',12.00)
    menu.addDishToCourse('desserts','brownies and ice cream',10.00)
    menu.addDishToCourse('desserts','cake',7.00)
    'cake'
    
    
    let meal = menu.generateRandomMeal()
    console.log(meal)