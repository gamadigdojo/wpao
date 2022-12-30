{/* <script>
function a(){
    if(true) var x = 10
    console.log(x)
}
a()

// let b = 10
// let b = 20
// console.log(a)


</script> */}

// var s = "Hello World\n";
// var s2 = 'Hello World\n';
// var s3 = `Hello World! ${s2}\n`

// console.log(s,s2,s3)

// const i = 5;
// const f = 5.9;

// const numberString = i + f + s
// console.log(numberString)

// let isTrue = true
// isTrue = isTrue
// console.log(isTrue)

// let sum = 5 + 10;
// sum += 10;

// console.log(sum)

// const a = "2";
// const b = 2

// if(a == b) console.log("equals")
// else console.log("not")

// console.log((a === b)? "true":"false")

// for(let i=0;i<10;i++){
//     console.log(i)
// }

// function sumTwoNumber(x,y){
//     return x+y
// }

// const mulyiplyTwoNumber = function(x,y){
//     return x+y
// }

// console.log(sumTwoNumber(8,8))
// console.log(mulyiplyTwoNumber(9,9))

const navbar = document.getElementById('navbar');
let prevYpos = 0;

window.onscroll=function(){
    const Ypos = window.scrollY;
    if (Ypos > prevYpos){
        navbar.style.top = navbar.offsetHeight * -1 + 'px';
    }else{
        navbar.style.top = '0px';
    }
    prevYpos = Ypos;
}

