import type { map } from "lodash";


export const tableData = [
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 1,
    user: "admin",
  },
  {
    date: "2022-10-04",
    name: "木头",
    cost: "300",
    id: 2,
    user: "admin",
  },
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 3,
    user: "admin",
  },
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 4,
    user: "admin",
  },
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 5,
    user: "admin",
  },
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 6,
    user: "admin",
  },
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 7,
    user: "admin",
  },
  {
    date: "2022-10-03",
    name: "汽油",
    cost: "200",
    id: 8,
    user: "admin",
  },
];

export const mockQueryData = (params, tableData) => {
  const {id, name, pageSize = 10, currentPage = 1} = params
  const list = tableData.filter(row => {
    return (!id || String(row.id).includes(id)) && (!name || row.name.includes(name))
  })

  const total = list.length
  const startIdx = (currentPage - 1) * pageSize
  const endIdx = startIdx + pageSize
  const data = list.slice(startIdx, endIdx)

  return { total, data }
}

export const mockInsertData = (params, tableData) => {
  const maxId = Math.max(tableData.map(row => row.id))
  const newId = maxId + 1
  const newRow = {id: newId, ...params}
  tableData.unshift(newRow)
  return tableData
}

export const tableData2 = [
  {
    date: "2022-10-03",
    name: "订单1",
    type: "0未审核",
    id: 1,
    user: "admin",
  },
  {
    date: "2022-10-04",
    name: "订单2",
    type: "1未审核",
    id: 2,
    user: "admin",
  },
];
