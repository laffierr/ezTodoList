export const now = new Date()
export const today = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  0,
  0,
  0
)
export const tomorrow = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1,
  0,
  0,
  0
)
// 命名原因是所有组件通用的逻辑（返回现在，今天，明天的逻辑）