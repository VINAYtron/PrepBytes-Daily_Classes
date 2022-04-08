// $(".head").click(function(){
//     $("p").hide()
// })

// $("#abc").dblclick(function(){
//     $("p").toggle()
// })

// $(".head").click(function(){
//     $(this).hide()
// })

// $("#abc").dblclick(function(){
//     $("p").style.display ="none"
// })


//AJAXS

// $("button").click(function(){
//     $.ajax({
//         url: "http://jsonplaceholder.typicode.com/todos",
//         type : "GET",
//         success: function(data){
//             console.log(data);
//         }
//     })
// })



//classes
class A {
    constructor(name) {
        this.username = name
    }
    printName() {
        console.log("name is:", this.username);
    }
}
var a = new A("grishma")
a.printName()
console.log(a.username);

class B extends A {

}