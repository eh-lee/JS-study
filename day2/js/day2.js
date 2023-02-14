//search for '???'

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
//     let userName = "eh-lee jr"
//     let msg = 'hello, ' + userName;
//     alert(msg);
// }

// showMsg(); //hellom eh-lee jr
// alert(userName); // eh-lee

//위 아래 차이 확실하게 할 것. 아래는 userName을 새로 선언하는 게 아니라 기존에 전역으로 선언된 userName의 밸루를 바꾸는 거. 
//그러니까, 아래에서 showMsg()가 한 번 돌면, userName 변수 자체의 값은 아예 체인징되는 것임.

// let userName = "eh-lee"

// function showMsg() {
//     userName = "eh-lee jr"
//     let msg = 'hello, ' + userName;
//     alert(msg);
// }

// showMsg(); //hellom eh-lee jr
// alert(userName); // eh-lee jr



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

//매개변수와 인수(Parameter && Argument)
//변수는 문이고, 인수는 그 문에 들어간 실체의 모습.
//즉, 선언 시 변수로 쓰고, 호출 시 인수로 해당 변수의 자리에 들어간다.
//ex)

//function msg(매개변수1, 매개변수2){
//  본문
// }
// msg (인수1, 인수2);


// function msgFirst(a, b) {
//     alert(a + ": " + b);
// }
// msgFirst("Ann"); //Ann: undefined
// //이처럼 매개변수의 이름은 개발자 마음이나 알기 쉽게 적는 게 맞겠쥬?


// //(중요) 매개변수2(text)에 들어가는 인수가 undefined인 경우, 매개변수2 뒤에 있는 '='의 뒷내용이 default값으로 출력됨)
// function msgSecond(from, text = "[서버 알림] " + from + "은 아무 메시지도 남기지 않았습니다.") {
//     alert(from + ": " + text);
// }
// msgSecond("Ann"); // Ann: [서버 알림] Ann은 아무 메시지도 남기지 않았습니다.



// function noMsg(){
//     alert("메시지를 입력해 주세요!")
// }
// function msg(userName, userMsg = noMsg()){
//     alert(userName + ": " + userMsg);
// }
// msg("Lee", "안녕하세요");
// msg("Lee");


// function msg(userName = "익명의 사용자" , userMsg = "확인할 수 없는 메시지"){
//     alert(userName + ": " + userMsg);
// }
// msg();

//자바스크립트에선 함수를 호출할 때마다 매개변수 기본값을 평가. 해당하는 매개변수가 없을 때는 기본값을 평가.

//break;
//https://ko.javascript.info/function-basics
//구식 자바스크립트에서 매개변수 기본값 설정하는 방법

//jump;


//// 매개변수 'count'가 `undefined` 또는 `null`이면 'unknown'을 출력해주는 함수
//// ?? : nullish 병합 연산자라고 함
// function showCount(count) {
//     alert(count ?? "not a number")
// }

// showCount(0);
// showCount(null);
// showCount();


//// return : 지시자 indicator?
////지시자 return은 함수 내 어디서든 사용할 수 있습니다. 
////실행 흐름이 지시자 return을 만나면 함수 실행은 즉시 중단되고
////함수를 호출한 곳에 값을 반환합니다.

// function sum(a, b) {
//     return a + b;
// }
// let result = sum(1,2);
// console.log(result);


// function checkAge(age){
//     if (age>=18){
//         return true;
//     } else {
//         return confirm('보호자의 동의를 받았습니까?');
//     }
// }

// let age = prompt('나이를 알려주세요', 18);

// if (checkAge(age)){
//     alert("환영합니다!");
// } else {
//     alert("접속 차단");
// }

////표현식을 여러 줄에 걸쳐 작성하고 싶다면 표현식이 return 지시자가 있는 줄에서
//// 시작하도록 작성해야 합니다. 또는 여는 괄호를 return 지시자와 같은 줄에 써줘도 괜찮습니다.


////return : The return statement ends function execution 
////and specifies a value to be returned to the function caller.

// function getRectArea(width, height) {
//     if (width > 0 && height > 0) {
//       return width * height;
//     }
//     return 0;
//   }

//   console.log(getRectArea(3, 4));
//   // Expected output: 12

//   console.log(getRectArea(-3, 4));
//   // Expected output: 0


////함수는 함수 이름에 언급되어 있는 동작을 정확히 수행해야 합니다.
////그 이외의 동작은 수행해선 안 됩니다.
////&& 함수==주석

//// ???) 소수 구하는 로직이 이해가 안 돼 이중 포문 어케 해석해 이거???
// function showPrimes(n){
//     nextPrime: for (let i = 2; i < n; i++){
//         for (let j = 2; j < i; j++){
//             if (i%j == 0) continue nextPrime;
//         }
//         alert(i);
//     }
// }


///???
// function showPrimes(n) {   //if showPrimes(5); i=2 i<5 ++2%5 =1 true 2 alert(2), i=3 3%5 !=0 true 3 alert(3)
//                             //i=4, 5%4 = 1 true 이게 아닌디?..
//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;

//       alert(i);  // a prime
//     }
//   }

//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }


// let sayHi=function(){
//     alert("hi");
// };
//     ////코드블록이 아니라 값처럼 취급됨. 고로 ';'가 필요. let sayHi = sth;

// function sayHi(){
//     alert("hi");
// }
//     ////{} 끝엔 ';'이 없어도 됨. function sayHi(){}



//콜백함수
//1
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

//     //이하 콜백함수
//     //함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 
//     //"나중에 호출(called back)"하는 것이 콜백 함수의 개념.
// function showOk(){
//     alert("동의했음");
// }

// function showCanc(){
//     alert("취소 눌러씀");
// }

// ask("동의하십니까?", showOk, showCanc);



//콜백함수
//2
// function ask(q, y, n){
//     if(confirm(q)) y()
//     else n();
// }

// ask(
//     "동의?",
//     function() {alert("동의");}, //익명 함수. 변수에 할당된 게 아니므로
//     function() {alert("취소");}  //ask() 바깥에선 접근 불가.
// )



//함수 선언문과 함수 표현식
//1

//함수 선언문 ~ 함수 선언문은 스크립트가 실제로 실행되기 전 "초기화 단계"에서 생성.
// sayHi("John"); // Hello, John

// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }

//     //함수 표현식 ~ 함수 표현식은 실행 흐름이 표현식에 다다랐을 때 만들어진다!
// sayHi("John"); // error!

// let sayHi = function(name) {  // (*) 마술은 일어나지 않습니다.
//   alert( `Hello, ${name}` );
// }

//함수 선언문 2
//but, 함수 선언문은 함수가 선언된 코드 블록 안에서만 유효.
//즉, 함수가 선언된 지역 안에만 있다면 위치는 어디든 상관 없음. 동층위상적 실행.
// "use strict";

// let age = 16; // 16을 저장했다 가정합시다.

// if (age < 18) {
//   welcome();               //  \   (실행)
//                            //  |
//   function welcome() {     //  |
//     alert("안녕!");         //  |  함수 선언문은 함수가 선언된 블록 내
//   }                        //  |  어디에서든 유효합니다
//                            //  |
//   welcome();               //  /   (실행)

// } else {

//   function welcome() {
//     alert("안녕하세요!");
//   }
// }

// // 여기는 중괄호 밖이기 때문에
// // 중괄호 안에서 선언한 함수 선언문은 호출할 수 없습니다.

// welcome(); // Error: welcome is not defined



//함수 표현식 2
//if문 밖에서, 그러니까 다른 층위의 위상에서도 welcome()을 실행하려면
//if문 밖에서, welcome을 선언하면 됨=>함수 표현식으로
// "use strict";

// let age = prompt("나이를 알려주세요.", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("안녕!");
//   };

// } else {

//   welcome = function() {
//     alert("안녕하세요!");
//   };
// }

// welcome(); // 제대로 동작



//Bonus
// let age = prompt("나이를 알려주세요!", 20);

// // console.log(age);

// //이거 ternary인데 ㅋㅋ
// let welcome = (age<18) ?
//     function() {alert("환영한당~~")} :
//     function() {alert("환영함다!!")} ;

// welcome();



//arrow function
//1. format
// let func = (arg1, arg2, ... argN) => expression

//ex1
// let sum = (a,b) => a+b;
// console.log(sum(3252, 23423));

//ex2
//인수가 하나라면 () 생략 가능
// let double = n => n*2;
// console.log(double(23542477));

//ex3
//인수가 없으면 빈 괄호
// let sayHi = () => alert("hi!");
// sayHi();

//ex4
// let age = prompt("몇 살이니?", 20);

// let welcome = (age<20) ?
//     () => alert("애기넴"):
//     () => alert("아재넴");

// welcome();


//ex5
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// console.log(sum(234,856));


//prac
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "동의하십니까?",
//     () => alert(""),
//     () => alert("")
// );


//나머지 매개변수(parameter)
//1
// function sumAll(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
// }

// console.log( sumAll(1, 4324, 223, 4557));
// console.log( sumAll(11, 24, 773, 47));
// console.log( sumAll(661, 244, 23423, 4509));


//2
//매개변수 목록(...titles)을 배열(titles[i])로 가져옴.
// function showName(firstName, lastName, ...titles) {
//     console.log(firstName + '-' + lastName);
//     //firstName && lastName 매개변수에 해당하는 인수를 위에 넣었으니까
//     //이제 나머지 아래 적는 건 titles 매개변수의 인수들이 되겠지?
//     //즉, tiltes라는 배열에 할당되겠쥬?
//     console.log( titles[0]);
//     console.log( titles[1]);
//     console.log( titles);
// }

// showName("EH", "Lee", "Poet", "Novelist", "Language Engineer");



    ///???
// function f() {
//     let showArg = () => alert(arguments[0]);
//     showArg();
// }

// console.log(f);
// f(1); // 1
// f(100);


////spread syntax
////매개변수 목록을 배열로 가져오는 게 아니라 반대로
////배열을 매개변수로 넘겨주기

////1
// console.log( Math.max(325,32423,53634,1234124356,6623434141));
// alert( Math.max(325,32423,53634,1234124356,6623434141));


////2
////Math.max는 배열이 아닌 숫자 목록을 인수로 받는다.
// let arr = [3, 5, 1];
// console.log(Math.max(arr)); //NaN Not a Number


////2-2
// let arr = [3, 5, 1];
// console.log(Math.max(...arr));


////3
// let arr1 = [4, 523, -34, 2];
// let arr2 = [24, 23, -1, 26];

// alert( Math.max(...arr1, ...arr2));

////4
// let arr1 = [4, 523, -34, 2];
// let arr2 = [24, 23, -1, 26];
// let arr3 = [2554, 243, -1, 26];

// console.log( Math.max(...arr1, ...arr2, 3, 64, 641, ...arr3));


////5
// let arr1 = [4, 523, -34, 2];
// let arr2 = [24, 23, -1, 26];
// let arr3 = [2554, 243, -1, 26];

// let mergedArrs = [3, 6, 1204, 440, ...arr1, ...arr2, ...arr3]

// console.log(mergedArrs);
// console.log(Math.max(...mergedArrs));

//6
//스프레드 문법을 통해
//문자열을 문자 배열로 변환하기
// let str = "sthsth";
// console.log([...str]); //> (6) ['s', 't', 'h', 's', 't', 'h']

//7
//Array.from == 스프레드 문법과 비슷한 내장 메서드 
//spread syntax와 달리 유사 배열 객체에도 사용 가능! 와우!

// let str = "dgsdgsd"
// console.log(Array.from(str)); //> (7) ['d', 'g', 's', 'd', 'g', 's', 'd']


//8
//배열 복사

// let arr = [1, 2, 3];
// let arrCopy = [...arr]; // 배열을 펼쳐서 각 요소를 분리후, 매개변수 목록으로 만든 다음에
//                         // 매개변수 목록을 새로운 배열에 할당함

// // 배열 복사본의 요소가 기존 배열 요소와 진짜 같을까요?
// console.log(JSON.stringify(arr));
// // alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// alert(arr === arrCopy); // false (참조가 다름)

// // 참조가 다르므로 기존 배열을 수정해도 복사본은 영향을 받지 않습니다.
// arr.push(4);
// alert(arr); // 1, 2, 3, 4
// alert(arrCopy); // 1, 2, 3


//9
//객체 복사

// let obj = { a: 1, b: 2, c: 45};
// let objCopy = {...obj} //유사 배열 객체는 스프레드 문법으로 안 된다고 했는데?..머지
                            //-> 저도 궁금해서 찾아봤는데
                                // let obj = {'key1': 'value1'};
                                // let array = [...obj]; // TypeError: obj is not iterable
                                // 이런경우에 한해서 말하는 것 같습니다.


// // 객체 복사본의 프로퍼티들이 기존 객체의 프로퍼티들과 진짜 같을까요?
// alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// // 두 객체는 같을까요?
// alert(obj === objCopy); // false (참조가 다름)

// // 참조가 다르므로 기존 객체를 수정해도 복사본은 영향을 받지 않습니다.
// obj.d = 4;
// alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
// alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// "..."은 나머지 매개변수나 스프레드 문법으로 사용할 수 있습니다.

// 나머지 매개변수와 스프레드 문법은 아래의 방법으로 구분할 수 있습니다.

// ...이 함수 매개변수의 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 '나머지 매개변수’입니다.
// 439~464lns

// ...이 함수 호출 시 사용되거나 기타 경우엔 배열을 목록으로 확장해주는 '스프레드 문법’입니다.
