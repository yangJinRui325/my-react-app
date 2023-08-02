/**
 * @description：表单配置
 */
import type { IVAppletComponent } from '../typings/drag-type'

export const baseComponents: IVAppletComponent[] = [
  {
    id: 1,
    component: 'GoodsList',
    label: '商品列表',
    icon: 'ep:goods',
    componentProps: {},
  },
  {
    id: 2,
    component: 'InputCountDown',
    label: '倒计时输入',
    icon: 'line-md:iconify2',
    componentProps: {},
  },
  {
    id: 3,
    component: 'IconPicker',
    label: '图标选择器',
    icon: 'line-md:iconify2',
    componentProps: {},
  },
  {
    id: 4,
    component: 'StrengthMeter',
    label: '密码强度',
    icon: 'wpf:password1',
    componentProps: {},
  },
  {
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
    id: 6,
    component: 'Checkbox',
    label: '复选框',
    icon: 'ant-design:check-circle-outlined',
  },
]
