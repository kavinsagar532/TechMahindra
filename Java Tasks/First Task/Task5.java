abstract class Animal {
    abstract void makeSound();
}

interface Flyable {
    void fly();
}

class Lion extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Lion roars!");
    }
}

class Eagle implements Flyable {

    @Override
    public void fly() {
        System.out.println("Eagle is flying!");
    }
}

public class Task5 {
    public static void main(String[] args) {
        Animal lion = new Lion();
        Flyable eagle = new Eagle();

        lion.makeSound();
        eagle.fly();
    }
}
