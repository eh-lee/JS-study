// alert("set okay?");

    //// Function Decalaring

// function showMessage(매개변수){
//     함수 본문   
// }

// function showMessage(매개변수1, 매개변수2, ...){
//     함수 본문   
// }    
////매개변수 = 파라미터

    //// Calling

// function team4(){
//     alert("4조 파이팅!!")
// }
// team4();

// function tired(){
//     let tired = confirm("당신은 자고 싶습니까?")
//     alert(tired);
// }
// tired();
// tired();
// tired();


    ////Variable
// let percentage = Math.floor(Math.random()*100);
// let tiredCase = ('피로도는' + percentage + '%입니다!');

// function tiredSecond(){
//     confirm("당신은 정말 피곤하십니까?")
//     alert("당신의 " + tiredCase);
// }
// tiredSecond();


// let userName = "eh-lee"

// function showMsg() {
//     userName = "eh-lee jr"
//     let msg = 'hello, ' + userName;
//     alert(msg);
// }

// console.log(userName); // eh-lee
// console.log(showMsg); // 함수도 객체이므로 '()'을 제외하고 쓰면 해당 매개변수인 펑션의 내용이 나옴.
// console.dir(showMsg); //
// console.log(console); //
// showMsg();
// console.log(userName); // hello, eh-lee jr


// let userName = "eh-lee"

// function showMsg() {
//     userName = "eh-lee jr"
//     let msg = 'hello, ' + userName;
//     alert(msg);
// }

// showMsg();
// alert(userName); // 질문) hello, eh-lee jr <- 이게 맞는데?.. 왜 eh-lee가 나와야 한다고 하지 https://ko.javascript.info/function-basics

//*전역 변수는 최소화하기


    ////매개변수(파라미터)
// function msg(from, text){
//     alert(from + ': ' + text);
// }
// msg('Ann', 'Hello!') //Ann: Hello!
// msg('Lee', 'u there?') //Lee: u there?


// function msg(from, text){
//     from = "*" + from + "*";
//     alert(from + ': ' + text); //== alert("*" + from + "*" + ": " + text);
// }

// msg('Lee', "hi!");

// let from = "Ahn";
// msg(from, "Hi!");
//     //==msg('Ahn', 'Hi!');

// alert("Last MSG by " + from);

    //변수는 문이고, 인수는 그 문에 들어간 실체의 모습.
    //즉, 선언 시 변수로 쓰고, 호출 시 인수로 해당 변수의 자리에 들어간다.
    //ex)

    //function msg(매개변수1, 매개변수2){
    //  본문
    // }
    // msg (인수1, 인수2);


