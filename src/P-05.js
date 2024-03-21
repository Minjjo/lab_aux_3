/*function sortFruits(fruits) {
	return fruits.sort();
} 

function getElementInTheMiddle(list) {
	return list[list.length / 2];
}

function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
} */

//ARROW FUNCTIONS
// 1)
const sortFruits = fruits => fruits.sort();

// 2)
const getElementInTheMiddle = list => list[list.length / 2];{
    
}

// 3)
const adminLogin = user => user == "ADMIN" || user == "DEV";