package cn.com.rexen.roffice.cm.jpa;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.roffice.cm.api.dao.IInvoiceBeanDao;
import cn.com.rexen.roffice.cm.entities.InvoiceBean;

import javax.persistence.criteria.CriteriaQuery;

/**
 * Implementation of IContractBeanDao based on jpa
 *
 * @author ：Chenyanxu
 */
public class InvoiceBeanDaoImpl extends BaseCmDao<InvoiceBean, Long> implements IInvoiceBeanDao {
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
//        InvoiceDto dto = (InvoiceDto)queryDTO;
//        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
//        CriteriaQuery<InvoiceBean> criteriaQuery = criteriaBuilder.createQuery(InvoiceBean.class);
//        Root<InvoiceBean> from = criteriaQuery.from(InvoiceBean.class);
//        EntityType<InvoiceBean> bean_ = from.getModel(); //实体元数据
//        List<Predicate> predicatesList = new ArrayList<Predicate>();
//
//        if (dto.getContractNumber() != null && !dto.getContractNumber().trim().isEmpty()) {
//            SingularAttribute<InvoiceBean, String> contractNumber = (SingularAttribute<InvoiceBean, String>) bean_.getSingularAttribute("contractNumber");
//            predicatesList.add(criteriaBuilder.like(from.get(contractNumber), "%" + contractDto.getContractNumber() + "%"));
//        }
//
//        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
//        CriteriaQuery select = criteriaQuery.select(from);
//        select.orderBy(criteriaBuilder.desc(from.get("creationDate")));
//        return select;
        return null;
    }
}
