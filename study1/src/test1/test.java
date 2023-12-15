package test1;

public class test {

    public static void main(String[] args){
        // return이 없는 메소드에는 void를 사용하고 return이 있다면 return하는 종류의 타입을 메소드뒤에 기입해야한다 
        System.out.println("나도main이네");
        // 변수 - 데이터타입 지정;
        // 데이터 종류 - 정수, 실수, 문자, 논리
        // 정수 - byte(1byte), short(2byte), int(4byte), long(8byte)
        int a=10;
        short b=20;
        long d=40;
        System.out.println( a+" "+b+" "+d);
        // 실수 - float(4byte):소수점이하 6자리까지 표현, double(8byte) :소수점이하 16째자리까지표현
        float ff = 3.14f; // 실수에는 숫자뒤에 f를 붙인다.
        double dd = 12.34f;
        //문자 - char , ' ' 작은 따옴표가 문자를 의미, 큰따옴표는 문자열
        char ch = 'a';
        char chk = '가';
        char che = 97;  //문자코드로 변환한다
        System.out.println( ch );
        System.out.println( chk);
        System.out.println(che);
        // 논리 - boolean(1byte)
        boolean fg = true;
        //void - 데이터가 없다, 라는뜻, 또는 타입이 없다라는뜻

        //참조타입 - new 연산자로생설해야하는 타입
        //클래스
        String str = new String("아하 문자열");  // String은 문자열을 다룰때사용한다. 기본데이터종류가 아니다.
        String name = "이순신";
        System.out.println(str);

    }
    
}
