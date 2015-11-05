package cn.com.rexen.roffice.chance.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.chance.api.dao.IChanceBeanDao;
import cn.com.rexen.roffice.chance.api.query.ChanceDTO;
import cn.com.rexen.roffice.chance.entities.ChanceBean;

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
public class ChanceBeanDaoImpl extends GenericDao<ChanceBean, Long> implements IChanceBeanDao {
    @Override
    @PersistenceContext(unitName = "chance-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        ChanceDTO travelDto = (ChanceDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<ChanceBean> criteriaQuery = criteriaBuilder.createQuery(ChanceBean.class);
        Root<ChanceBean> from = criteriaQuery.from(ChanceBean.class);
        EntityType<ChanceBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (travelDto.getName() != null && !travelDto.getName().trim().isEmpty()) {
            SingularAttribute<ChanceBean, String> name = (SingularAttribute<ChanceBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + travelDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
