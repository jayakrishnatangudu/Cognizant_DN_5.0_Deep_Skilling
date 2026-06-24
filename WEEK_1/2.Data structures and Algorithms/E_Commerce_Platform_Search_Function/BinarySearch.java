package DataStructures_And_Algorithms.E_Commerce_Platform_Search_Function;

public class BinarySearch {
    public static Product bssearch(Product[] products, int targetId) {
        int left=0;
        int right=products.length - 1;

        while(left<=right) {
            int mid=left+(right-left)/2;

            if(products[mid].getId()==targetId){
                return products[mid]; // Product found
            } else if(products[mid].getId()<targetId){
                left=mid+1; // Search in the right half
            } else{
                right=mid-1; // Search in the left half
            }
        }
        return null; // Product not found
    }
}