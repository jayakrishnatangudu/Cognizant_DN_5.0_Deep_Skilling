package DataStructures_And_Algorithms.E_Commerce_Platform_Search_Function;
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Smartphone", "Electronics"),
            new Product(3, "Shoes", "Fashion"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Headphones", "Electronics")
        };

        // Perform linear search
        Product lsres=LinearSearch.lsearch(products,3);
        System.out.println((lsres!=null)?"Linear Search: Product found " + lsres:"Linear Search: Product not found");

       Arrays.sort(products,(p1, p2) -> p1.getId() - p2.getId()); // Sort products by ID for binary search

        // Perform binary search
       Product bsres=BinarySearch.bssearch(products,2);
        System.out.println((bsres!=null)?"Binary Search: Product found  " + bsres:"Binary Search: Product not found");
    }
}
