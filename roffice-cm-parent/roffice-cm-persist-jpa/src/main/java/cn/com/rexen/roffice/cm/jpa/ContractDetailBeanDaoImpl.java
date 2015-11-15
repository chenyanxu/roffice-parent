package cn.com.rexen.roffice.cm.jpa;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.roffice.cm.api.dao.IContractDetailBeanDao;
import cn.com.rexen.roffice.cm.api.query.ContractDetailDto;
import cn.com.rexen.roffice.cm.entities.ContractDetailBean;

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
public class ContractDetailBeanDaoImpl extends BaseCmDao<ContractDetailBean, Long> implements IContractDetailBeanDao {
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        ContractDetailDto dto = (ContractDetailDto)queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<ContractDetailBean> criteriaQuery = criteriaBuilder.createQuery(ContractDetailBean.class);
        Root<ContractDetailBean> from = criteriaQuery.from(ContractDetailBean.class);
        EntityType<ContractDetailBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (dto.getName() != null && !dto.getName().trim().isEmpty()) {
            SingularAttribute<ContractDetailBean, String> attr = (SingularAttribute<ContractDetailBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(attr), "%" + dto.getName() + "%"));
        }

        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        select.orderBy(criteriaBuilder.desc(from.get("updateDate")));
        return select;
    }
}
