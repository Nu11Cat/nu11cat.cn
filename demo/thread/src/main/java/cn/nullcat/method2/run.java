package cn.nullcat.method2;

public class run extends Thread {

    static int piao = 0;

    static Object lock = new Object();


    public run(String name) {
        super(name);
    }

    @Override
    public void run() {
        while (true) {
            synchronized (run.class) {
                if(piao<1000){
                    try {
                        Thread.sleep(10);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    piao++;
                    System.out.println(getName()+"  "+piao);
                }else{
                    break;
                }
            }
        }
    }
}
