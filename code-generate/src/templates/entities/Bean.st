package <packageName>.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
@Entity
@Table(name = "roffice_<pomName>")
public class <beanName>Bean extends PersistentEntity {
    @NotNull(message = "'标题'是必填项")
    private String text;   //标题
    @NotNull(message = "'内容'是必填项")
    private String comment; //内容
    private String publishPeople;//发布人
    private Date beginDate;//发布时间

    public String getTitle() {
        return text;
    }

    public void setTitle(String text) {
        this.text = text;
    }

    public String getContent() {
        return comment;
    }

    public void setContent(String comment) {
        this.comment = comment;
    }

    public String getPublishPeople() {
        return publishPeople;
    }

    public void setPublishPeople(String publishPeople) {
        this.publishPeople = publishPeople;
    }

    public Date getPublishDate() {
        return beginDate;
    }

    public void setPublishDate(Date beginDate) {
        this.beginDate = beginDate;
    }
}
