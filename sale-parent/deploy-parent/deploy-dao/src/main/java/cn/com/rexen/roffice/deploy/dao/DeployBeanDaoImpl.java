package cn.com.rexen.roffice.deploy.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.deploy.api.dao.IDeployBeanDao;
import cn.com.rexen.roffice.deploy.entities.DeployBean;

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
public class DeployBeanDaoImpl extends GenericDao<DeployBean, Long> implements IDeployBeanDao {
    @Override
    @PersistenceContext(unitName = "deploy-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
