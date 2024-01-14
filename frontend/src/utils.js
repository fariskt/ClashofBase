
const baseUrl = "https://clashofbase-api.vercel.app";

export const constructImageUrl = (imgPath) => {
  return `${baseUrl}${imgPath}`;
};
