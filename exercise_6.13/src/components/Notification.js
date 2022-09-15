import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../reducers/notificationReducer';

let timeoutId;

const Notification = () => {
  const dispatch = useDispatch();

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => dispatch(clearNotification()), 5000);

  const notification = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notification && <div style={style}>{notification}</div>;
};

export default Notification;
