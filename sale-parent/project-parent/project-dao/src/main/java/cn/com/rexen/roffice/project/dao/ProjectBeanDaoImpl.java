package cn.com.rexen.roffice.project.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.project.api.dao.IProjectBeanDao;
import cn.com.rexen.roffice.project.entities.ProjectBean;

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
public class ProjectBeanDaoImpl extends GenericDao<ProjectBean, Long> implements IProjectBeanDao {
    @Override
    @PersistenceContext(unitName = "project-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }


}
