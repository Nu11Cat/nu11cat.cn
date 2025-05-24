package cn.nullcat.thread;

public class thread1 {
    public static void main(String[] args) {
        /**
         * 多线程的启动方式1
         * 1，写一个类继承thread
         * 2，重写run方法
         * 3.创建对象，启动线程
         */
        MyThread myThread1 = new MyThread();
        myThread1.start();
        myThread1.setName("myThread1");
        MyThread myThread2 = new MyThread();
        myThread2.start();
        myThread2.setName("myThread2");
    }
}
