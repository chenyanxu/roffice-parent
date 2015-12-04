--SELECT  a.projectType,a.manager, sum(a.grossProfit) from roffice_contract a GROUP BY  a.manager,a.projectType order by a.manager;

--SELECT  a.projectType,a.manager, sum(a.summoney) summoney from roffice_contract a GROUP BY  a.manager,a.projectType order by a.manager;

--合同额更新

update roffice_task b set finishContactNo=sq.summoney FROM  (
   SELECT  a.projectType,a.manager, sum(a.summoney) summoney from roffice_contract a GROUP BY  a.manager,a.projectType
   ) AS sq
WHERE  b.name=sq.manager and b.taskType=sq.projecttype;

--毛利更新

update roffice_task b set finishTargetNo=sq.summoney FROM  (
   SELECT  a.projectType,a.manager, sum(a.grossProfit) summoney from roffice_contract a GROUP BY  a.manager,a.projectType
   ) AS sq
WHERE  b.name=sq.manager and b.taskType=sq.projecttype;

--更新合同额百分比
update roffice_task b set contactPercent=finishContactNo/contactNo;


--更新毛利率百分比
update roffice_task b set targetPercent=finishTargetNo/targetNo;