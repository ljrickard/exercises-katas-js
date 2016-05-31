function peopleWithAgeDrink(age){
	if(age<0||age==null||isNaN(age)){
		return "InputNotValid";
	} else if(age<=13){
		return "drink toddy";
	} else if(age<=17){
		return "drink coke";
	} else if(age<=20){
		return "drink beer";
	} else {
		return 'drink whisky';
	}
}