import { Divider } from 'antd';
import { Link } from 'umi';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { TableListItem } from './data.d';
import { getblogs, deleteblogs } from './service';
interface BasicFormProps {
  dispatch: Dispatch<any>;
}
// react hooks
const TableList: React.FC<BasicFormProps> = (props) => {
 
  // const updateBlogById = (updateId: String) => {
  //   console.log('updateBlogById', updateId)
  // }
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<TableListItem>[] = [
    // {
    //   title: '板块',
    //   dataIndex: 'block',
    // },
    {
      title: '标题',
      dataIndex: 'title',
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
          <Link to={{
            pathname: "/blogdetail/edit",
            query: {
              // block: record.block,
              id: record._id,
            }
          }}>编辑</Link>
          <Divider type="vertical" />
          <a onClick={() => {
            deleteblogs({ id: record._id });
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
        request={async () => {
          // let blogs = await getblogs('js')
          let blogs = await getblogs(props.location.pathname.split('/list/')[1])
          // console.log('location', this.props.location.pathname.split('/list/')[1])
          return blogs.data
        }}
        columns={columns}
        rowSelection={{}}
      />
    </PageHeaderWrapper>
  );
};

export default TableList;