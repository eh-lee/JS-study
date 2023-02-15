let strings = ["sun", "bed", "car", "dog", "cat", "dad"];
console.log(strings.sort());//ascending > ['bed', 'car', 'sun']
console.log(strings.sort(function(a, b){return a-b})); 

// console.log(strings.reverse()); //descending order

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()); //> [1, 10, 100, 25, 40, 5] 
console.log(points.sort(function(a, b){return a-b})); //> [1, 5, 10, 25, 40, 100]

//두 가지 value를 a-b 방식으로 비교해서, 음수가 나오면 b>a 양수가 나오면 a>b 0가 나오면 a==b, 
//이런 식으로 모든 걸 비교해서 정렬
//그러니까 sort 메서드에서 a, b라는 파라미터(매개변수)는 뭐..
//비교하려는 배열의 인덱스가 2개 이상이어도 상관이 없는 게
//그냥 그 솔팅하기 위해 비교하는 방식이 하나씩 서로서로 비교하기 때문에 그런 것이라.
//그니까 만약에 const points = [1, 2, 3]이라면,
//points.sort(function(a, b){return a-b})); 했을 때(문자열이 아니라 컴페어 펑션 추가된 것임)
//어떻게 작동하냐면, 1-2 = negtive, 1-3 = negative 2-3 = negative ... 어 그러면 3은 다 이겼네?
//3이 젤 크다. 1은 다 졌네? 1이 젤 작고 2는 1한테 positive네(2-1=1)? 1보다 2가 크지.
//return 오름차순으로 하면 -> [1, 2, 3]


    //lowiest
// console.log(points.sort(function(a, b){return a-b})); //> [1, 5, 10, 25, 40, 100]
// let lowiest = points[0];
// console.log(lowiest);


//?
//2==3ln
//8!=9ln
//왜냐면, //2진법> 
// Sort Compare Function
// Sorting alphabetically works well for strings ("Apple" comes before "Banana").
// But, sorting numbers can produce incorrect results.
// "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a "compare function".

// strings.sort(a,b)

