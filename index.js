// Change document background color to
// silver

document.getElementById('body').style.backgroundColor="silver";


// Change the font color for h1 title tag to
// green
document.getElementById('title').style.color = "green"
document.getElementById('title').style.textAlign = 'center'
document.getElementById('title').style.fontSize = '50px'
document.getElementById('p').style.fontSize = "34px"
document.getElementById('p').style.color = "purple"
document.getElementById('p').style.marginLeft = "5%"
document.getElementById('p').style.fontWeight = "bold"



// Change the font case for h3 title tags to
// uppercase
document.getElementById('h3').style.textTransform = "uppercase"
document.getElementById('vegs').style.textTransform = "uppercase"
// Add one more fruit to the fruits list
let fruit = document.createElement('li');
fruit.innerHTML = "Pineapple"
document.getElementById('fruList').appendChild(fruit)
document.getElementById('h3').style.marginLeft = "10%"



// Add one more vegetable to the vegetables
// list
let vegetable = document.createElement('li');
vegetable.innerHTML = "Spinach"
document.getElementById('vegList').appendChild(vegetable)

document.getElementById('groceries').style.marginLeft = "10%"

