import { daysType } from "@/types/tableTypes" 

export const dayOfWeek: daysType[] = [
  { day: '月', recipe: 'a', tableId: 1, id: 1 },
  { day: '火', recipe: 'b', tableId: 2, id: 2 },
  { day: '水', recipe: 'c', tableId: 3, id: 3 },
  { day: '木', recipe: 'e', tableId: 4, id: 4 },
  { day: '金', recipe: 'd', tableId: 5, id: 5 },
  { day: '土', recipe: 'e', tableId: 6, id: 6 },
  { day: '日', recipe: 'f', tableId: 7, id: 7 },
]

export  const TABLE_DEFINE = [
  { label: '曜日', key: 'dayOfWeek' },
  { label: 'レシピ名', key: 'recipeName' },
  { label: 'テーブルから削除', key: 'deleate' },
]