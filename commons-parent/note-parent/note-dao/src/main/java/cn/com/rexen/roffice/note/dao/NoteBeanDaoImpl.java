package cn.com.rexen.roffice.note.dao;

import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.note.api.dao.INoteBeanDao;
import cn.com.rexen.roffice.note.api.query.NoteDTO;
import cn.com.rexen.roffice.note.entities.NoteBean;

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
public class NoteBeanDaoImpl extends GenericDao<NoteBean, Long> implements INoteBeanDao {
    @Override
    @PersistenceContext(unitName = "note-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }

    //todo add custom query
    @Override
    public CriteriaQuery buildCriteriaQuery(QueryDTO queryDTO) {
        NoteDTO noteDto = (NoteDTO) queryDTO;
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<NoteBean> criteriaQuery = criteriaBuilder.createQuery(NoteBean.class);
        Root<NoteBean> from = criteriaQuery.from(NoteBean.class);
        EntityType<NoteBean> bean_ = from.getModel(); //实体元数据
        List<Predicate> predicatesList = new ArrayList<Predicate>();

        if (noteDto.getName() != null && !noteDto.getName().trim().isEmpty()) {
            SingularAttribute<NoteBean, String> name = (SingularAttribute<NoteBean, String>) bean_.getSingularAttribute("name");
            predicatesList.add(criteriaBuilder.like(from.get(name), "%" + noteDto.getName() + "%"));
        }
        criteriaQuery.where(predicatesList.toArray(new Predicate[predicatesList.size()]));
        CriteriaQuery select = criteriaQuery.select(from);
        return select;
    }
}
