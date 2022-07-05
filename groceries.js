const groceries = list => {
    //variable for the string being created
    let listString = ''
  //loop through the object
    for (let i=0; i<list.length; i++) {
  //listString will add list[i].item to itself
      listString += list[i].item;
    // if i is less than list length -2
    //so the one before the last one 
      if (i < list.length - 2) {
  
        listString += ', ';
        //before the last item
      } else if (i == list.length -2){
        listString += ' and ';
      }
    }
    // return the string
    return listString;
  }
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ))