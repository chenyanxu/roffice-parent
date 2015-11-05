package cn.com.rexen.roffice.support.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.support.api.dao.ISupportBeanDao;
import cn.com.rexen.roffice.support.api.query.SupportDTO;
import cn.com.rexen.roffice.support.entities.SupportBean;

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
public class SupportBeanDaoImpl extends GenericDao<SupportBean, Long> implements ISupportBeanDao {
    @Override
    @PersistenceContext(unitName = "support-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        SupportDTO travelDto = (SupportDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<SupportBean> criteriaQuery = criteriaBuilder.createQuery(SupportBean.class);
        Root<SupportBean> from = criteriaQuery.from(SupportBean.class);
        EntityType<SupportBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (travelDto.getName() != null && !travelDto.getName().trim().isEmpty()) {
            SingularAttribute<SupportBean, String> name = (SingularAttribute<SupportBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + travelDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
