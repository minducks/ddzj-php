<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Ecm\V20190719\Models;
use TencentCloud\Common\AbstractModel;

/**
 * AllocateAddresses返回参数结构体
 *
 * @method array getAddressSet() 获取申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
 * @method void setAddressSet(array $AddressSet) 设置申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
 * @method string getTaskId() 获取异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
 * @method void setTaskId(string $TaskId) 设置异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
 * @method string getRequestId() 获取唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
 * @method void setRequestId(string $RequestId) 设置唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
 */
class AllocateAddressesResponse extends AbstractModel
{
    /**
     * @var array 申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
     */
    public $AddressSet;

    /**
     * @var string 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
     */
    public $TaskId;

    /**
     * @var string 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    public $RequestId;

    /**
     * @param array $AddressSet 申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
     * @param string $TaskId 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
     * @param string $RequestId 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("AddressSet",$param) and $param["AddressSet"] !== null) {
            $this->AddressSet = $param["AddressSet"];
        }

        if (array_key_exists("TaskId",$param) and $param["TaskId"] !== null) {
            $this->TaskId = $param["TaskId"];
        }

        if (array_key_exists("RequestId",$param) and $param["RequestId"] !== null) {
            $this->RequestId = $param["RequestId"];
        }
    }
}
