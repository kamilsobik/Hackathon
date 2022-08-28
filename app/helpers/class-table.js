import { helper } from '@ember/component/helper';

export function classTable([isDoneStatus]) {
  let newTableClass = 'table-primary';
  if (isDoneStatus === false) {
    newTableClass = 'table-danger';
  } else if (isDoneStatus === true) {
    newTableClass = 'table-success';
  }
  return newTableClass;
}

export default helper(classTable);
