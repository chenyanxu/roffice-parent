package cn.com.rexen.roffice.project.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.web.model.BaseDTO;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.project.api.biz.IProjectBeanService;
import cn.com.rexen.roffice.project.api.dao.IProjectBeanDao;
import cn.com.rexen.roffice.project.entities.ProjectBean;
import cn.com.rexen.roffice.project.entities.ResultDTO;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class ProjectBeanServiceImpl extends GenericBizServiceImpl<IProjectBeanDao, ProjectBean> implements IProjectBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public ProjectBeanServiceImpl() {
        super.init(ProjectBean.class.getName());
    }

    @Override
    protected String getNativeQueryStr() {
        String sql = "select a.*,b.name chanceName from roffice_project a,roffice_chance b where 1=1 and a.chanceid=b.id";
        return sql;
    }

    /**
     * 需要重写该类实现getAllByNativeQuery
     *
     * @return
     */
    @Override
    protected Class<? extends BaseDTO> getResultClass() {
        return ResultDTO.class;
    }

}
