import java.util.Scanner;

public class Task2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter stock quantity: ");
        int stock = scanner.nextInt();

        if (stock < 50) {
            System.out.println("Stock level: Low");
        } else if (stock <= 200) {
            System.out.println("Stock level: Medium");
        } else {
            System.out.println("Stock level: High");
        }

        System.out.println("Numbers 1-10 (skipping 5):");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) continue;
            System.out.print(i + " ");
        }
        System.out.println();

        int total = 0;
        while (true) {
            total += 10;
            if (total > 100) break;
        }
        System.out.println("Total after while loop: " + total);

        scanner.close();
    }
}