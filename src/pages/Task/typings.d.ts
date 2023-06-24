declare namespace API_Task {
  type taskParams = {
    current?: number;
    pageSize?: number;
  };

  type taskList = {
    data?: taskListItem[];
    total?: number;
    success?: boolean;
  }

  // 获取所有任务
  type taskListItem = {
    taskId: string;
    createTime: string;
    startTime?: string;
    endTime?: string;
    mode: number;
    model: string;
    pcapPath?: string;
    normal?: number;
    abnormal?: number;
    total?: number;
    status: number;
  }

  // 添加任务
  type taskListItemAdd = {
    taskId: string;
    createTime: string;
    mode: number;
    model: string;
    status: number;
    pcap_file?: File;
  }

  // 启动任务前修改任务
  type taskListItemUpdate = {
    taskId: string;
    mode: number;
    model: string;
    pcap_file?: File;
  }

  // 单个任务
  type taskListItemKey = {
    taskId: string;
  }

  // 多个任务
  type taskListItemKeys = {
    taskIds: string[];
  }
}
