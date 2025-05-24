package cn.nullcat.method2;

public class thread {
    public static void main(String[] args) throws InterruptedException {
//        /**
//         * 设置优先级
//         */
//        MyThread mt1 = new MyThread("坦克");
//        MyThread mt2 = new MyThread("飞机");
//
//        mt1.setPriority(1);
//        mt2.setPriority(10);
//
//        mt1.start();
//        mt2.start();
//        /**
//         * 守护线程
//         */
//        MyThread t1 = new MyThread("主线程");
//        MyThread2 t2 = new MyThread2("备胎");
//
//        t2.setDaemon(true);
//
//        t1.start();
//        t2.start();
//        /**
//         * jion方法
//         */
//        Thread t1 = new MyThread("土豆");
//        t1.start();
//
//        t1.join();
//
//        for (int i = 0; i < 10; i++) {
//            System.out.println("main"+i);
//        }
        run t1 = new run("窗口1");
        run t2 = new run("窗口2");

        t1.start();
        t2.start();
    }
}
