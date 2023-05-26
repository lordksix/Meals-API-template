import { handlePost } from './PostAPI.js';
import {
  createApiInvURL,
} from './createURLAPI.js';
import { handleGETAPI } from './GetAPI.js';
import { involvementAPIUri } from './const.js';

const likesJson = async (id) => (
  {
    item_id: id,
  }
);

const findLikes = async (id, invArr) => {
  const result = invArr.filter((invArr) => invArr.item_id === id);
  if (result.length > 0) return result[0].likes;
  return 0;
};

const updateLikesDOM = async (node, likes) => {
  const likeText = node.querySelector('.app-like-text');
  likeText.textContent = `${likes} like${likes > 1 ? 's' : ''}`;
  const useVSG = node.querySelector('use');
  const svgVSG = node.querySelector('svg');
  useVSG.classList.add('likes');
  svgVSG.classList.add('likes');
  useVSG.setAttribute('href', '../asset/resource/icons.svg#heart-like-red');
};

const createLike = async (event) => {
  if (event.target.classList.contains('heart-like') && !event.target.classList.contains('likes')) {
    const currentID = event.currentTarget.dataset.id;
    const url = createApiInvURL(involvementAPIUri.base, involvementAPIUri.appID,
      involvementAPIUri.queryLike);
    await handlePost(url, await likesJson(currentID));
    const dataResponseInv = await handleGETAPI(url);
    const qtyLikes = await findLikes(currentID, dataResponseInv);
    const prtNde = event.target.parentNode.parentNode;
    await updateLikesDOM(prtNde, await qtyLikes);
  }
};

const getLikesResponse = async () => {
  const invLikesURL = createApiInvURL(involvementAPIUri.base, involvementAPIUri.appID,
    involvementAPIUri.queryLike);
  const dataResponse = await handleGETAPI(invLikesURL);
  return dataResponse;
};

export {
  createLike, findLikes, getLikesResponse,
};