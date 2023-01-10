import { useSelector, useDispatch } from "react-redux";
import { selectUser, userAxiosLink } from "../features/user/userSlice";
import { useEffect } from "react";
import { ALL_USER } from "../features/typeLink";
import { useState } from "react";
import Modal from "./Modal";
import { Search } from "./Search";

export const Users = () => {
  const user = useSelector(selectUser);
  const dispach = useDispatch();
  //  console.log("user===>", user);
  const [modal, setModal] = useState(false);
  const [us, setUs] = useState({});

  useEffect(() => {
    dispach(userAxiosLink({ link: ALL_USER }));
  }, []);
  return (
    <>
      <Modal see={us} open={modal} onClose={() => setModal(false)} />
      <div className="d01">
        <Search />
        <div id="main">
          {user?.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setUs(e);
                  setModal(true);
                }}
                className="child"
              >
                <h6>
                  <b>{e.name}</b>
                </h6>
                <br></br>
                <div>
                  <img src="https://img.icons8.com/material-outlined/12/000000/phone.png" />
                </div>
                <div>
                  <small>{e.phone}</small>
                </div>
                <br />
                <br></br>
                <div>
                  <img src="https://img.icons8.com/ios-glyphs/20/000000/circled-envelope.png" />
                </div>
                <div>
                  <p>
                    <em>
                      <a href="#">{e.email}</a>
                    </em>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
