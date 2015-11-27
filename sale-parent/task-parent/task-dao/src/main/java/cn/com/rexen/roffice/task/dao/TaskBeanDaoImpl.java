package cn.com.rexen.roffice.task.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.task.api.dao.ITaskBeanDao;
import cn.com.rexen.roffice.task.entities.TaskBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class TaskBeanDaoImpl extends GenericDao<TaskBean, Long> implements ITaskBeanDao {
    @Override
    @PersistenceContext(unitName = "task-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

}
