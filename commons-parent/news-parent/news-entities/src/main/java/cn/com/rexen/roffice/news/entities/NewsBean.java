package cn.com.rexen.roffice.news.entities;

import cn.com.rexen.core.api.persistence.PersistentEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

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
@Table(name = "roffice_news")
@DynamicInsert
@DynamicUpdate
public class NewsBean extends PersistentEntity {
    @NotNull(message = "'标题'是必填项")
    private String title;   //标题
    @NotNull(message = "'内容'是必填项")
    private String content; //内容
    private String publishPeople;//发布人

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date publishDate;//发布时间

    public String getTitle() {
        return title;
    }

    public void setTitle(String text) {
        this.title = text;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPublishPeople() {
        return publishPeople;
    }

    public void setPublishPeople(String publishPeople) {
        this.publishPeople = publishPeople;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    @Override
    public String toString() {
        return "NewsBean{" +
                "content='" + content + '\'' +
                ", title='" + title + '\'' +
                ", publishPeople='" + publishPeople + '\'' +
                ", publishDate=" + publishDate +
                '}';
    }
}
