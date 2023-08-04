/**
 * @description：表单配置
 */
import type { IVAppletComponent, IVAppletConfig } from '../typings/drag-type'

export const baseComponents: IVAppletComponent[] = [
  {
    type: 'base',
    compId: 'GoodsList-1',
    id: 1,
    component: 'GoodsList',
    label: '商品列表',
    icon: 'ep:goods',
    componentProps: {},
  },
  {
    type: 'base',
    compId: 'InputCountDown-1',
    id: 2,
    component: 'InputCountDown',
    label: '倒计时输入',
    icon: 'line-md:iconify2',
    componentProps: {},
  },
  {
    type: 'base',
    compId: 'IconPicker-1',
    id: 3,
    component: 'IconPicker',
    label: '图标选择器',
    icon: 'line-md:iconify2',
    componentProps: {},
  },
  {
    type: 'base',
    compId: 'StrengthMeter-1',
    id: 4,
    component: 'StrengthMeter',
    label: '密码强度',
    icon: 'wpf:password1',
    componentProps: {},
  },
  {
    type: 'base',
    compId: 'Divider-1',
    id: 5,
    component: 'Divider',
    label: '分割线',
    icon: 'radix-icons:divider-horizontal',
    componentProps: {
      orientation: 'center',
      dashed: true,
    },
  },
  {
    type: 'base',
    compId: 'Checkbox-1',
    id: 6,
    component: 'Checkbox',
    label: '复选框',
    icon: 'ant-design:check-circle-outlined',
  },
]


export const appletConfig: IVAppletConfig = {
  // 存放组件列表
  schemas: [],
  // 当前选中的组件
  // currentItem: null,
  // 切换属性面板
  activeKey: 1,
  // colon: boolean
}
