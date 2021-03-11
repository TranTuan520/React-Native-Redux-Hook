export function toggleIsAdding() {
  return {type: 'TOGGLE_ADDING'};
}
export function addWord(en, vn) {
  return {
    type: 'ADD_WORD',
    en,
    vn,
  };
}
export function toggleMemorized(id) {
  return {
    type: 'TOGGLE_MEMORIZED',
    id,
  };
}
export function toggleShow(id) {
  return {
    type: 'TOGGLE_SHOW',
    id,
  };
}
export function filterShowAll() {
  return {type: 'FILTER_SHOW_ALL'};
}
export function filterMemorized() {
  return {type: 'FILTER_MEMORIZED'};
}
export function filterNeedPractice() {
  return {type: 'FILTER_NEED_PRACTICE'};
}
