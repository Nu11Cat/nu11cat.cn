package cn.nullcat.zuseduilie;

import java.util.concurrent.ArrayBlockingQueue;

public class Cook extends Thread{

    ArrayBlockingQueue<String> queue;

    public Cook(ArrayBlockingQueue<String> queue){
        this.queue = queue;
    }

    @Override
    public void run() {
        while(true){
            queue.offer("面条");
            //offer和put都是线程安全的，区别在于队列满的时候的策略
            System.out.println("厨师放面条");
        }
    }
}
