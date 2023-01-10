import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { ALL_USER } from "../features/typeLink";
import { userAxiosLink } from "../features/user/userSlice";

export const Search = () =>{
  const user = useSelector(selectUser);
  // console.log('term',user);
  const dispach = useDispatch();
  return (
    <>
      <input
        id="searchBar"
        placeholder="Search..."
        className="form-control"
        onChange={(e) => dispach(userAxiosLink({ link: ALL_USER + "?term=" +e.target.value }))}
      ></input>
    </>
  );
}