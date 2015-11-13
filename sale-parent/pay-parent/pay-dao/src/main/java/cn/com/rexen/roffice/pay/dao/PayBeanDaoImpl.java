package cn.com.rexen.roffice.pay.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.pay.api.dao.IPayBeanDao;
import cn.com.rexen.roffice.pay.api.query.PayDTO;
import cn.com.rexen.roffice.pay.entities.PayBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.SingularAttribute;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class PayBeanDaoImpl extends GenericDao<PayBean, Long> implements IPayBeanDao {
    @Override
    @PersistenceContext(unitName = "pay-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        PayDTO receiveDto = (PayDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<PayBean> criteriaQuery = criteriaBuilder.createQuery(PayBean.class);
        Root<PayBean> root = criteriaQuery.from(PayBean.class);
        EntityType<PayBean> bean_ = root.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        /*if (receiveDto.getComment() != null && !receiveDto.getComment().trim().isEmpty()) {
            SingularAttribute<PayBean, String> comment = (SingularAttribute<PayBean, String>) bean_.getSingularAttribute("comment");
            predicatesList.add(criteriaBuilder.like(root.get(comment), "%" + receiveDto.getComment() + "%"));
        }*/
        if (receiveDto.getBeginDate() != null) {
            SingularAttribute<PayBean, Date> comment = (SingularAttribute<PayBean, Date>) bean_.getSingularAttribute("receiveDate");
//            ParameterExpression<Date> param = criteriaBuilder.parameter(Date.class, "receiveDate");
            predicatesList.add(criteriaBuilder.greaterThanOrEqualTo(root.get(comment), receiveDto.getBeginDate()));
        }

        if (receiveDto.getEndDate() != null) {
            SingularAttribute<PayBean, Date> comment = (SingularAttribute<PayBean, Date>) bean_.getSingularAttribute("receiveDate");
//            ParameterExpression<Date> param = criteriaBuilder.parameter(Date.class, "receiveDate");
            predicatesList.add(criteriaBuilder.lessThanOrEqualTo(root.get(comment), receiveDto.getEndDate()));
        }

        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(root);
        return select;
    }
}
