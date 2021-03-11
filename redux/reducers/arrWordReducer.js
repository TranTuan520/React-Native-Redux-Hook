const defaultArrayWords = [
  {id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false},
  {id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false},
  {id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false},
  {id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false},
  {id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false},
  {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false},
  {id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false},
  {id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false},
  {id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false},
  {id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false},
  {id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false},
  {id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false},
  {id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false},
  {id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false},
];

const arrWordsReducer = (state = defaultArrayWords, action) => {
    if (action.type === 'TOGGLE_MEMORIZED')
      return state.map((e) => {
        if (e.id !== action.id) return e;
        return {...e, memorized: !e.memorized};
      });
    if (action.type === 'TOGGLE_SHOW')
      return state.map((e) => {
        if (e.id !== action.id) return e;
        return {...e, isShow: !e.isShow};
      });
    if (action.type === 'ADD_WORD') {
      return [
        {
          id: state.length + 1,
          en: action.en,
          vn: action.vn,
          memorized: false,
          isShow: false,
        },
      ].concat(state);
    }
    return state;
  };
export default arrWordsReducer;