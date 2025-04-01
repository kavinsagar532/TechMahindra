class Car {
    private String brand;
    private String model;
    private int year;

    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public String getBrand() {
        return brand;
    }
    public String getModel() {
        return model;
    }
    public int getYear() {
        return year;
    }
    public void displayCar() {
        System.out.println(year + " " + brand + " " + model);
    }
}

public class Task3 {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Fortuner", 2010);
        Car car2 = new Car("Maruti", "Swift", 2020);

        car1.displayCar();
        car2.displayCar();
    }
}