import type { ComponentProps } from 'react'

export type PropsTabKey = 1 | 2 | 3

export type IAnyObject<T = any> = Record<string, T>;
export interface IVAppletComponent {
  // 唯一标识
  key?: string,
  id?: number
  // 组件类型
  component: string
  // 组件label
  label?: string
  // 组件icon
  icon?: string
  // 自定义组件控件实例
  componentInstance?: ComponentProps<any>
  // 传给给组件的属性，默认会吧所有的props都传递给控件
  componentProps?: IAnyObject
  // 监听组件事件对象，以v-on方式传递给控件
  on?: IAnyObject<(...any: []) => void>
  // 组件选项
  options?: IAnyObject
}
export interface IVAppletConfig {
  // 存放组件列表
  schemas: IVAppletComponent[]
  // 当前选中的组件
  currentItem?: IVAppletComponent
  // 切换属性面板
  activeKey: PropsTabKey
  colon?: boolean
}

export interface IItem {
  id: string,
  name: string
}

export interface IAppState {
  items: IItem[];
  selected: IItem[];
}

export interface IMoveResult {
  appletUnit: IItem[];
  appletPage: IItem[];
}
