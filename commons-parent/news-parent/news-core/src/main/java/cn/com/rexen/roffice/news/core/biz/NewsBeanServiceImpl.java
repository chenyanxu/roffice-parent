package cn.com.rexen.roffice.news.core.biz;

import cn.com.rexen.audit.core.biz.AuditBizServiceImpl;
import cn.com.rexen.core.api.biz.JsonStatus;
import cn.com.rexen.core.util.Assert;
import cn.com.rexen.roffice.core.web.app.Const;
import cn.com.rexen.roffice.news.api.biz.INewsBeanService;
import cn.com.rexen.roffice.news.api.dao.INewsBeanDao;
import cn.com.rexen.roffice.news.entities.NewsBean;
import org.apache.commons.lang.StringUtils;

import java.util.Date;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class NewsBeanServiceImpl extends AuditBizServiceImpl<INewsBeanDao, NewsBean> implements INewsBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
//    private IShiroService shiroService;

    @Override
    public void afterSaveEntity(NewsBean entity, JsonStatus status) {
        //新增时候，记录操作人和时间
//        if (entity.getId() == -1) {
            String userName = shiroService.getCurrentUserName();
            Assert.notNull(userName, "用户名不能为空.");
            if (StringUtils.isNotEmpty(userName)) {
                entity.setPublishPeople(userName);
                entity.setPublishDate(new Date());
            }
//        }
    }


    public NewsBeanServiceImpl() {
        super.init(NewsBean.class.getName());
    }

//    public void setShiroService(IShiroService shiroService) {
//        this.shiroService = shiroService;
//    }

    @Override
    public String getAppName() {
        return Const.APPLICATION_ALIAS;
    }

    @Override
    public String getFunName() {
        return Const.NEWS_MENU_TEXT;
    }
}
