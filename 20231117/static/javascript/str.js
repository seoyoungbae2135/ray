// script_string.html link
// 문자열
//자바스크립트에서 문자열은 "string객체" 라는것으로 저장이되고
//사용된다. String객체에는 다양한 문자열을 처리하기위한 "메서드"가 있다.

// 1.문자열의문자 갯수가 몇개냐? - length

var word = "member";
var len = word.length;
console.log(`문자열 갯수 : ${len}`);

// 2. 문자열에서 한글자만 가져오기 - charAt() -> (메서드 라고 한다)

var at = word.charAt(3);
console.log(at);

//3. 문자열에서 특정문자또는 문자열이 있냐 어디에 있냐? - indexOf()
word = "i like html";
var idx = word.indexOf("like"); // 
console.log(idx);
if(word.indexOf("love")==-1){  //문자열에 검색문자또는 문자열이 없다면 -1
    console.log("love는 없다");
}
//4. indexOf는 문자열의 첫번.째부터 검색을 하기때문에
//  뒤쪽에 있는 문자나 문자열이 결과로 나오지 않을 수 있다
// lastIndexOf() -> 문자열의 뒤쪽에서부터 검색

// 5.replace -> 문자열에서 특정문자열을 다른문자열로 변경
word = "i, like css";
var word2 = word.replace("like", "love"); //원본은 바뀌지 않기때문에 변경하려는 문자는 다른변수에 저장해야한다
console.log(word2);
// 불필요한 문자를 제거하기위한 방법으로도 사용한다. (없는문자를 삽입할때도 사용)
var word2 = word.replace(",", " "); // 숫자만 추출할때 적용한다.
console.log(word2);

// 정규표현식
// g (global) : 문자열내의 모든 패턴 검색
// i (ignore case) : 대소문자 구별없이 검색
word = "i like css like like";
word2 = word.replace(/like/gi, "love");
console.log(word2);

//정규표현식의 기본구조 - /regexr/i (/패턴/플래그) ,  /값/표현식 ( like/g )
//  /.[A-Z]/g - 1문자와 대문자의 조합을 문자열 전체에서 검색
//  replace( /\-/g, '') - 특정문자 제거 ( - 를 모두 제거) 
const regex = /good/; // good이라는 단어가 있는지 검색하기위한 표현식 생성
var test = "banana apple cat good nice good cat apple cat good";

console.log(regex.test(test)); // .test() - 문자열에 패턴이 존재 하는지 알려준다. ( true, false)
console.log(test.match(regex)); // .match() - 패턴에 매칭되는 문자열들을 가지고 온다.

// i - ignore case 대소문자 구멸없이 검색
// g - global 문자열내 모든 패턴 검색
// m - multi line 문자열의 행이 바뀌더라도 검색을 계속한다(여러줄의 문자열을 검색)
// s - 모든문자 검색(특수문자포함), 문자열에 보이지않는 문자 까지 검색 (\n, \r, \t, \p, \a 등등)
// u - 유니코드검색 ()
// y - stiky 문자열내 특정위치에서 검색을 진행 

console.log( test.match( /cat/g)); // cat를 모두 찾는다.
word = "banana \napple \nmember!!"; // \n은 줄바꿈이다, 여러줄로 된다.
console.log(word.match( /apple/ ));
console.log(word.match( /^apple/gm )); // ^apple : 문장이 apple로 시작하는지 검사 m을 넣어야 한다.

//정규표현식 기호
/*
패턴에 널는 기호
    영어알파벳 : a-z,(소문자a부터z까지) A-Z (대문자a부터z까지) 범위검색
    한글 : ㄱ-ㅎ, (ㄱ부터 ㅎ 까지)
    숫자 : 0-9  (범위로 검색)
    모든문자열 : . (숫자,한글 영어 특수기호 공백 전부해당 ) 단, 줄바뀌면 안됨. gm을 써서 해야 여러줄 검색
    \d : 숫자전체를 검색
    \D : 숫자가 아닌것 검색
    \w : 영숫자 문자 검색 (A-Za-z0-9)와 동일
    \W : 영숫자 아닌것만 검색 
    \s : space바로 만든 공백 검색
    \S : space 공백아닌것 검색

    패텀 검색 기준
    /패턴/
    | - or을 의미 ( / \D | \S /) 둘중 하나만 검색한다
    [] : or처리 묶음 (/[123]/) -> 1|2|3 1또는 2또는 3을 검색 /[다-아]/  다|라|마|바|사|아  이와같이 or를 여러개 하여 검색
    ^문자열 : 특정문자열로 시작(행의 시작점)
    문자열$ : 특정문자열로 끝남 검색
    [^문자열]: 대괄호안의 문자를 제외하고 검색  [^adfg] adfg를 제외하고 검색

    이메일 유효 검사 정규표현식
    /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$

    /^010-?([0-9]{4})-?([0-9]{4})$/
    핸드폰 검색 시작 ^010-? 하이픈이 있어도 되고 없어도 됨표시 ([0-9]{4})0-9까지 4자리 표시 -? 대시 
*/

    word="나는 20살 입니다. \n전화번호는 010-1234-1234입니다.";
    console.log("원본:"+word);
    console.log(word.replace(/\-/g, '')); // 하이픈을 제거 \-
    console.log(word.replace(/\./g,''));  // .을 제거 \.
    console.log(word.replace(/\s/g, '')); // 모든 공백제거
    console.log(word.replace(/..살/g, '45살')); // 특정단어의 앞에 있는것 까지 포함 .. 으로 표현 (..살 살 뒤의 두개문자 포함)
    // 전화번호에서 1234-1234 부분을 xxxx-1234로 변경
    console.log(word.replace(/...4/, 'xxxx'));
    //teacher
    console.log(word.replace(/[0-9]{4}/, 'xxxx'));

    var tmoney = "3,410,200원";
    var money = tmoney.replace(/\,/g,'').replace(/원$/, ''); // 숫자만 추출
    console.log(money);
    var money = tmoney.replace(/[^0-9]/g, ''); // 숫자를 제외하고 모두 삭제 (숫자만 추출)
    console.log(money);

    //문자열 나누기 - split()

    word = "이순신,강감찬,김유신,장보고,최무선,장영실";
    const name = word.split(","); // 문자열을 ,을 기준으로 나눈 것.
    console.log(name[3]);