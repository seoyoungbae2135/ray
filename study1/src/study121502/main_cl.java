package study121502;

import java.util.Random;
import java.util.Scanner;

public class main_cl {

    static Scanner scan = new Scanner(System.in); //이위치에 둘때는 static을 붙여야한다(메소드밖으로 뺀것임)
    
    public static void main(String[] args){

        // for(int i=0; i<=5; i++){
        //     System.out.println(i);
        // }
        // //구구단 2단부터 9단까지 출력
        // for(int i=2; i<=9; i++){
        //     for(int k=1; k<=9; k++)
        //         System.out.printf("%d * %d = %d \n", i,k, i*k );
        // }

        // for(int i=1; true; i++){  //무한루프를 할 경우 true를 넣거나  ;  ; 로 한다.
        //     System.out.println(i); //무한루프로 계속 숫자1씩증가
        //     if( i == 13234 )
        //         break;
        // }
        //1부터 100까지 중에서 10의 배수를 빼고 출력
        // for(int i=1; i<=100; i++){
        //     if(i%10 == 0)
        //         continue; //현재반복을 실행하지않고 다음반복으로 넘기는 것
        //     System.out.println( i );
        // }
        //반복문 문제.
        // 정수를 입력받아서 입력한 정수만큼 반복되게 하세요

        // Scanner sc = new Scanner(System.in);

        // System.out.print("정수입력");
        // int num = sc.nextInt();
        // for( int i=1; i<=num; i++){
        //     System.out.print("반복"+i);
        // }
        //teacher
        // System.out.print("정수입력");
        // int cnt = new Scanner(System.in).nextInt();  // Scanner를 한번만 쓸 경우 변수에 직접 넣어도 된다.
        // for(int i=0; i<=cnt; i++){
        //     System.out.println(i);
        // }
        
        // while문
        // int x=1;
        // while(x<=10){  
        //     System.out.println( x);
        //     x++;
        // }
       
        // while(true){  //while문의 무한반복
        //     System.out.print("정수입력: ");
        //     int num = scan.nextInt();

        //     if(num == 0)
        //     break;
        // }
        //0을 입력하기전까지 계속정수를 입력한다
        //0을 입력하면 지금까지입력했던 모든 정수의 합을 출력하세요
        //me
        // int sum = 0;
        // while(true){
        //     System.out.print("정수입력: ");
        //     int num = scan.nextInt();
        //     sum += num ;
        //     if(num == 0){
        //         System.out.println("합계: " +sum);
        //         break;
        //     }
        // }
        //teacher
        // int sum = 0;
        // while(true){
        //     System.out.print("정수입력: ");
        //     int num = scan.nextInt();
        //     sum = sum+num ;
        //     if(num == 0){
        //         break;
        //     }
        //     System.out.println("총합: " +sum);
        // }
        
        //Math.floor(Math.random()*10)+1;

            //int rand = (int)(Math.random()*10)+1;  //랜덤숫자발생시 강제형변을 해야한다 랜덤이 실수이므로 정수로 변환한다.
            //System.out.println(rand);


        Random rd = new Random(); //외부클래스 이므로 import해야한다.

        // int rand = rd.nextInt(10); //0~10 전 까지 난수 발생
        // for( int i=1; i<=6; i++){
        //     System.out.println( rd.nextInt(45)+1 ); 
        // }
        
        // 동전 앞면 뒷면 맞추기 (1.앞면, 2.뒷면)
        //me
        // System.out.print("앞면:1, 뒷면:2 를 입력");
        // int num = scan.nextInt();
        // int coin = rd.nextInt(2);
        // if( num == coin+1){
        //     System.out.println("맟췄다!!"+num+coin);
        // }else{
        //     System.out.println("틀렸다^^"+num+coin);
        // }
        //teacher
        
        int coin = (int)(Math.random()*2)+1;
        System.out.println("1.앞면, 2.뒷면: ");
        int user = scan.nextInt();

        if(coin == user){
            System.out.println("정답");
        }else{
            System.out.println("땡!");
        }

        
        



        
    }
}
