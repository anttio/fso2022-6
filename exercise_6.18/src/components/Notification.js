import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../reducers/notificationReducer';

let timeoutId;

const Notification = () => {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);

  clearTimeout(timeoutId);
  timeoutId = setTimeout(
    () => dispatch(clearNotification()),
    notification.duration * 1000
  );

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notification && <div style={style}>{notification.message}</div>;
};

export default Notification;
