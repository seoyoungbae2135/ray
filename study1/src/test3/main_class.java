package test3;

public class main_class {
    
    public static void main(String[] args){
        //비트연산자
        System.out.println( 10 & 34); // & -> and 비트연산자
        System.out.println(14 | 12);  // | -> or  비트연산자
        System.out.println( ~13 );   // ~ -> not  비트연산자
        System.out.println( ~-14 );
        System.out.println( 29 ^ 13 );  // ^ ->  xor 비트연산자
        //시프트 비트 연산자
        System.out.println( 10 << 2); // << -> 왼쪽시프트연산자
        System.out.println( 24 >> 3); // >> -> 오른쪽시프트연산자
        System.out.println( 4 << 2); // 4*2^2의 계산결과와 같다, 속도가 빠르다
    }
}
