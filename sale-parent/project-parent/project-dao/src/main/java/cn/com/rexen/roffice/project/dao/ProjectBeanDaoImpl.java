package cn.com.rexen.roffice.project.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.project.api.dao.IProjectBeanDao;
import cn.com.rexen.roffice.project.api.query.ProjectDTO;
import cn.com.rexen.roffice.project.entities.ProjectBean;

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
public class ProjectBeanDaoImpl extends GenericDao<ProjectBean, Long> implements IProjectBeanDao {
    @Override
    @PersistenceContext(unitName = "project-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    //todo add custom query
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        ProjectDTO projectDto = (ProjectDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<ProjectBean> criteriaQuery = criteriaBuilder.createQuery(ProjectBean.class);
        Root<ProjectBean> from = criteriaQuery.from(ProjectBean.class);
        EntityType<ProjectBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (projectDto.getName() != null && !projectDto.getName().trim().isEmpty()) {
            SingularAttribute<ProjectBean, String> name = (SingularAttribute<ProjectBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + projectDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
