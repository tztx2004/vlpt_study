import React from "react";

type GreetingsProps = {
    name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    <div>Hello, {name}</div>
);


// const player: readonly [string, number, boolean] = ["nico", 1, true]

// let a : undefined = undefined
// let b : null = null



// type Age = number;
// type Name = string;
// type Player ={
//     readonly name: Name;
//     age?: Age;
// }

// const playerNico:Player  = {
//     name: "nico",
// };

// const playterLynn:Player={
//     name:"lynn"
// }

// const playerMaker = (name:string):Player =>({name})
// const nico = playerMaker('nico')
// nico.age = 12




// let a : unknown;

// if(typeof a === "number"){
//     let b = a+1
// }
// if(typeof a === "string"){
//     let b = a.toUpperCase();
// }


// function hello(){
//     return "x"
// }
// const a = hello()
// a.toUpperCase()

// call signatures
// type Add = (a:number, b:number) => number



// overloading
// type Add = 
// {
//     (a:number, b:number) : number
// }

// const add:Add = (a,b)=>a+b


// type Config = {
//     path: string,
//     state: object
// }

// type Push = {
//     (path:string):void
//     (config: Config):void;
// }

// const push: Push = (config)=>{
//     if(typeof config ==="string") console.log(config)
//     else {
//         console.log(config.path)
//     }
// }


// type Add2 = {
//     (a:number, b:number):number
//     (a:number, b:number, c:number):number
// }
// const add2:Add2 = (a,b,c?:number)=>{
//     if(c) return a+b+c
//     return a+b
// }

// // poly
// type SuperPrint = 
//     <T,M>(a:T[], b:M)=>T
// const superPrint: SuperPrint = (arr)=>arr[0]

// superPrint([1,true, "str"],"x")



// // conclusion
// type Player<E>= {
//     name:string
//     extraInfo:E
// }

// type NicoExtra = {
//     favFood:string
// }
// type NicoPlayer = Player<{favFood:string}>


// const nico: NicoPlayer={
//     name:"nico",
//     extraInfo:{
//         favFood:"kimchi"
//     }
// }

// const lynn:Player<null> ={
//     name:"lynn",
//     extraInfo:null
// }

// type A = Array<number>
// let a:A = [1,2,3,4]
// function printAllNumbers(arr:Array<number>){}


abstract class User{
    constructor(
        protected firstName:string,
        protected lastName:string,
        public nickName:string
    ){}
    abstract getnickName():void
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User{
    getnickName(){
        console.log(this.firstName)
    }
}
const nico = new Player("nico","las","니꼬")
nico.getFullName()


type Words = {
    [key:string]: string
}

class Dict{
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term] = word.def
        }
    }
    def(term:string){
        return this.words[term]
    }
    update(word:Word){
        if(this.words[word.term]!==undefined){
            this.words[word.term]=word.def
        }
    }
    del(term:string){
        if(this.words[term]!==undefined){
            delete this.words[term]
        }
    }
}

class Word{
    constructor(
        public term: string,
        public def : string
    ){}
}
const kimchi = new Word("kimchi","한국의 음식")

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")

// let dict :Words = {
//     "patato":"Food",
//     "rice":"Also food"
// }

type Team= "red" | "blue" | "yellow"
type Health = 1 | 5 | 9
interface Player2 {
    nickname:string,
    team:Team,
    health:Health
}
const nico2 : Player2 = {
    nickname:"nico",
    team : "red",
    health:1
}

interface User2{
    name: string
}
interface player3 extends User2{

}
const nico3: player3 ={
    name:"nico"
}

interface UserA{
    firstName:string,
    lastName:string
    sayHi(name:string):string
    fullName():string
}
interface Human{
    health:number
}
class PlayerA implements UserA, Human{
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
} 

function makeUser(user:UserA){
    return "hi"
}

makeUser({
    firstName:"first",
    lastName:"first",
    fullName:() => "first",
    sayHi: (name)=> "string",

})

interface SStorage<T>{
    [key:string]: T
}

class localStorage<T>{
    private storage: SStorage<T> ={}
    set(key:string, value:T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new localStorage<string>()
stringStorage.get("t")

const booleanStorage = new localStorage<boolean>();
booleanStorage.get("xxx")


export default Greetings;
