var a=document.getElementById("a").value
var s=a.replace(/[^aeiouAEIOU]/g,"")
let aa=()=>{
    var a=document.getElementById("a").value
    var s=a.replace(/[^aeiouAEIOU]/g,"")
    alert(s)
}
let bb=()=>{
    var a=document.getElementById("a").value
    var s=a.replace(/[^aeiouAEIOU]/g,"")
    alert(s.length)
}
let cc=()=>{
    var a=document.getElementById("a").value
    var s=a.replace(/[^ B C D F G H J K L M N P Q R S T V W X Y Z]/g,"")
    alert(s)
}
let dd=()=>{
    var d=document.getElementById("d").value
    let date=new Date(d)
    let td=new Date()
    let tdiff=td.getTime()-date.getTime()
    alert(Math.floor(tdiff/(24*60*1000*60))+" Days Completed in This World")
}
let n=[1,2,3,4,5];
n.forEach((i,v)=>console.log(v));
