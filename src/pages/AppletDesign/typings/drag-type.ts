import type { ComponentProps } from 'react'
import type { ItemInterface } from 'react-sortablejs';

export type PropsTabKey = 1 | 2 | 3

export type IAnyObject<T = any> = Record<string, T>;
export interface IVAppletComponent extends ItemInterface {
  // 唯一标识
  compId: string
  // 类型哪类组件
  type?: 'base' | 'feat' | 'other'
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
  activeKey?: PropsTabKey
  colon?: boolean
}
