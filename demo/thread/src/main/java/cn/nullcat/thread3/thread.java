package cn.nullcat.thread3;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class thread {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        /**
         * 第三种线程创建方式：
         * 1.创建类MyCallable实现Callable接口
         * 2.重写call （有返回值）
         *
         * 3.创建MyCallable对象  (表示任务)
         * 4.创建FutureTask对象 （管理运行结果）
         * 5.创建Thread类对象，启动
         */
        MyCallable mc = new MyCallable();
        FutureTask<Integer> futureTask = new FutureTask<>(mc);
        //FutureTask是Runnable的实现类,可以传给Thread
        Thread t1 = new Thread(futureTask);
        t1.start();

        System.out.println(futureTask.get());
    }
}
