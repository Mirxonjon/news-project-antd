export const setNews = (news, count) => {
  return {
    type: "setNews",
    payload: {
      news, 
      count
    },
  };
};