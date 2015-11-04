package cn.com.rexen.roffice.support.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.support.api.dao.ISupportBeanDao;
import cn.com.rexen.roffice.support.entities.SupportBean;

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
public class SupportBeanDaoImpl extends GenericDao<SupportBean, Long> implements ISupportBeanDao {
    @Override
    @PersistenceContext(unitName = "support-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
