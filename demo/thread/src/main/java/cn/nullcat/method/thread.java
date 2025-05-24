package cn.nullcat.method;

public class thread {
    public static void main(String[] args) throws InterruptedException {
        /**
         * 常用方法
         */
        MyThread mt1 = new MyThread("坦克");
        MyThread mt2 = new MyThread("飞机");
        //mt1.setName("名字");
        //设置名字，默认Thread-0，源码就是“Thread-”+自增变量（ThreadInitNumber）
        //或者Alt+insert添加父类的构造方法，然后直接命名：MyThread mt2 = new MyThread("飞机")
        mt1.start();
        mt2.start();

        //currentTread可以获取当前线程的对象，当没有线程的时候是main
        //解释：当JVM启动后，自动启动多条线程，其中有一条线程就叫做main，这个线程的作用就算调用main，并且执行里面的代码
        Thread t = Thread.currentThread();
        System.out.println(t.getName());


        //sleep，让线程休眠指定时间，毫秒，结束后线程自动醒来
        //也可以在run方法写，但是要try处理异常
        System.out.println("------------");
        Thread.sleep(5000);
        System.out.println(".............");
    }
}
