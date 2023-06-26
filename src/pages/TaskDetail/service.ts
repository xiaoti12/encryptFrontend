// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

// 获取所有任务ID
export async function task(params: API_Task.taskParams, options?: { [key: string]: any }) {
  return request<API_Task.taskList>('/myapi/task/getAllTask', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
// 获取所有流量包
// 获取指定taskid的流
export async function flowByTask(body: API_Detail.flowListByTask) {
  return request<API_Detail.ueFlowList>(`/myapi/tlsflow/getUEFlowByTaskId?taskId=${body.taskID}`, {
    method: 'GET',
  });
}

