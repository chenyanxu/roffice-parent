package cn.com.rexen.roffice.task.api.biz;

import cn.com.rexen.core.api.biz.IBizService;
import cn.com.rexen.roffice.task.entities.TaskBean;

import java.io.UnsupportedEncodingException;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface ITaskBeanService extends IBizService<TaskBean> {
    void runTaskCalculate() throws UnsupportedEncodingException;
    //在此添加新的业务方法
}
