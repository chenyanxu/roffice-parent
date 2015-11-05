package cn.com.rexen.roffice.deploy.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.deploy.api.dao.IDeployBeanDao;
import cn.com.rexen.roffice.deploy.api.query.DeployDTO;
import cn.com.rexen.roffice.deploy.entities.DeployBean;

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
public class DeployBeanDaoImpl extends GenericDao<DeployBean, Long> implements IDeployBeanDao {
    @Override
    @PersistenceContext(unitName = "deploy-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    //todo add custom query
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        DeployDTO deployDto = (DeployDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<DeployBean> criteriaQuery = criteriaBuilder.createQuery(DeployBean.class);
        Root<DeployBean> from = criteriaQuery.from(DeployBean.class);
        EntityType<DeployBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (deployDto.getName() != null && !deployDto.getName().trim().isEmpty()) {
            SingularAttribute<DeployBean, String> name = (SingularAttribute<DeployBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + deployDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
