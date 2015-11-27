package cn.com.rexen.roffice.task.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.task.api.biz.ITaskBeanService;
import cn.com.rexen.roffice.task.api.dao.ITaskBeanDao;
import cn.com.rexen.roffice.task.entities.TaskBean;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class TaskBeanServiceImpl extends GenericBizServiceImpl<ITaskBeanDao, TaskBean> implements ITaskBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public TaskBeanServiceImpl() {
        super.init(TaskBean.class.getName());
    }
}
