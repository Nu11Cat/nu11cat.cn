package cn.nullcat.zuseduilie;

import java.util.concurrent.ArrayBlockingQueue;

public class main {
    public static void main(String[] args) {
        /**
         * 生产者和消费者必须使用同一个阻塞队列
         */


        ArrayBlockingQueue<String> queue = new ArrayBlockingQueue<>(1);
        //数组实现，有界
        Cook cook = new Cook(queue);
        Eat eat = new Eat(queue);

        cook.start();
        eat.start();
    }
}
