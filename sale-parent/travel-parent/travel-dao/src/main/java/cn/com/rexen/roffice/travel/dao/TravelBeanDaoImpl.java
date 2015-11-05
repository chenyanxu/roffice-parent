package cn.com.rexen.roffice.travel.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.travel.api.dao.ITravelBeanDao;
import cn.com.rexen.roffice.travel.api.query.TravelDto;
import cn.com.rexen.roffice.travel.entities.TravelBean;

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
public class TravelBeanDaoImpl extends GenericDao<TravelBean, Long> implements ITravelBeanDao {
    @Override
    @PersistenceContext(unitName = "travel-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        TravelDto travelDto = (TravelDto) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<TravelBean> criteriaQuery = criteriaBuilder.createQuery(TravelBean.class);
        Root<TravelBean> from = criteriaQuery.from(TravelBean.class);
        EntityType<TravelBean> userBean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (travelDto.getName() != null && !travelDto.getName().trim().isEmpty()) {
            SingularAttribute<TravelBean, String> name = (SingularAttribute<TravelBean, String>) userBean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + travelDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
