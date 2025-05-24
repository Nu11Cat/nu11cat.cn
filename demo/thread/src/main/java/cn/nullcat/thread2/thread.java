package cn.nullcat.thread2;

public class thread {
    public static void main(String[] args) {
        /**
         * 1.创建对象实现Runnable接口
         * 2.重写run方法
         * 3.创建自己的对象
         * 4.创建thread对象，开启线程
         */
        MyThread2 mr = new MyThread2();
        MyThread2 mr2 = new MyThread2();
        Thread thread1 = new Thread(mr);//OOP的对象行为传递，
        // mr 是包含线程执行逻辑的对象，逻辑传给了thread1，它自动调用mr.run()
        thread1.setName("thread1");
        Thread thread2 = new Thread(mr2);
        thread2.setName("thread2");
        thread1.start();
        thread2.start();
    }
}
