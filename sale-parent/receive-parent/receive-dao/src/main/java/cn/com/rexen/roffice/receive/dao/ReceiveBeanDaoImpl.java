package cn.com.rexen.roffice.receive.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.receive.api.dao.IReceiveBeanDao;
import cn.com.rexen.roffice.receive.entities.ReceiveBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class ReceiveBeanDaoImpl extends GenericDao<ReceiveBean, Long> implements IReceiveBeanDao {
    @Override
    @PersistenceContext(unitName = "receive-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        return buildBetweenDateCriteriaQuery(queryDTO, "receiveDate");
    }
}
