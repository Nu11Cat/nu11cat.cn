package cn.nullcat.thread2;

public class MyThread2 implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 15; i++) {
            Thread t = Thread.currentThread();
            //用来获取“当前执行这段代码的线程对象”的方法
            System.out.println(t.getName()+"   "+i);
        }
    }
}
