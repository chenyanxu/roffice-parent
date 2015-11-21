package cn.com.rexen.roffice.chance.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.chance.api.dao.IChanceBeanDao;
import cn.com.rexen.roffice.chance.entities.ChanceBean;

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
public class ChanceBeanDaoImpl extends GenericDao<ChanceBean, Long> implements IChanceBeanDao {
    @Override
    @PersistenceContext(unitName = "chance-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
