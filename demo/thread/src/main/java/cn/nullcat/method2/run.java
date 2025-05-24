package cn.nullcat.method2;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class run extends Thread {

    static int piao = 0;

    static Object lock = new Object();

    static Lock lock1 = new ReentrantLock();

    public run(String name) {
        super(name);
    }

    @Override
    public void run() {
        while (true) {
            lock1.lock();
            try {
                if(piao == 100) {
                    break;
                } else {
                    Thread.sleep(100);
                    piao++;
                    System.out.println(getName()+ " " + piao);
                }
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } finally {
                lock1.unlock();
            }
        }
    }
}
