package test2;

public class test {

    public static void main(String[] args){
        // 형 변환(타입이 바뀌는 것) - 자동 형변환, 강제 형변환
        float num1 = 10; // 자동 형변환 10.0f로 저장
        int a = 20;
        float b = a;  // b는 20.0f 로 저장된다. 자동형변환 -> 작은범위에서 큰범위로 저장될때

        System.out.println( a +" "+b); 

        long num3 = 10L;  // long는 뒤에 L을 붙여야한다
        int num4 = (int)num3; // 큰족에서 작은쪽으로 이동할때는 자동형변환이안된다, 
                              // 강제형변환 변수앞에 (int)와같이 변경할 형(타입)을 기입한다.
        
        float num5 = 13.1234f;
        int num6 = (int)num5;  // 강제형변환 num6에는 정수 13만 들어간다

        System.out.println(num5+" "+num6);

        double num10 = 1032.234F;
        float num11 = (float)num10;  //강제형변환

        int num20 = 65;
        char ch = (char)num20;  // 타입마다 표현할 수 있는 크기내에서 강제 형변환을 해야한다

        System.out.println(ch+" "+num20);


    }
    
}
