import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingTest {
	private static final Logger Logger=LoggerFactory.getLogger(LoggingTest.class);
	public static void main(String[] args) {
		Logger.error("This is an error message...");
		Logger.warn("This is a warning message...");
	}
}
