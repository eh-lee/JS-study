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