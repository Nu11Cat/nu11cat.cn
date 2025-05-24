package cn.nullcat.xianchengchi;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class main {
    public static void main(String[] args) {

        //获取线程池对象
        ExecutorService pool1 = Executors.newCachedThreadPool();
        ExecutorService pool2 = Executors.newFixedThreadPool(3);
        //提交任务
        pool2.submit(new MyThreadPool());
        pool2.submit(new MyThreadPool());
        //销毁线程池
        pool2.shutdown();

    }
}
