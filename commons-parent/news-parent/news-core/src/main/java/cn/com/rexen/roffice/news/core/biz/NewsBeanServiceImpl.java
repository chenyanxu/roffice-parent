package cn.com.rexen.roffice.news.core.biz;

import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.impl.biz.GenericBizServiceImpl;
import cn.com.rexen.roffice.news.api.biz.INewsBeanService;
import cn.com.rexen.roffice.news.api.dao.INewsBeanDao;
import cn.com.rexen.roffice.news.entities.NewsBean;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class NewsBeanServiceImpl extends GenericBizServiceImpl<INewsBeanDao, NewsBean> implements INewsBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public NewsBeanServiceImpl() {
        super.init(NewsBean.class.getName());
    }
}
