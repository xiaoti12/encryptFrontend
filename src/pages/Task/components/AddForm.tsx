import {
  ProForm,
  ProFormText,
  ProFormUploadButton,
  ProFormDependency,
  ProFormRadio,
  ProFormSelect,
} from '@ant-design/pro-components';
import {Modal} from 'antd';
import React from 'react';

export type AddFormValueType = {
  mode: number;
  model: string;
  status: number;
  pcapFile?: File;
};

export type AddFormProps = {
  onCancel: (flag?: boolean, formVals?: AddFormValueType) => void;
  onSubmit: (values: AddFormValueType) => Promise<void>;
  addModalOpen: boolean;
};

const AddForm: React.FC<AddFormProps> = (props) => {
  return (
    <Modal
      width={640}
      bodyStyle={{padding: '32px 40px 48px'}}
      destroyOnClose
      title='新建任务'
      open={props.addModalOpen}
      footer={null}
      onCancel={() => {
        props.onCancel();
      }}
    >
      <ProForm
        onFinish={props.onSubmit}
      >
        <ProFormRadio.Group
          name="mode"
          label="任务类型"
          options={[
            {
              label: '离线',
              value: 0,
            },
            {
              label: '在线',
              value: 1,
            },
          ]}
          rules={[
            {
              required: true,
              message: "请选择任务类型"
            },
          ]}
        />
        <ProForm.Group>
          <ProFormDependency name={["mode"]}>
            {({mode}) => {
              return mode === 0 ? (
                <>

                  <ProFormUploadButton
                    label="上传流量文件"
                    name="pcapFile"
                    width={"md"}
                    max={1}
                    rules={[
                      {
                        required: true,
                        message: "请上传流量文件"
                      },
                    ]}
                    fieldProps={{
                      beforeUpload: () => {
                        return false;
                      }
                    }}
                  />

                </>
              ) : mode === 1 ? (
                <>
                </>
              ) : null;
            }}
          </ProFormDependency>
          <ProFormSelect
            name="model"
            label="选择模型"
            width="md"
            options={[
              { label: '四元组模型', value: 'four' },
              { label: '五元组模型', value: 'five' },
            ]}
            rules={[
              {
                required: true,
                message: '请选择一个模型',
              },
            ]}
          />
        </ProForm.Group>

      </ProForm>
    </Modal>
  );
};

export default AddForm;
