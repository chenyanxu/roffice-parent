package cn.com.rexen.roffice.receive.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.receive.api.dao.IReceiveBeanDao;
import cn.com.rexen.roffice.receive.entities.ReceiveBean;

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
public class ReceiveBeanDaoImpl extends GenericDao<ReceiveBean, Long> implements IReceiveBeanDao {
    @Override
    @PersistenceContext(unitName = "receive-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    /*@Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        ReceiveDTO receiveDto = (ReceiveDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<ReceiveBean> criteriaQuery = criteriaBuilder.createQuery(ReceiveBean.class);
        Root<ReceiveBean> root = criteriaQuery.from(ReceiveBean.class);
        EntityType<ReceiveBean> bean_ = root.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        *//*if (receiveDto.getComment() != null && !receiveDto.getComment().trim().isEmpty()) {
            SingularAttribute<ReceiveBean, String> comment = (SingularAttribute<ReceiveBean, String>) bean_.getSingularAttribute("comment");
            predicatesList.add(criteriaBuilder.like(root.get(comment), "%" + receiveDto.getComment() + "%"));
        }*//*
        if (receiveDto.getBeginDate() != null) {
            SingularAttribute<ReceiveBean, Date> comment = (SingularAttribute<ReceiveBean, Date>) bean_.getSingularAttribute("receiveDate");
//            ParameterExpression<Date> param = criteriaBuilder.parameter(Date.class, "receiveDate");
            predicatesList.add(criteriaBuilder.greaterThanOrEqualTo(root.get(comment), receiveDto.getBeginDate()));
        }

        if (receiveDto.getEndDate() != null) {
            SingularAttribute<ReceiveBean, Date> comment = (SingularAttribute<ReceiveBean, Date>) bean_.getSingularAttribute("receiveDate");
//            ParameterExpression<Date> param = criteriaBuilder.parameter(Date.class, "receiveDate");
            predicatesList.add(criteriaBuilder.lessThanOrEqualTo(root.get(comment), receiveDto.getEndDate()));
        }

        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(root);
        return select;
    }*/
}
