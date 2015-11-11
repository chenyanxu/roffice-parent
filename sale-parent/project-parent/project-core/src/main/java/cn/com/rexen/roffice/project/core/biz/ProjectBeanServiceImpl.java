package cn.com.rexen.roffice.project.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.core.util.StringUtils;
import cn.com.rexen.roffice.project.api.biz.IProjectBeanService;
import cn.com.rexen.roffice.project.api.dao.IProjectBeanDao;
import cn.com.rexen.roffice.project.api.query.ProjectDTO;
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
    public JsonData getAllByNativeQuery(QueryDTO queryDTO) {
        String sql = "select a.*,b.name chanceName from roffice_project a,roffice_chance b where 1=1";
        String posSql = " and a.chanceid=b.id order by a.creationDate desc";
        ProjectDTO projectDTO = (ProjectDTO) queryDTO;
        if (StringUtils.isNotEmpty(projectDTO.getName())) {
            sql = sql + " and a.name like '%" + projectDTO.getName() + "%'";
        }
        return dao.findByNativeSql(sql + posSql, queryDTO.getPage(), queryDTO.getLimit(), ResultDTO.class, null);
    }
}
