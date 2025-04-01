import java.util.ArrayList;

class Shape {
    public double getArea() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius)
    {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
        return width * height;
    }
}

public class Task4 {
    public static void main(String[] args) {
        ArrayList<Shape> shapes = new ArrayList<>();
        shapes.add(new Circle(6));
        shapes.add(new Rectangle(5, 7));

        for (Shape shape : shapes) {
            System.out.println("Area: " + shape.getArea());
        }
    }
}