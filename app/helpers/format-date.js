import { helper } from '@ember/component/helper';

//////////////////////////////// LICENSE///////////////////////////////////
// you can use this helper without deleting this comment.
// all rights reserved to Kamil Sobik

function formatDate([date, type]) {
  const shouldDisplayDate = type === 'long';
  let formatedDate = date.toLocaleDateString();
  if (shouldDisplayDate) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    formatedDate = `${formatedDate} ${hours}:${minutes}`;
  }
  return formatedDate;
}

export default helper(formatDate);
