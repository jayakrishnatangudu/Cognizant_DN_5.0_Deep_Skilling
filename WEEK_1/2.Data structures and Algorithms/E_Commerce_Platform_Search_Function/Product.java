package DataStructures_And_Algorithms.E_Commerce_Platform_Search_Function;

public class Product {
    private int id;
    private String name;
    private String category;

    public Product(int id, String name, String category) {
        this.id=id;
        this.name=name;
        this.category=category;
    }
    
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return "[id=" + id + ", name=" + name + ", category=" + category + "]";
    }
    
}
