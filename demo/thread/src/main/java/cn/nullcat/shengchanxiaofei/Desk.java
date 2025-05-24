package cn.nullcat.shengchanxiaofei;

public class Desk {
    /**
     * 控制上传者和消费者的执行
     */
    //0无，1有
    public static int havefood = 0;
    //总个数
    public static int count = 10;
    //锁对象
    public static Object lock = new Object();
}
