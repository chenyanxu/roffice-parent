package cn.com.rexen.roffice.news.dao;

import cn.com.rexen.core.impl.persistence.GenericDao;
import cn.com.rexen.roffice.news.api.dao.INewsBeanDao;
import cn.com.rexen.roffice.news.entities.NewsBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class NewsBeanDaoImpl extends GenericDao<NewsBean, Long> implements INewsBeanDao {
    @Override
    @PersistenceContext(unitName = "news-cm")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
