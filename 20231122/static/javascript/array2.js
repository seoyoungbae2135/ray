// script_array2.html link

//let num =[10,20,30,40,50,60];

// num 배열에 10단위로 100까지 숫자를 추가로 저장하세요

//num.push(70,80,90,100);
// num.push(70);
// num.push(80);
// num.push(90);
// num.push(100);

//document.write(num)

// num배열에 저장된 숫자를 한줄씩 출력하세요

// me
// for(var i=0; i<num.length; i++){
//     document.write(num[i]+"<br>");
// }

// // teacher
// for(var i=0; i<num.length; i++){

//     document.write(num[i]+"<br>")
// }

// num배열에 저장된 숫자들에게 +3을 해주고 결과를 출력하세요
// me
// for(var i=0; i<num.length; i++){
//     num.splice([i], 0, [i]+3);
//     document.write(num[i]+"<br>")
// }

// for(var i=0; i<num.length; i++){
//     num[i] = num[i]+3;
//     document.write(num[i]+" ");
// }

// num 배열에서 55보다 큰 숫자들만 출력하세요
// me
// for(var i=0; i<num.length; i++){
//     if(num[i]>55){
//         document.write(num[i]+" ");
//     }
// }
// for(var i=5; i<num.length; i++){
//     document.write(num[i]+" ");
// }

// // teacher
// for(var i=0; i<num.length; i++){
//     if(num[i]>55){
//         document.write(num[i]+" ");
//     }
// }

let num1 = [1,2,3];
let num2 = [4,5,6];
//두배열에 같은 인덱스위치에 있는 숫자들끼리의 합을 출력하세요
// 결과 5,7,9
// me
// for(var i=0; i<num1.length; i++){
//     for(var k=0; k<num2.length; k++){
//     }
//     var sum = [i]+[k];
//     document.write(sum+" ");
// }
// teacher
// for(var i=0; i<num1.length; i++){
//     document.write((num1[i]+num2[i]+" ")); // 인덱스가 같으면 변수i는 num1, num2에 공용적용
// }

// num1과 num2 배열에서 짝수에 해당하는 숫자만
// num3이라는 배열에 저장하고 출력
// me
let num3 = new Array();

// for(var i=0; i<num1.length; i++){
//     if([i]%2==0){
//         num3.push([i]);
//     }
//     for(var k=0; k=num2.length; k++){
//         if([i]%2==0){
//             num3.push([k]);
//         }
//     }
// }
    document.write(num3+" ");
// teacher

for(var i=0; i<num1.length; i++){
    if( num1[i]%2==0)
        num3.push(num1[i]);
    if(num2[i]%2==0)
        num3.push(num2[i]);
}
document.write(num3.sort().reverse()); // 정렬 역정렬 하려면 sort, reverse 적용

// 2023.11.22 과제
// 한화 이글스 투수들의 평균 자책점
// name=["주현상","윤대경","이민우","이태양","페냐","박상원","장시환"]
// era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38]
// era -> 평균자책점
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치 이상인 선수들이 누구인지 출력하시오
// 입력없음, 출력만 하면 됨

