package cn.com.rexen.roffice.cm.jpa;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.roffice.cm.api.dao.IContractBeanDao;
import cn.com.rexen.roffice.cm.api.query.ContractDto;
import cn.com.rexen.roffice.cm.entities.ContractBean;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.SingularAttribute;
import java.util.ArrayList;
import java.util.List;

/**
 * Implementation of IContractBeanDao based on jpa
 *
 * @author ：Chenyanxu
 */
public class ContractBeanDaoImpl extends BaseCmDao<ContractBean, Long> implements IContractBeanDao {
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        ContractDto contractDto = (ContractDto)queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<ContractBean> criteriaQuery = criteriaBuilder.createQuery(ContractBean.class);
        Root<ContractBean> from = criteriaQuery.from(ContractBean.class);
        EntityType<ContractBean> contractBean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (contractDto.getContractNumber() != null && !contractDto.getContractNumber().trim().isEmpty()) {
            SingularAttribute<ContractBean, String> contractNumber = (SingularAttribute<ContractBean, String>) contractBean_.getSingularAttribute("contractNumber");
            predicatesList.add(criteriaBuilder.like(from.get(contractNumber), "%" + contractDto.getContractNumber() + "%"));
        }

        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        select.orderBy(criteriaBuilder.desc(from.get("creationDate")));
        return select;
    }
}
