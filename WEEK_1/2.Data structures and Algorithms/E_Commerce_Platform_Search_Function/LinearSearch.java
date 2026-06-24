package DataStructures_And_Algorithms.E_Commerce_Platform_Search_Function;

public class LinearSearch {
    public static Product lsearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.toString().contains("id=" + targetId)) {
                return product;
            }
        }
        return null; // Product not found
    }
}
