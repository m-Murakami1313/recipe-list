import { daysType } from '@/types/tableTypes'

export const initialDataList: daysType[] = [
  { day: '月', recipe: 'レシピ１', tableNo: 1, id: '' },
  { day: '火', recipe: 'レシピ２', tableNo: 2, id: '' },
  { day: '水', recipe: 'レシピ３', tableNo: 3, id: '' },
  { day: '木', recipe: 'レシピ４', tableNo: 4, id: '' },
  { day: '金', recipe: 'レシピ５', tableNo: 5, id: '' },
  { day: '土', recipe: 'レシピ６', tableNo: 6, id: '' },
  { day: '日', recipe: 'レシピ７', tableNo: 7, id: '' },
]

export const TABLE_DEFINE = [
  { label: '曜日', key: 'dayOfWeek' },
  { label: 'レシピ名', key: 'recipeName' },
  { label: 'テーブルから削除', key: 'deleate' },
]

export const options = [
  { day: '月', id: 1 },
  { day: '火', id: 2 },
  { day: '水', id: 3 },
  { day: '木', id: 4 },
  { day: '金', id: 5 },
  { day: '土', id: 6 },
  { day: '日', id: 7 },
]
