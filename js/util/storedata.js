// 로컬스토리지 저장
export const storeData = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
// 로컬스토리지 불러오기
export const getData = (key) => JSON.parse(localStorage.getItem(key));
