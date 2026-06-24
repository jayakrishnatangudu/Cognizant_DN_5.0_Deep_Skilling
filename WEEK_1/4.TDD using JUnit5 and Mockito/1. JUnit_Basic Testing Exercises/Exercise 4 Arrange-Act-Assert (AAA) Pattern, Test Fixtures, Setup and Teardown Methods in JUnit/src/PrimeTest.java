
import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class PrimeTest {

    isPrime prime;

    @Before
    public void setUp() {
        prime = new isPrime();
        System.out.println("Setup Executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown Executed");
    }

    @Test
    public void testPrime() {

        // Arrange
        int n = 12;

        // Act
        boolean result = prime.primeTest(n);

        // Assert
        assertEquals(true,result);
    }
}