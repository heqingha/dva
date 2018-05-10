import React from 'react';
import { connect } from 'dva';
import styles from './Users.less';
import User from '../components/Users/Users'
function Users() {
  return (
    <div className={styles.normal}>
      <User />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
