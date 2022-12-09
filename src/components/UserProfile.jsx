import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user";
const UserProfile = (props) => {
  const { setIsLoggedIn } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const onClickBtn = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>User Profile</h1>
      <p> ID : {user.id}</p>
      <p> Email : {user.email}</p>
      <p> address : {user.address}</p>
      <button onClick={onClickBtn}>Logout</button>
    </div>
  );
};

export default UserProfile;
