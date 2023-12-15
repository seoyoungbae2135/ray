package study121501;

import java.util.Scanner;

//import java.util.Scanner;  // 외부(다른패키지)에 있는 클래스를 사용할때 import를 사용하여 경로java.util.Scanner를 지정해야 사용할 수 있다.


public class main_class {
    
    public static void main(String[] args){
        int num=100;
        System.out.println(" 한줄씩출력"+num);
        System.out.print(" 줄바꿈없이 출력"+num);
        System.out.print(" 이어서나온다");
        System.out.printf( " 포멧지정 %d",num );  // %d(형식지정자) 교재50쪽참조
        // %d :정수, %f:실수, %c:문자, %s:문자열
        // \n - 개행(줄바꿈), \t - 탭, \', \" , \r - 캐리지리턴(커서의 위치를 그줄의 맨앞쪽으로 위치시키는 것), \b - 백스페이스,
        int a=10, b=20;
        float c=3.12345f;
        System.out.printf(" %d %d", a, b);
        System.out.printf(" %f %d \n", c, a);
        
        System.out.printf(" 실수는 %.1f 이다 \n",c); //%f는 기본 소수점이하6자리표현, %.1f:소수점이하 한자리 출력
        System.out.printf("10 + 20 = %d",10+20);
        
        Scanner sc = new Scanner(System.in); // 객체 만드는방법->nwe Scanner(), 입력을 받으려면 Scaner객체를 만들어야한다.
                                            //자바에서 입력받으려면 Scanner객체 필요
        // System.out.print("정수두개입력(하나입력하고 엔터키눌러서 두번째입력)");
        // int num1 = sc.nextInt();
        // short num2 = sc.nextShort();
        // System.out.println(num1+" "+num2);
        
        // System.out.print("이름입력:");  //터미널에 아무표현도 없으므로 입력받기위한 내용을 써준다 
        // String name = sc.next();

        // System.out.println("이름은 " +name);

        // 사각형의 너비와 높이를 입력받아 넓이를 출력하세요

        // System.out.print("너비입력:");
        // int width = sc.nextInt();
        // System.out.print("높이입력:");
        // int height = sc.nextInt();
        // System.out.println("면적: " + (width * height));

        //국어, 영어, 역사 3과목의 점수를 입력받아서 총점과 평균을 구하세요
        //me
        // System.out.print("국어: ");
        // int 국어 = sc.nextInt();
        // System.out.print("영어: ");
        // int 영어 = sc.nextInt();
        // System.out.print("수학: ");
        // int 수학 = sc.nextInt();
        // int 총점 = 국어 + 영어 + 수학;

        // System.out.println("총점: "+ (국어+영어+수학) + " 평균: "+(총점/3));

        //teacher
        System.out.print("3과목점수입력");
        int kor = sc.nextInt();
        int eng = sc.nextInt();
        int his = sc.nextInt();
        // 스페이스바로 한번에 입력받는다
        int total = kor+eng+his;
        float avg = total/3;

        System.out.println("총점 : "+total+"평균 : "+avg);
        System.out.printf("총점 : %d점, 평균 : %.2f점 \n",total,avg);




    }

}
