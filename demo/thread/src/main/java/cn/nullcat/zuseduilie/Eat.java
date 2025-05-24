package cn.nullcat.zuseduilie;

import java.util.concurrent.ArrayBlockingQueue;

public class Eat extends Thread{

    ArrayBlockingQueue<String> queue;

    public Eat(ArrayBlockingQueue<String> queue){
        this.queue = queue;
    }

    @Override
    public void run(){
        while(true){
            String item = queue.poll();
            System.out.println("吃"+item);
        }
    }
}
