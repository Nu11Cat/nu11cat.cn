package cn.nullcat.shengchanxiaofei;

public class Eat extends Thread {

    @Override
    public void run() {
        while (true) {
            synchronized (Desk.lock) {
                if(Desk.count == 0) {
                    break;
                }
                else{
                    if(Desk.havefood == 0){
                        try {
                            Desk.lock.wait();
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    }else {
                        Desk.count--;
                        System.out.println("吃饭"+ Desk.count);
                        Desk.havefood = 0;
                        Desk.lock.notifyAll();
                    }
                }
            }
        }
    }
}
