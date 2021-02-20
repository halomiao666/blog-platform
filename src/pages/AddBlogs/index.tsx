import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import WangEditor from '../../components/wangEditor'
import { connect, Dispatch } from 'umi';
import React, { FC, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { addblogs } from './service';
import { FormInstance } from 'antd/lib/form';

const FormItem = Form.Item;


interface BasicFormProps {
  submitting: boolean;
}
interface State {
  showPublicUsers: Boolean,
  editor: any,
  title: String
}

class AddBlogs extends React.Component<BasicFormProps, State> {
  // constructor(props){
  //   super(props);
  //   this.onFinish = this.onFinish.bind(this)
  //   this.onFinishFailed = this.onFinishFailed.bind(this)
    
  // }
  formRef = React.createRef<FormInstance>();
  state: State = {
    showPublicUsers: false,
    editor: "",
    title: ""
  };
  static defaultProps = {  // 属性默认值
    submitting: false,
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

  onFinish = (values: { [key: string]: any }) => {
    addblogs({
      block: values.block, 
      title: values.title,
      content: this.state.editor.$textElem.html()
    })
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  onValuesChange = (changedValues: { [key: string]: any }) => {
    const { title } = changedValues;
    console.log('title', title)
    this.setState({
      title
    })
  };
  changeEditableInfo = (editorObj:any)  => {
    console.log(editorObj.$textElem.html())
    this.setState({
      editor: editorObj
    })
  }
  render() {
    return(
      <PageHeaderWrapper content = "上传平台" >
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
             <FormItem
              {...this.formItemLayout}
              label="板块"
              name="block"
              rules={[
                {
                  required: true,
                  message: '请输入板块'
                },
              ]}
            >
              <Input placeholder='请输入板块' />
            </FormItem>
            <FormItem
              {...this.formItemLayout}
              label="标题"
              name="title"
              rules={[
                {
                  required: true,
                  message: '请输入标题'
                },
              ]}
            >
              <Input placeholder='请输入标题' />
            </FormItem>
            <FormItem
              label="内容"
              name="blogcontent"
              // rules={[
              //   {
              //     required: true,
              //     message: '请输入博客内容'
              //   }
              // ]}
            >
              <WangEditor id="editor" onContentChange={this.changeEditableInfo}/>
            </FormItem>
            <FormItem {...this.submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={this.props.submitting}>
                提交
              </Button>
              <Button style={{ marginLeft: 8 }}>
                取消
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
  
};

export default AddBlogs;
