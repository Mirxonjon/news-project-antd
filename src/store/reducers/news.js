const initialState = {
  news: [],
  newsCount: 0,
  loading: true,
  error: ""
};

export const newsReducer = (state = initialState, action) => {
  if(action.type === "setNews") {
    return {
      ...state, 
      news: action.payload.news, 
      count: action.payload.count
    };
  }

  return state;
};