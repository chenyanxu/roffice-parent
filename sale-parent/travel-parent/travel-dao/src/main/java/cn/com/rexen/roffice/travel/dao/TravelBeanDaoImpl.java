package cn.com.rexen.roffice.travel.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.travel.api.dao.ITravelBeanDao;
import cn.com.rexen.roffice.travel.entities.TravelBean;

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
public class TravelBeanDaoImpl extends GenericDao<TravelBean, Long> implements ITravelBeanDao {
    @Override
    @PersistenceContext(unitName = "travel-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
