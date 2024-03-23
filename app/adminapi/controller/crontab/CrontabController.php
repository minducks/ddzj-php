<?php
// +----------------------------------------------------------------------
// | likeshop100%开源免费商用商城系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | gitee下载：https://gitee.com/likeshop_gitee
// | github下载：https://github.com/likeshop-github
// | 访问官网：https://www.likeshop.cn
// | 访问社区：https://home.likeshop.cn
// | 访问手册：http://doc.likeshop.cn
// | 微信公众号：likeshop技术社区
// | likeshop团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeshopTeam
// +----------------------------------------------------------------------

namespace app\adminapi\controller\crontab;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\crontab\CrontabLogic;
use app\adminapi\validate\crontab\CrontabValidate;

/**
 * 定时任务控制器
 * Class CrontabController
 * @package app\adminapi\controller\crontab
 */
class CrontabController extends BaseAdminController
{
    /**
     * @notes 定时任务列表
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 10:48
     */
    public function lists()
    {
        return $this->dataLists();
    }

    /**
     * @notes 添加定时任务
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 11:44
     */
    public function add()
    {
        $params = (new CrontabValidate())->post()->goCheck('add');
        $result = CrontabLogic::add($params);
        if($result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(CrontabLogic::getError());
    }

    /**
     * @notes 查看定时任务详情
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 11:54
     */
    public function detail()
    {
        $params = (new CrontabValidate())->goCheck('detail');
        $result = CrontabLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 编辑定时任务
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 12:00
     */
    public function edit()
    {
        $params = (new CrontabValidate())->post()->goCheck('edit');
        $result = CrontabLogic::edit($params);
        if($result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(CrontabLogic::getError());
    }

    /**
     * @notes 删除定时任务
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 14:09
     */
    public function delete()
    {
        $params = (new CrontabValidate())->post()->goCheck('delete');
        $result = CrontabLogic::delete($params);
        if($result) {
            return $this->success('删除成功', [], 1, 1);
        }
        return $this->fail('删除失败');
    }

    /**
     * @notes 操作定时任务
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 15:06
     */
    public function operate()
    {
        $params = (new CrontabValidate())->post()->goCheck('operate');
        $result = CrontabLogic::operate($params);
        if($result) {
            return $this->success('操作成功', [], 1, 1);
        }
        return $this->fail(CrontabLogic::getError());
    }

    /**
     * @notes 获取规则执行时间
     * @return \think\response\Json
     * @author Tab
     * @date 2021/8/17 15:31
     */
    public function expression()
    {
        $params = (new CrontabValidate())->goCheck('expression');
        $result = CrontabLogic::expression($params);
        return $this->data($result);
    }
}