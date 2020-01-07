// Константы
const ITEM_WRAP = { tag: 'div', class: 'task-list-item' },
      ITEM_HEAD = { tag: 'div', class: `${ITEM_WRAP.class}-header` },
      number = { tag: 'span', class: `${ITEM_HEAD.class}-number` },
      date = { tag: 'span', class: `${ITEM_HEAD.class}-date` },
      nav = { tag: 'span', class: `${ITEM_HEAD.class}-nav` },
      ITEM_CONTENT = { tag: 'div', class: `${ITEM_WRAP.class}-content` },
      textTask = { tag: 'p', class: `${ITEM_CONTENT.class}-text` },
      color = {
        bad: '#ff0000',
        good: '#32cd32',
        main: '#fff',
        itemShadow: '#0000cd',
        date: '#00008b',
        unActive: '#b19d9d7a'
      }

export default {
    wrap: ITEM_WRAP,
    head: ITEM_HEAD,
    number,
    date,
    nav,
    content: ITEM_CONTENT,
    textTask,
    color
}