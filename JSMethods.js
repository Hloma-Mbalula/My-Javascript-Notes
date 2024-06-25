

//Some important JS Methods to uncderstand

//ARRAY METHODS

//  forEach Method

//This method mutates the array which it is called upn

    const carBrands = ['Benz', 'BMW', 'Porsche', 'Audi', 'Toyota']

// forEach( callback func( value, inde, array) )

//These High order functions take item, index, array as parameters

function consoleItem (item, index, arr){
    console.log(item)
}
carBrands.forEach(consoleItem)

// Or we could write it as an inline/arrow function

carBrands.forEach( (item, index, arr) => {
    console.log(item, index)
})

//We could sue it to sum items in the array

const numbers = [1, 2, 3, 4, 5]

let sum = 0

numbers.forEach((item, index, arr) =>{
    sum += item;
})

            //OR

numbers.forEach( item => {
    sum += item
})

const letters = ['a', 'a', 'i', 'b', 'd', 'c', 'd', 'e']

let count = {}

letters.forEach(item =>{
    if( count[item]) {
        count[item]++
    }else {
        count[item] = 1
    }
})

//if we console logged out count we'd get : {a: 2, b: 1, c: 1, d: 2, e}




            // MAP Method

            //This method returns a new mutated array

            // .map(funct)

const integers = [1, 2, 3, 4, 5]

const integersDouble = integers.map(double)
//gives us a new array with the double function applied to each element

function double(value, index, arr){
    return value * 2
}

const products = [{
    name: 'laptops', 
    price: 1000,
    quantity: 5
}, {
    name: 'desktop', 
    price: 5000,
    quantity: 3
}, {
    name: 'phone',
    price: 500,
    quantity: 3
}
]

const totalProductsValue = products.map( item => {

    return item.price * item.quantity
})



                // FILTER METHOD

                //RETURNS A NEW ARRAY FOR WHICH THE CONDITION IS TRUE/FALSE FOR CERATIN VALUES OF AN ARRAY

                //DOES NOT MODIFY THE ORIGINAL

const numerals = [1, 2, 3, 4, 5, 6]

const evenNumbers = numerals.filter(element => {
    return element % 2 === 0
})//RETURN A NEW ARRAY WITH EVEN NUMBERS


                //REDUCE METHOD

                //EXECUTES A CALLBACK FUNCTION ON EACH ELEMENT OF AN ARRAY AND RETURNS A SINGLE VALUE

                //.reduce( callback function, initial value )

                //The accum is added as a parameter here

                    //Keeps track of the value which will be returned at the end, initialised by 0 in this case

const arr = [150, 30, 33, 500]

const total = arr.reduce( sum, 0 )// If we don't provide 0 here, the initial value will be the first value of the given array

function sum( accumulator, value){
    return accumulator + value
} 

//RETURN A MAX VALUE WITH THE REDUCE 

const max = arr.reduce(callback, -Infinity)

function callback ( accumulator, value ){
    if ( accumulator > value ){
        return accumulator
    }else{
        return value
    }
}

                    //SLICE METHOD

                    //EXTRACTS ELEMENTS FROM AN ARRAY AND RETURNS THEM AND DOES NOT MODIFY THE ARRAY

                    // .slice(start, end)

                        //inclusive,  Not inclusive

const newArr = [1, 2, 3, 4, 5]

const otherArr = newArr.slice(1, 4)


                    //SPLICE METHOD 

                    //Changes an array by removing or replacing elements from it

                    // .splice( start, count(how many elements you want to remove), elements you want to add(optional) )

                    //mutates the original array


const array = [1, 2, 3, 4, 5]

array.splice( 2, 3) //removes three elements starting from index 2

array.splice( 1, 0, 6, 7) //This adds 6 and 7 to the array without removing any elements

                    

                    // SORT METHOD

                    // SORTS THE ELEMENTS OF AN ARRAY BY MANIPULATING THE ARRAY
                    // DEFAULT ORDER IS ASCENDING

                    // CONVERTS THE ELEMENTS TO STRINGS


const names = ['Hloma', 'Alutha', 'Yolisa', 'Thobani', 'Kala', 'Shado']

names.sort()

console.log(names)


const arrOfNum = [ 1, 2, 3, 4, 5]

arrOfNum.sort() //This does not work for numbers as it converts it to strings

// To sort numbers we would need to declare a compare function

function compare(a, b){
    //The outcome of this function decides what comes first

    // if the return of this function is :

            // less than zero than a comes first

            // is zero, nothing will change

            // bigger than zero, b comes first
    return a - b
}

arrOfNum.sort(compare) // Now this works - ascending order


                    // CONCAT METHOD

        // Merge 2 or more array to return a new array

        // Does not mutuate the original array
const a = [1, 2, 3, 4]
const b = [5, 6, 7, 8]
const c = [9]

const d = a.concat(b,c)


                    // FILL METHOD


                    // Changes all the elements inside the array with the provided value

                    // Mutates the array

                    // .fill( value, start, end )

const toZero = [1, 2, 3, 4, 5]

toZero.fill(0) // replaces all the elements with 0

   

                    // INCLUDES METHOD

                    // FIND IF AN ELEMENT IS INCLUDED IN AN ARRAY

                    // RETURNS A BOOLEAN 

const fruits = [ 'apple', 'banana', 'oranges']

const res = fruits.includes('apples') // Returns a boolean 


                    // JOIN METHOD

                    //



















