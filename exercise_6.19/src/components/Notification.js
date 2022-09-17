import { connect } from 'react-redux';
import { clearNotification } from '../reducers/notificationReducer';

let timeoutId;

const Notification = (props) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(
    () => props.clearNotification(),
    props.notification.duration * 1000
  );

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    props.notification && <div style={style}>{props.notification.message}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const mapDispatchToProps = { clearNotification };

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
export default ConnectedNotification;
