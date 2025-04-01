public class Task1 {
    public static void main(String[] args) {
        int intNum = 15;
        double doubleNum = 4.5;
        boolean Java = true;
        char letter = 'K';

        int sum = intNum + 5;
        double product = doubleNum * 2;

        boolean isGreater = intNum > doubleNum;
        boolean isEqual = intNum == 10;

        boolean logicalResult = (intNum > 5) && (doubleNum < 10);

        System.out.println("Integer: " + intNum);
        System.out.println("Double: " + doubleNum);
        System.out.println("Character: " + letter);
        System.out.println("Boolean: " + Java);
        System.out.println("Sum (intNum + 5): " + sum);
        System.out.println("Product (doubleNum * 2): " + product);
        System.out.println("Is intNum greater than doubleNum? " + isGreater);
        System.out.println("Is intNum equal to 10? " + isEqual);
        System.out.println("Logical AND Result ((intNum > 5) && (doubleNum < 10)): " + logicalResult);
    }
}