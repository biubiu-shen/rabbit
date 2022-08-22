import { defineStore } from 'pinia'
import request from '@/utils/request'
import { IApiRes, ICategoryItem } from '@/types'
export const useCategoryStore = defineStore('category', {
  state: () => ({
    list: [] as ICategoryItem[],
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<IApiRes<ICategoryItem[]>>(
        '/home/category/head'
      )
      //给每个对象添加一个属性代表当前一级分类
      res.data.result.forEach((item) => (item.open = false))
      this.list = res.data.result
      console.log(res)
    },
    show(id: string) {
      const category = this.list.find((item) => item.id === id)
      category!.open = true
    },
    hide(id: string) {
      const category = this.list.find((item) => item.id === id)
      category!.open = false
    },
  },
})
