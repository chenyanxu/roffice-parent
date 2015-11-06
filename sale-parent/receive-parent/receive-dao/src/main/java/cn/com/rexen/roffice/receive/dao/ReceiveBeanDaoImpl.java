package cn.com.rexen.roffice.receive.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.receive.api.dao.IReceiveBeanDao;
import cn.com.rexen.roffice.receive.api.query.ReceiveDTO;
import cn.com.rexen.roffice.receive.entities.ReceiveBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.SingularAttribute;
import java.util.ArrayList;
import java.util.List;

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

    //todo add custom query
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        ReceiveDTO receiveDto = (ReceiveDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<ReceiveBean> criteriaQuery = criteriaBuilder.createQuery(ReceiveBean.class);
        Root<ReceiveBean> from = criteriaQuery.from(ReceiveBean.class);
        EntityType<ReceiveBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (receiveDto.getName() != null && !receiveDto.getName().trim().isEmpty()) {
            SingularAttribute<ReceiveBean, String> name = (SingularAttribute<ReceiveBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + receiveDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
