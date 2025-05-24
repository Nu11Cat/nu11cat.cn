package cn.nullcat.shengchanxiaofei;

public class MyThread {
    public static void main(String[] args) {
        Cook cook = new Cook();
        Eat eat = new Eat();

        cook.setName("厨师");
        eat.setName("吃货");

        cook.start();
        eat.start();
    }
}
