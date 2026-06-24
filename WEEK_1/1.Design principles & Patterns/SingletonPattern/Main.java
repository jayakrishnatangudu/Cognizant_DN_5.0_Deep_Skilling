package DesignPrincipleandPatterns.SingletonPattern;

public class Main {
    public static void main(String[] args){
        Logger logger1=Logger.GetInstance();
        Logger logger2=Logger.GetInstance();
        System.out.println("Logger1: "+logger1.hashCode());
        System.out.println("Logger2: "+logger2.hashCode());
        System.out.println(logger1==logger2);
        logger1.log("Message-->Hello Everyone");
    }
}
