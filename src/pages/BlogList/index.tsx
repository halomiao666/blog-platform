import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
// import CreateForm from './components/CreateForm';
// import UpdateForm, { FormValueType } from './components/UpdateForm';
import { TableListItem } from './data.d';
import { getblogs, deleteblogs } from './service';
const TableList: React.FC<{}> = () => {
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
    const [stepFormValues, setStepFormValues] = useState({});
    const actionRef = useRef<ActionType>();
    const columns: ProColumns<TableListItem>[] = [
      {
        title: '用户名',
        dataIndex: 'username',
      },
      {
        title: '密码',
        dataIndex: 'password',
      },
    //   {
    //     title: '服务调用次数',
    //     dataIndex: 'callNo',
    //     sorter: true,
    //     renderText: (val: string) => `${val} 万`,
    //   },
    //   {
    //     title: '状态',
    //     dataIndex: 'status',
    //     valueEnum: {
    //       0: { text: '关闭', status: 'Default' },
    //       1: { text: '运行中', status: 'Processing' },
    //       2: { text: '已上线', status: 'Success' },
    //       3: { text: '异常', status: 'Error' },
    //     },
    //   },
    //   {
    //     title: '上次调度时间',
    //     dataIndex: 'updatedAt',
    //     sorter: true,
    //     valueType: 'dateTime',
    //   },
      {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (_, record) => (
          <>
            <a
              onClick={() => {
                handleUpdateModalVisible(true);
                setStepFormValues(record);
              }}
            >
              编辑
            </a>
            <Divider type="vertical" />
            <a onClick={() => {
              deleteblogs({userid: record._id});
            }}>删除</a>
          </>
        ),
      },
    ];
  
    return (
      <PageHeaderWrapper>
        <ProTable<TableListItem>
          headerTitle="查询表格"
          actionRef={actionRef}
          rowKey="_id"
          toolBarRender={(action, { selectedRows }) => [
            <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
              新建
            </Button>
          ]}
          tableAlertRender={({ selectedRowKeys, selectedRows }) => (
            <div>
              已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
              </span>
            </div>
          )}
          request={() => getblogs()}
          columns={columns}
          rowSelection={{}}
        />
      </PageHeaderWrapper>
    );
  };
  
  export default TableList;