import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import WangEditor from '../../components/wangEditor'
import { connect, Dispatch } from 'umi';
import React, { FC, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { addblogs, getBlogsById, updateblogs } from './service';
import { FormInstance } from 'antd/lib/form';

import { history } from 'umi';

interface BasicFormProps {
  submitting: boolean;
}
interface State {
  showPublicUsers: Boolean,
  editor: any,
  block: String,
  title: String,
  content: String,
}

class EditBlogs extends React.Component<BasicFormProps, State> {
  // constructor(props){
  //   super(props);
  //   this.onFinish = this.onFinish.bind(this)
  //   this.onFinishFailed = this.onFinishFailed.bind(this)
  // }
  formRef = React.createRef<FormInstance>();
  state: State = {
    showPublicUsers: false,
    editor: "",
    block: "",
    title: "",
    content: ""
  };


  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };
  async componentWillMount() {
    await getBlogsById(history.location.query.id).then(res => {
      console.log(res)
      // console.log(res.data._id)
      // console.log(res.data.block)
      // console.log(res.data.title)
      // console.log(res.data.content)
      // this.setState({
      //   block: res.data.block,
      //   title: res.data.title,
      //   content: res.data.content,
      // })
      this.formRef.current!.setFieldsValue({ 
        block: res.data.block,
        title: res.data.title,
      });
      this.state.editor.$textElem.html(res.data.content)
    }).catch(err => {
      console.log('err', err)
    })
  }

  onFinish = (values: { [key: string]: any }) => {
    console.log(values)
    
    if (history.location.query.id) {
      updateblogs({
        id: history.location.query.id,
        block: values.block,
        title: values.title,
        content: this.state.editor.$textElem.html()
      })
    } else {
      addblogs({
        block: values.block,
        title: values.title,
        content: this.state.editor.$textElem.html()
      })
    }

  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  onValuesChange = (changedValues: { [key: string]: any }) => {
    const { block, title, content } = changedValues;
    console.log('changedValues', changedValues)
    console.log('title', title)
    this.setState({
      block,
      title,
      content
    })
  };
  changeEditableInfo = (editorObj: any) => {
    // console.log(editorObj.$textElem.html())
    this.setState({
      editor: editorObj
    })
    // onChange={this.onVersionChange}
    //                     initialValue={this.state.submitVersion}
    //                     value={this.state.submitVersion}
  }
  render() {
    let { block, title, content } = this.state
    return (
      <PageHeaderWrapper content="上传平台" >
        <Card bordered={false}>
          <Form
            hideRequiredMark
            style={{ marginTop: 8 }}
            ref={this.formRef}
            name="basic"
            initialValues={{ public: '1' }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            onValuesChange={this.onValuesChange}
          >
            <Form.Item
              {...this.formItemLayout}
              label="板块"
              name="block"
              initialValue='title'
              rules={[
                {
                  required: true,
                  message: '请输入板块'
                },
              ]}
            >
              <Input placeholder='请输入板块' />
            </Form.Item>
            <Form.Item
              {...this.formItemLayout}
              label="标题"
              name="title"
              initialValue={title}
              rules={[
                {
                  required: true,
                  message: '请输入标题'
                },
              ]}
            >
              <Input placeholder='请输入标题' />
            </Form.Item>
            <Form.Item
              label="内容"
              name="content"
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入博客内容'
            //   }
            // ]}
            >
              <WangEditor id="editor" onContentChange={this.changeEditableInfo} />
            </Form.Item>
            <Form.Item {...this.submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={this.props.submitting}>
                提交
              </Button>
              <Button style={{ marginLeft: 8 }}>
                取消
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }

};

export default EditBlogs;
