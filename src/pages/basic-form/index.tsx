import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, Dispatch } from 'umi';
import React, { FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface BasicFormProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const BasicForm: FC<BasicFormProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
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

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const onFinish = (values: { [key: string]: any }) => {
    const { dispatch } = props;
    dispatch({
      type: 'formAndbasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: { [key: string]: any }) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageHeaderWrapper content="formandbasic-form.basic.description" >
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label="formandbasic-form.title.label"
            name="title"
            rules={[
              {
                required: true,
                message:  'formandbasic-form.title.required',
              },
            ]}
          >
            <Input placeholder= 'formandbasic-form.title.placeholder' />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.date.label" 
            name="date"
            rules={[
              {
                required: true,
                message: 'formandbasic-form.date.required' ,
              },
            ]}
          >
            <RangePicker
              style={{ width: '100%' }}
              placeholder={[
                'formandbasic-form.placeholder.start',
                'formandbasic-form.placeholder.end',
              ]}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.goal.label"  
            name="goal"
            rules={[
              {
                required: true,
                message: 'formandbasic-form.goal.required',
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder= 'formandbasic-form.goal.placeholder'
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.standard.label" 
            name="standard"
            rules={[
              {
                required: true,
                message: 'formandbasic-form.standard.required',
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder='formandbasic-form.standard.placeholder'
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.client.label"
            name="client"
          >
            <Input placeholder= 'formandbasic-form.client.placeholder'/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.invites.label"
            name="invites"
          >
            <Input placeholder= 'formandbasic-form.invites.placeholder' />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.weight.label" 
            name="weight"
          >
            <InputNumber
              placeholder= 'formandbasic-form.weight.placeholder'
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label= "formandbasic-form.public.label"
            help="formandbasic-form.label.help"
            name="publicType"
          >
            <div>
              
              <FormItem style={{ marginBottom: 0 }} name="publicUsers">
                <Select
                  mode="multiple"
                  placeholder= 'formandbasic-form.publicUsers.placeholder'
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                  </Option>
                  <Option value="2">
                  </Option>
                  <Option value="3">
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
            </Button>
            <Button style={{ marginLeft: 8 }}>
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['formAndbasicForm/submitRegularForm'],
}))(BasicForm);
