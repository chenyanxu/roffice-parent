package cn.com.rexen.roffice.purchaseinvoice.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.purchaseinvoice.api.dao.IPurchaseInvoiceBeanDao;
import cn.com.rexen.roffice.purchaseinvoice.api.query.PurchaseInvoiceDTO;
import cn.com.rexen.roffice.purchaseinvoice.entities.PurchaseInvoiceBean;

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
public class PurchaseInvoiceBeanDaoImpl extends GenericDao<PurchaseInvoiceBean, Long> implements IPurchaseInvoiceBeanDao {
    @Override
    @PersistenceContext(unitName = "purchaseinvoice-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        PurchaseInvoiceDTO receiveDto = (PurchaseInvoiceDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<PurchaseInvoiceBean> criteriaQuery = criteriaBuilder.createQuery(PurchaseInvoiceBean.class);
        Root<PurchaseInvoiceBean> root = criteriaQuery.from(PurchaseInvoiceBean.class);
        EntityType<PurchaseInvoiceBean> bean_ = root.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        /*if (receiveDto.getComment() != null && !receiveDto.getComment().trim().isEmpty()) {
            SingularAttribute<PayBean, String> comment = (SingularAttribute<PayBean, String>) bean_.getSingularAttribute("comment");
            predicatesList.add(criteriaBuilder.like(root.get(comment), "%" + receiveDto.getComment() + "%"));
        }*/
        if (receiveDto.getBeginDate() != null) {
            SingularAttribute<PurchaseInvoiceBean, Date> comment = (SingularAttribute<PurchaseInvoiceBean, Date>) bean_.getSingularAttribute("invoiceDate");
//            ParameterExpression<Date> param = criteriaBuilder.parameter(Date.class, "receiveDate");
            predicatesList.add(criteriaBuilder.greaterThanOrEqualTo(root.get(comment), receiveDto.getBeginDate()));
        }

        if (receiveDto.getEndDate() != null) {
            SingularAttribute<PurchaseInvoiceBean, Date> comment = (SingularAttribute<PurchaseInvoiceBean, Date>) bean_.getSingularAttribute("invoiceDate");
//            ParameterExpression<Date> param = criteriaBuilder.parameter(Date.class, "receiveDate");
            predicatesList.add(criteriaBuilder.lessThanOrEqualTo(root.get(comment), receiveDto.getEndDate()));
        }

        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(root);
        return select;
    }
}
