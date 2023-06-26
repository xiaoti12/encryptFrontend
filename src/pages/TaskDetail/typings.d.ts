declare namespace API_Detail {
  type packetParams = {
    current?: number;
    pageSize?: number;
  };

  type packetList = {
    data?: packetListItem[];
    total?: number;
    success?: boolean;
  }


  type ueFlowList = {
    data?: ueFlowListItem[];
    total?: number;
    success?: boolean;
  }

  // 获取所有数据包
  type ueFlowListItem = {
    taskID: string;
    flowID: number;
    beginTime: string;
    srcIP: string;
    dstIP: string;
    srcPort: number;
    dstPort: number;
    issuer: string;
    commonName: string;
    validity: number;
    whiteProb: number;
    blackProb: number;
    classification: number;
  }
  // 获取特定任务的所有流
  type flowListByTask = {
    taskID: string;
  }
}
