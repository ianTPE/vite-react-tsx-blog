// 圖表相關的類型定義
export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    dataKey: string;
    payload: any;
  }>;
  label?: string | number;
}

export interface CustomLabelProps {
  name: string;
  percent: number;
  index?: number;
  value?: number;
}

export interface ChartDataEntry {
  [key: string]: any;
}
