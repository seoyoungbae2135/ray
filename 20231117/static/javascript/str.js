// // script_string.html link
// // 문자열
// //자바스크립트에서 문자열은 "string객체" 라는것으로 저장이되고
// //사용된다. String객체에는 다양한 문자열을 처리하기위한 "메서드"가 있다.

// // 1.문자열의문자 갯수가 몇개냐? - length

// // var word = "member";
// // var len = word.length;
// // console.log(`문자열 갯수 : ${len}`);

// // // 2. 문자열에서 한글자만 가져오기 - charAt() -> (메서드 라고 한다)

// // var at = word.charAt(3);
// // console.log(at);

// // //3. 문자열에서 특정문자또는 문자열이 있냐 어디에 있냐? - indexOf()
// // word = "i like html";
// // var idx = word.indexOf("like"); // 
// // console.log(idx);
// // if(word.indexOf("love")==-1){  //문자열에 검색문자또는 문자열이 없다면 -1
// //     console.log("love는 없다");
// // }
// // //4. indexOf는 문자열의 첫번.째부터 검색을 하기때문에
// // //  뒤쪽에 있는 문자나 문자열이 결과로 나오지 않을 수 있다
// // // lastIndexOf() -> 문자열의 뒤쪽에서부터 검색

// // // 5.replace -> 문자열에서 특정문자열을 다른문자열로 변경
// // word = "i, like css";
// // var word2 = word.replace("like", "love"); //원본은 바뀌지 않기때문에 변경하려는 문자는 다른변수에 저장해야한다
// // console.log(word2);
// // // 불필요한 문자를 제거하기위한 방법으로도 사용한다. (없는문자를 삽입할때도 사용)
// // var word2 = word.replace(",", " "); // 숫자만 추출할때 적용한다.
// // console.log(word2);

// // // 정규표현식
// // // g (global) : 문자열내의 모든 패턴 검색
// // // i (ignore case) : 대소문자 구별없이 검색
// // word = "i like css like like";
// // word2 = word.replace(/like/gi, "love");
// // console.log(word2);

// //정규표현식의 기본구조 - /regexr/i (/패턴/플래그) ,  /값/표현식 ( like/g )
// //  /.[A-Z]/g - 1문자와 대문자의 조합을 문자열 전체에서 검색
// //  replace( /\-/g, '') - 특정문자 제거 ( - 를 모두 제거) 
// // const regex = /good/; // good이라는 단어가 있는지 검색하기위한 표현식 생성
// // var test = "banana apple cat good nice good cat apple cat good";

// // console.log(regex.test(test)); // .test() - 문자열에 패턴이 존재 하는지 알려준다. ( true, false)
// // console.log(test.match(regex)); // .match() - 패턴에 매칭되는 문자열들을 가지고 온다.

// // i - ignore case 대소문자 구별없이 검색
// // g - global 문자열내 모든 패턴 검색
// // m - multi line 문자열의 행이 바뀌더라도 검색을 계속한다(여러줄의 문자열을 검색)
// // s - 모든문자 검색(특수문자포함), 문자열에 보이지않는 문자 까지 검색 (\n, \r, \t, \p, \a 등등)
// // u - 유니코드검색 ()
// // y - stiky 문자열내 특정위치에서 검색을 진행 

// // console.log( test.match( /cat/g)); // cat를 모두 찾는다.
// // word = "banana \napple \nmember!!"; // \n은 줄바꿈이다, 여러줄로 된다.
// // console.log(word.match( /apple/ ));
// // console.log(word.match( /^apple/gm )); // ^apple : 문장이 apple로 시작하는지 검사, m을 넣어야 한다.

// //정규표현식 기호
// /*
// 패턴에 널는 기호
//     영어알파벳 : a-z,(소문자a부터z까지) A-Z (대문자a부터z까지) 범위검색
//     한글 : ㄱ-ㅎ, (ㄱ부터 ㅎ 까지)
//     숫자 : 0-9  (범위로 검색)
//     모든문자열 : . (숫자,한글 영어 특수기호 공백 전부해당 ) 단, 줄바뀌면 안됨. gm을 써서 해야 여러줄 검색
//     \d : 숫자전체를 검색
//     \D : 숫자가 아닌것 검색
//     \w : 영숫자 문자 검색 (A-Za-z0-9)와 동일
//     \W : 영숫자 아닌것만 검색 
//     \s : space바로 만든 공백 검색
//     \S : space공백 아닌것 검색

//     패텀 검색 기준
//     /패턴/
//     | - or을 의미 ( / \D | \S /) 둘중 하나만 검색한다
//     [] : or처리 묶음 (/[123]/) -> 1|2|3 1또는 2또는 3을 검색 /[다-아]/  다|라|마|바|사|아  이와같이 or를 여러개 하여 검색
//     ^문자열 : 특정문자열로 시작(행의 시작점)
//     문자열$ : 특정문자열로 끝남 검색
//     [^문자열]: 대괄호안의 문자를 제외하고 검색  [^adfg] adfg를 제외하고 검색

//     이메일 유효 검사 정규표현식
//     /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$

//     /^010-?([0-9]{4})-?([0-9]{4})$/
//     핸드폰 검색 시작 ^010-? 하이픈이 있어도 되고 없어도 됨표시 ([0-9]{4})0-9까지 4자리 표시 -? 하이픈니 있어도 되고 없어도 된다는 명령어
// */

//     // word="나는 20살 입니다. \n전화번호는 010-1234-1234입니다.";
//     // console.log("원본:"+word);
//     // console.log(word.replace(/\-/g, '')); // 하이픈을 제거 \-
//     // console.log(word.replace(/\./g,''));  // .을 제거 \.
//     // console.log(word.replace(/\s/g, '')); // 모든 공백제거
//     // console.log(word.replace(/..살/g, '45살')); // 특정단어의 앞에 있는것 까지 포함 .. 으로 표현 (..살 살 뒤의 두개문자 포함)
//     // // 전화번호에서 1234-1234 부분을 xxxx-1234로 변경
//     // console.log(word.replace(/...4/, 'xxxx'));
//     // //teacher
//     // console.log(word.replace(/[0-9]{4}/, 'xxxx'));

//     // var tmoney = "3,410,200원";
//     // var money = tmoney.replace(/\,/g,'').replace(/원$/, ''); // 숫자만 추출
//     // console.log(money);
//     // var money = tmoney.replace(/[^0-9]/g, ''); // 숫자를 제외하고 모두 삭제 (숫자만 추출)
//     // console.log(money);

//     //문자열 나누기 - split()

//     // word = "이순신,강감찬,김유신,장보고,최무선,장영실";
//     // const name = word.split(","); // 문자열을 ,을 기준으로 나눈 것.
//     // console.log(name[3]);

// // 7. 문자열 추출 - substring()
//     // word = "nice123@naver.com";
//     // var id = word.split("@")[0];
//     // console.log(id);

//     // console.log(word.substring(0,7)); //0번째부터 7번 전까지 추출
//     // console.log(word.substring(4)); // 4번째부터 끝까지 추출
//     // console.log( word.substring(0, word.indexOf("@"))); //id 만 추출, 0번째부터 @전까지 추출

//     // var birth = "19971209";
//     // //생년원일중 몇월생 인지
//     // console.log(birth.substring(4,6));

//     // //8. 문자열을 추출 2 - slice() : 음수값도 사용 할 수 있다.
//     // word="자바스크립트 너무 좋아"
//     // console.log( word.slice(2,7));
//     // console.log( word.slice(-3)); //음수를 사용할 수 있고 음수를 사용하면 뒤에서 부터 추출 
//     // console.log( word.slice(-3, -2)); // 음수를 사용하면 음수로만 사용해야한다. 음수, 양수 불가


//     var text = "강동욱 105,000원-남기현 345,200원-서종우 10,000원-송재영 4,343,290원";
//     // 문제!
//     //  남기현이 보유한 현금은 얼마인가? ( 정수로 출력)
//     //  강동욱이 보유한 현금에 서종우의 돈을 빼면 얼마인가?
//     //  송재영의 돈을 434,329원으로 변경하시오
//     // me
//     // var nam = text.split("-");
//     // var nam = (name[2]);
//     // var nam1 =nam.replace(/[^0-9]/g, '');
//     // console.log(nam);

//     //  var code = text.replace(/\,/g, '');
    
//     //  console.log(code.substring(16,22));

//     //  var kang = code.substring(4, 9);
//     //  var seo = code.substring(28, 32);

//      // teacher
//      let member = text.split("-");
//      var money = parseInt( member[1].split(" ")[1].replace(/[^0-9]/,''));
//      console.log(money);

//      var 강동욱 = parseInt(member[0].split(" ")[1].replace(/[^0-9]/, ''));
//      var 서종우 = parseInt(member[2].split(" ")[1].replace(/[^0-9]/, ''));
//      console.log((강동욱-서종우).toLocaleString()+"원");

//      var n = member[3].split(" ")[0];
//      var m = parseInt(member[3].slice(n.length+1).replace(/[^0-9]/g, ''));
//      m = m/10;
//      member[3] = n+" "+(m.toLocaleString()+"원");
//      text = member.join("-");
//      console.log(text);

//     // 소문자, 대문자 변경 - toLowerCase(), toUpperCase()
//      word = "i LOVE Scool"
//      console.log(word.toLowerCase());
//      console.log(word.toUpperCase());

//     //10. 공백제거 - trim() - 문자열의 양쪽끝 공백 제거
//      console.log("공백제거전: " +word);
//      console.log("공백제거후: " + word.trim());

//     //11. 문자열반복 - repeat()
//      word="apple";
//      console.log(word.repeat(3));

//     //12.문자열 위치 정렬 또는 채우기- padStart(), padEnd()
//      console.log(word.padStart(10));
//      console.log(word.padEnd(10, "r"));

//     //13.문자열에 특정문자열포함 여부(참, 거짓) - includes()
//      word = "이순신, 장보고, 강감찬, 최영, 정도전, 정약용, 양만춘";
//      if(word.includes("정도전")){  // 비교연산자없이 사용가능
//         console.log("회원입니다");
//      }else{
//         console.log("회원이 아닙니다");
//      }

//     //14. 문자열에 특정 문자나 문자열로 시작하냐 - startsWith(), endsWith() -> 지정한 문자열로 끝나냐
//      var info = "이름:이순신,  직업:군인";
//      if(info.startsWith("이름")){
//         console.log("올바른 형식의 데이터입니다.");
//      }else{
//         console.log("잘못된 데이터 입니다.");
//      }

//     //15. 문자열로 변환 - toString()
//      var num = 100;
//      num.toString();
//      console.log( typeof num.toString()); //typeof : 객체의 종류를 알려준다

//      var birth = 19990101;
//      // birth/10000
//      var year = parseInt(birth.toString().substring(0,4));
//      console.log(year);



//      /*
//         .length - 문자열의 길이(문자열 갯 수) ()없이사용
//         .charAt(숫자) - 지정한 번호 위치의 문자추출
//         .indexOf(문자열) - 문자열에서 특정문자 또는 문자열이 몇번째 있는지 알려준다 없으면 -1
//         .lastIndexOf(문자열) - 문자열의 끝에서 문자또는 문자열이 몇번째에 있는지 검색
//         .includes(문자열) - 문자열에 특정문자 또는 문자열의 존재여부(ture, False)
//         .replace(원본문자열, 변환문자열) - 문자열에서 특정문자 도는 문자열을 지정한 문자또는 문자열로 변환
//         .split(문자열) - 문자열을 특정문자열을 기준으로 분리한다.
//         .substring(시작번호, 끝번호) - endstring - 문자열에서 지정된 위치의 문자열을 추출
//         .toLowerCase(), toUpperCase()- 소문자 대문자로 변환
//         .padStar(숫자), apdEnd(숫자) -자릿수 지정과 정렬 및 채우기
//         .trim() - 문자열의 양쪽끝 공백제거
//         .startsWith(문자열) endsWith(문자열) -문자열의 시작과 끝이 특정문자열로 시작하는지 여부
//         .toString() - 문자열로 변환
//         .repeat(숫자) -지정한 숫자만큼 반복 출력
    
//     */

//     // 학이 침을 뱉으면 - 퇴학

//     // 닭이 작은사이즈의 옷을 입으면 - 꼬끼오

//     // 우리나라에 석유가 도착하는데 걸리는 시간은?

//     // 잘생긴 가위는? 핸썸가위

//     // 우유가 아프면? 앙팡

//     // 엄마가 길을 잃었다면? 맘마미아
    
//     // 티파니와 태연이 싸우면? 티격태격

//     // 어벤저스가 쓰는펜? 블랙펜써

//     // 인어공주의 성씨는? 안다다 씨

//     // 고양이한테 야옹하면 대답은? 


let info = "이순신:군인,34세,아산 - 장보고:군인,41세,완도 - 김춘추:정치인,28세,경주";
let data =info.split(" - "); // - 의 간격을 띄우면 공백없이 split한다
// 출력 - 이름 직업
var 이순신_name = data[0].substring(0, data[0].indexOf(":")); //split(":");
var 이순신_직업 = data[0].substring(data[0].indexOf(":")+1, data[0].indexOf(","));

console.log(이순신_name+" "+이순신_직업);

//장보고의 나이는 몇인가? 
// me
var 장보고_name = data[1].substring(0, data[0].indexOf(":"));
var 장보고_age = data[1].substring(data[1].indexOf(",")+1, data[1].indexOf("세") );

console.log(장보고_name+" "+장보고_age);
// teacher
var age = data[1].substring(data[1].indexOf(",")+1, data[1].lastIndexOf(","));
console.log(parseInt(age)); // 숫자만 추출 parseInt() - 앞쪽에 있는 숫자만 정수로 변환



