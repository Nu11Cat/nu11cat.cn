package cn.nullcat.xianchengchi2;

import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class main {
    public static void main(String[] args) {

        ThreadPoolExecutor pool = new ThreadPoolExecutor(
                3,//核心线程数
                6,//临时线程数
                60,//空闲线程最大存货时间
                TimeUnit.SECONDS,//时间单位
                new LinkedBlockingDeque<>(),//任务队列，或者ArrayBlockingQueue
                Executors.defaultThreadFactory(),//创建线程工厂
                new ThreadPoolExecutor.AbortPolicy()//任务的拒绝策略
        );



    }
}
