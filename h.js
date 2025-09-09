// // // //let testing = 'hey'


// // // //console.log(person);//


// // // let prim = 'hello'
// // // let prim2 = prim.toUpperCase();
// // // console.log(prim2)

// // // let numbers2 = 123.456;
// // // console.log(numbers2.toFixed(0));
// // // let numStr = numbers2.toString()
// // // console.log(typeof(numStr));

// // // let randomNuM = Math.random() *10;
// // // console.log(Math.round(randomNuM))
// // // console.log(randomNuM);


// // // let days = ["Sunday" , "Monday" , 'Tuesday' , 'Wednesday' , 'Thursday' ]
// // // for ( let i = 0; i < days.length; i++){
// // // //console.log($(i): ${days[i]})
// // // console.log(i)
// // // }

// // // for(let d of days){
// // //     console.log(d)
// // // }

// // // //let stri= 'Hello'
// // // //let strAr = stri.split('')
// // // //strAr[4] = 'y'
// // // //let newStr = strAr.join('')
// // // //console.log(strAr)
// // // //

// // // const person = {
// // //     name: 'John',
// // //     age: 12,
// // //     Available : true
// // // }
// // // console.log(person.name)
// // // console.log(Object.keys(person)) //shows keys
// // // console.log(Object.values(person))
// // // console.log(Object.entries(person))

// // // let newAr = Object.entries(person)
// // // let newArs = [ [ 'name', 'John'], ['age',12], [['Available'], true]]
// // // console.log(newArs.flat(2))


// // //     function add(){
// // //      console.log(2 + 2)
// // //     }
// // //     add()

// // //     function add(){
// // //         let first = 2
// // //         let second = 3
// // //         return first + second
// // //         console.log(first + second)
// // //     }

// // //     function sub(a, b){
// // //         return a - b
// // //     }

// // //     function greet(name){
// // //         let greet = `Welcome ${name}`
// // //         return greet
// // //     }

// // //     console.log(greet('kate'))
// // //     console.log(sub(10, 5))

// // //     const multiply = function(x, y){
// // //         return x * y
// // //     }
    
    
// // //    // console.log(multiply(3, 3))

// // //     const arradd = (a, b) => a + b
// // //    // console.log(arradd(3, 5))

// // //     //const arrSal = (name = 'Guest') => `Welcome ${name}`
// // //     //console.log(arrSal(mike))

// // //     (function(){
// // //         console.log("I swim automatically")
// // //     })();
    
// // //drink = "fanta"

// // //console.log((drink == "coke"|| drink =="fanta") ? "coool" : "not cool")


// //   //switch case
  

// //   //switch(letter){
// //    // case "a":
// //    // case "e":
// //    // case  "i":
// //    //   case "o":
// //       //  case "u":
// //             //console.log('vowel')      
// //           //  break
// //           //n  default:
// //                 //console.log(consonant)     
  

// //   // for loop 

// // //   for(let count = 1; count <=10; count++){
// // //     console.log('John Doe')
// // //     //document.writeln(count + ".John doe <br />")
// // //   }

// // //   for( let p = 1; p<=10; p++){
// // //     console.log(p)
// // //   }

// //   //while loop 
  
// // //   x=0
// // //   while (x <= 10){
// // //     x++
// // //     if(x == 5){
// // //         continue
// // //     }
// // //     console.log(x)
// // //   }
  
// // //|| = or in javascript
  
// // //functional expression
// // // const greet = function(){

// // //   console.log("Good morning")
// // // }

// // // greet()


// // // callback function
// // //const  askQuestion = function(){

// //   //let answer = prompt("what is the capital of Nigeria ?")

// //   //return (answer == "Abuja" || answer == "abuja") ? true : false
// // //}

// // //const wrongAnswer = function(){
// // //console.log("Wrong answer!")
// // //}

// // //const correctAnswer = function(){
// //   //console.log("Correct answer!")
// // //}

// // const quiz = function(askQuestion, correctAnswer, wrongAnswer){
// //   /if (askQuestion() == true){
// //     correctAnswer()
// //   }else{
// //     wrongAnswer()
// //   }     
// // }
// // quiz(askQuestion, correctAnswer, wrongAnswer)



// //  function calculator(s1, s2, add){

// //    const result =add(s1, s2)
// //    console.log(result)
// //  }

// //  function add(a, b){
// //    return  a + b
// //  }
// //   calculator(20, 30, add)
        
// //  const greetings = () => "Good morning"
// //  console.log(greetings())
  
// //  const add = (a, b) => a + b
// //  console.log(add(60, 11))

// //  age = 17
// //  let message = (age >= 18) ? () => alert('old enough') : () => alert("Too young!")

// // message()

// // let person = {
// //   name : "Tunde",
// //   age : 28,
// //   hobbies : ["Swimming" , "Golf" , "ball"],
// //   info: function(){
// //     console.log(`Name: ${this.name}\nage: ${this.age}\nHobbies: ${this.hobbies}`)
// //   }

// // }
// // Array of image file names in order
// const images = [
//   'Amal (1).jpg', 'Amal (2).JPG', 'Amal (3).jpg', 'Amal (4).jpg', 'Amal (5).jpg',
//   'Amal (6).jpg', 'Amal (7).jpg', 'Amal.1.jpg', 'Amal (1).PNG'
// ];

// let currentIndex = 0;
// const galleryImage = document.getElementById('galleryImage');
// const prevArrow = document.getElementById('prevArrow');
// const nextArrow = document.getElementById('nextArrow');


// function updateImage(index) {
//   galleryImage.src = images[index];
//   galleryImage.alt = `Swimming ${index + 1}`;
// }


// prevArrow.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateImage(currentIndex);
//   }
// });


// nextArrow.addEventListener('click', () => {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     updateImage(currentIndex);
//   }
// });
