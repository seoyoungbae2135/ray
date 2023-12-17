package study1217;

public class exercise106 {
    public static void main(String[] args){
        // int a = 5;
        // int b = a++;
        // System.out.println(a);
        // System.out.println(b);
        // System.out.println(++a);
        // System.out.println(++b);
        // System.out.println(a++ + --b);
        // System.out.println(a + b);

        // System.out.println(5 & 3);
        // System.out.println(5 | 3);
        // System.out.println(5 ^ 3);
        // System.out.println(~5);

        // System.out.println(7 << 2);
        // System.out.println(7 >> 2);
        // System.out.println(-7 << 2);
        // System.out.println(-7 >> 2);
        // System.out.println(-1 >>> 30);

        // System.out.println(3 < 3);
        // System.out.println(5 >= 3);
        // System.out.println(5 <= 5);
        // System.out.println(5 == 5);
        // System.out.println(5 != 5);

        // System.out.println(false && true);
        // System.out.println((4 <= 4) || (6 < 3));
        // System.out.println(false ^ (3 >= 4));

        // int a = 4, b = 5, c = 6;
        // System.out.println(false && a-- > 6);
        // System.out.println(true | b++ > 6);
        // System.out.println(true ^ c++ > 6);
        // System.out.println(a);
        // System.out.println(b);
        // System.out.println(c);
        // int a = 3;
        // a <<= 1;
        // System.out.println(a);
        // a &= 5;
        // System.out.println(a);
        // a -= 1;
        // System.out.println(a *= 2);

        int a = 3;
        int b = 5;
        int c = 7;
        System.out.println((a > b) ? "안녕하세요" : "반갑습니다");
        System.out.println((a < b) ? (b > c) ? "타입 A" : "타입 B" : (b > c) ? "타입 C" : "타입 D");

        int score = 72;

        if( score >= 80 && score < 90){
            System.out.println("B학점");
        }
        else if( score >= 90){
            System.out.println("A학점");
        }
        else if( score >= 70 && score < 80){
            System.out.println("C학점");
        }
        else{
            System.out.println("F학점");
        }

    }
}
