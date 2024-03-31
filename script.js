/*//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md*/

// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
/*
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const obj = new Movie ("kung Fu Panda","DreamWorks Animation",7.6);
console.log(obj)
*/

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
/*
class Movie {
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const obj = new Movie ("kung Fu Panda","DreamWorks Animation",7.6);
console.log(obj)
console.log(obj.title,obj.studio,obj.rating)
const obj1 = new Movie ("kung Fu Panda 4","DreamWorks Animation");
console.log(obj1)
console.log(obj1.title,obj1.studio,obj1.rating)
*/

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

/*
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movies = [
    new Movie("kung Fu Panda"," DreamWorks Animation", 7.6),
    new Movie("kung Fu Panda 4"," DreamWorks Animation","PG"),
    new Movie("Finding Nemo", "Pixar Animation Studios", "G"),
    new Movie("Batman Dark knight", " WB", "PG")
];

const NewMovies = Movie.getPG(movies);
console.log(NewMovies);
 

*/

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

/*
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const obj = new Movie ("Casino Royale","Eon Productions","PG-13");
console.log(obj)
console.log(obj.title,obj.studio,obj.rating)
*/

// ===========================================================================================================
/* 2. //https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md */

/*
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return ("Circle[radius= "+this.radius+ ", color = "+this.color+"]");
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj3= new Circle(1.0,"red") 
console.log(obj3.Radius);
console.log(obj3.Color);
console.log(obj3.toString);
console.log(obj3.area);
console.log(obj3.circumference);
*/

// ===========================================================================================================

// 3.Write a “person” class to hold all the details.
// name,age,gender,martial status,contact,email
/*
class Person {
    constructor(name1,age,gender,martialStatus,contact,email){
        this.name1 =name1;
        this.age = age;
        this.gender = gender;
        this.martialStatus = martialStatus;
        this.contact = contact;
        this.email = email;
    }
}
const obj = new Person ("Moosha","25","male","single","9940580229","moosha31@gmail.com");
console.log(obj);
console.log(obj.name1,obj.age,obj.gender,obj.martialStatus,obj.contact,obj.email);
const obj2 = new Person ("Akmal","31","male","married","123456789","sample@gmail.com");
console.log(obj);
console.log(obj.name1,obj.age,obj.gender,obj.martialStatus,obj.contact,obj.email);
*/

// ===========================================================================================================

// 4.write a class to calculate the Uber price.
/*
class uberPrice
{
    constructor(
        basePrice, 
        costPerKiloMeters,
        costPerMinute
        ) 
        {
        this.basePrice = basePrice;
        this.costPerKiloMeters = costPerKiloMeters;
        this.costPerMinute = costPerMinute;
        }

        calculateAmount(distance, time)
        {
            let amount = this.basePrice + (distance * this.costPerKiloMeters) + (time * this.costPerMinute);
            return amount
        }
}
const calculate = new uberPrice(40, 14,1.5)
let distance = 20 
let time = 60
let totalAmount = calculate.calculateAmount(distance, time)
console.log(totalAmount);
*/