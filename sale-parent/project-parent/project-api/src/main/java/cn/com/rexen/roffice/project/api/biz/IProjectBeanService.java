package cn.com.rexen.roffice.project.api.biz;

import cn.com.rexen.core.api.biz.IBizService;
import cn.com.rexen.core.api.persistence.JsonData;
import cn.com.rexen.core.api.web.model.QueryDTO;
import cn.com.rexen.roffice.project.entities.ProjectBean;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface IProjectBeanService extends IBizService<ProjectBean> {
    //在此添加新的业务方法
    //通过nativeSQL获得数据
    JsonData getAllByNativeQuery(QueryDTO queryDTO);
}
