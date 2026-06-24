package DesignPrincipleandPatterns.SingletonPattern;

public class Logger {
    private static Logger instance=new Logger();
    private Logger(){}
    public static Logger GetInstance(){
        return instance;
    }
    public void log(String msg){
        System.out.println("LOG: "+msg);
    }
}
