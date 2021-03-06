
export interface TableListItem {
    username: string;
    password: string;
  }
  
  export interface TableListPagination {
    total: number;
    pageSize: number;
    current: number;
  }
  
  export interface TableListData {
    list: TableListItem[];
    pagination: Partial<TableListPagination>;
  }
  
  export interface TableListParams {
    sorter?: string;
    status?: string;
    name?: string;
    desc?: string;
    key?: number;
    pageSize?: number;
    currentPage?: number;
  }
  
  declare module 'LzEditor' {
    const LzEditor: any;
    export = LzEditor
  }