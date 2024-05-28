//1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ობიექტს და დააბრუნებს მის name 
//ფროფერთის მნიშვნელობას. თუ name ფროფერთი არ გააჩნია, დაარეთარნეთ null.
// function getObject(object){
//     if(object && typeof object === 'object' && "name" in object ){
//         return object.name
//     }
//     return null
// }
// console.log(getObject({"name":"sergi"}))
//2. გადააწყეთ პირველი დავალება try/catch-ის გამოყენებით. თუ name ფროფერთი არ გააჩნია,
// გაისროლეთ ერორი და შემდეგ გაუმკლავდით.
// function getObject(object){
//     try{
//         if(!('name' in object)){
//             throw new Error('no name in object')
//         }
//         return object.name
//     } catch(error){
//         return error.message
//     }
// }
// console.log(getObject({"name":"sergi"}))

//3. დაწერეთ ფუნქცია, რომელიც იღებს ორ რიცხვს პარამეტრებად და ცდილობს მათ გაყოფას. 
//თუ რომელიმე რიცხვის ტიპის არაა, გაისროლეთ ერორი. ასევე გაუმკლავდით იმ შემთხვევასაც, როცა
// მეორე რიცხვი 0-ია (0-ზე გაყოფა არ შეიძლება).
// function divideNumbers(num1,num2){
//     if(isNaN(num1) || isNaN(num2)){
//         throw new Error('invalid numbers')
//     }
//     if(num2 === 0){
//         throw new Error('cant divide on 0')
//     }
//     return num1 / num2
// }
// try{
//     console.log(divideNumbers(20,10))
// }catch(error){
//     console.log(error.message)
// }


//4. დაწერეთ ფუნქცია სახელად promptAge, რომელიც შეეკითხება მომხმარებელს თავის ასაკს და
// თუ არასწორად იქნება ასაკი შემოყვანილი, გასივრის ერორს. ეს ფუნქცია გამოიძახეთ isAdult ფუნქციაში,
// რომელიც ადგენს არის თუ არა მომხმარებელი სრულწლოვანი. გამოიყენეთ try/catch ერორების გასამკლავებლად.
// promptAge = () =>{
//     const age = Number(prompt('enter your age'))
//     if(isNaN(age) || age === 0){
//         throw new Error('invalid number')
//     }
//     return age
// }
// isAdult = () =>{
//     let age = promptAge()
//     if(age >= 18){
//         return 'adult'
//     }else{
//         return 'minor'
//     }
// }
// try{
//     console.log(isAdult())
// }catch(error){
//     console.log(error.message)
// }


//5. დაწერეთ ფუნქცია, რომელიც ცდილობს JSON სტრინგის პარსინგს (მაგალითად სტრინგად ჩაწერილ
// ობიექტს გადაიყვანს ობიექტში). გამოიყენეთ try/catch იმ ქეისებისთვის, როცა JSON სტრინგი არავალიდურია.
//  function parse(objString){
//      return JSON.parse(objString)
//  }
// try{
//      console.log(parse('{"name": "sergi", "age": 18}')) 
//     } catch (error){     
//         console.log(error.message)
//  }

//6. დაწერეთ ფუნქცია, რომელიც აგზავნის რექვესთს GitHub-ის API-ზე და მოაქვს გითჰაბის იუზერის დატა.
// (მაგალითად: https://api.github.com/users/temuritsutskiridze). თუ სასურველი პასუხი ვერ
// მიიღეთ (როცა response.ok არის false), გაისროლეთ ერორი და გამკლავდით მას.
// გამოიყენეთ async/await სინტაქსი.
// async function fetchGithubUserData(){
//     const response = await fetch('https://api.github.com/users/sergiojaa')
//     if(!response.ok){
//         throw new Error('failed to fetch data')
//     }
//     const data = await response.json()
//     console.log(data)
// }
// try{
//     fetchGithubUserData()
// } catch(error){
//     console.log(error.message)
// }