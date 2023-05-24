import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Rectangle {
	private double width;
	private double height;
	
	public double getWidth() {return this.width;}
	public double getHeight() {return this.height;}
	
	public Rectangle(double width, double height) {
		this.width = width;
		this.height = height;
	}
	
	public static List<Rectangle> process(List<Rectangle> list){
		// START
		// Your code goes here. You can modify the return statement.
		List<Rectangle> processedList = list.stream()
				.filter(rectangle -> rectangle.getWidth() * rectangle.getHeight() >= 15.0)
				.sorted(Comparator.comparingDouble(rectangle -> rectangle.getWidth() * rectangle.getHeight()))
				.toList();
		return processedList;
		
		//END
	}
	
	public static void main(String[] args) {
		ArrayList<Rectangle> list = new ArrayList<Rectangle>();
		list.add(new Rectangle(5.0, 4.0));
		list.add(new Rectangle(3.6, 4.2));
		list.add(new Rectangle(2.8, 1.5));
		
		List<Rectangle> processedList = process(list);
		for (Rectangle x: processedList) {
			System.out.println("[" + x.getWidth() + ", " + x.getHeight() + "]");
		}
	}

}
