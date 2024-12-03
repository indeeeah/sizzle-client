export function numberWithCommas(x: string | number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NAME_REGEX = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/g;
