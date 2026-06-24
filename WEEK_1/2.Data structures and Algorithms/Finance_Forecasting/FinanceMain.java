package DataStructures_And_Algorithms.Finance_Forecasting;

public class FinanceMain {
    public static double calculateFutureValue(double presentval,double rate,int years){
        if(years==0){
            return presentval;
        }
        return calculateFutureValue(presentval,rate,years-1)*(1+rate);
    }
    public static void main(String[] args) {
        double presentval=1000;
        double rate=0.1;
        int years=4;

        double futureval=calculateFutureValue(presentval,rate,years);
        System.out.println("Future value: " + futureval);
    }
}
