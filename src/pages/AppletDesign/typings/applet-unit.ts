
export type IAnyObject<T = any> = Record<string, T>;

export interface IVAppletUnit {
  // 组件类型
  component: string;
  // 组件label
  label?: string;
  // 组件icon
  icon?: string;
  // 自定义组件控件实例
  // 传给给组件的属性，默认会吧所有的props都传递给控件
  componentProps?: IAnyObject;
}
