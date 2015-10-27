package cn.com.rexen.roffice.cm.jpa;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import cn.com.rexen.core.impl.persistence.GenericDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;

/**
 * Created by lenovo on 2015/10/27.
 */
public abstract class BaseCmDao<T extends PersistentEntity, PK extends Serializable> extends GenericDao<T, PK> {
    @Override
    @PersistenceContext(unitName = "cm-unit")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
