import { motion } from "framer-motion";

const Modal = ({ open, onClose, see }) => {
  console.log(see);
  if (!open) {
    return null;
  }
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        className="overplay"
      >
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
          className="mod"
        >
          <div className="img0">
            <img
              src="https://img.icons8.com/external-others-inmotus-design/37/000000/external-Cancel-round-icons-others-inmotus-design-2.png"
              onClick={onClose}
            />
          </div>
          <motion.div
            initial={{
              x: 50,
            }}
            animate={{
              x: 0,
              transition: {
                delay: 0.4,
              },
            }}
            className="tabl"
          >
            <h5>
              <b>{see.name}</b>
            </h5>
            <table>
              <thead>
                <tr>
                  <th colSpan={1}>Телефон:</th>
                  <td className="td">{see.phone}</td>
                </tr>
                <tr>
                  <th colSpan={1}>Почта:</th>
                  <td className="td">{see.email}</td>
                </tr>
                <tr>
                  <th>Дата приема:</th>
                  <td className="td">{see.hire_date}</td>
                </tr>
                <tr>
                  <th>Должность:</th>
                  <td className="td">{see.position_name}</td>
                </tr>
                <tr>
                  <th>Подразделение:</th>
                  <td className="td">{see.department}</td>
                </tr>
                <tr>
                  <th colSpan={2} className="t1">
                    Дополнительная информация:
                  </th>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Важнейшим фактором в каждом проекте является вера в успех.
                    Успех невозможен без веры. //Уильям Джеймс
                  </td>
                </tr>
              </thead>
            </table>
          </motion.div>

          {/* <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
              transition: {
                delay: 0.4,
              },
            }}
            className="modChild1"
          >
            <h5>
              {" "}
              <b>{see.name} </b>
            </h5>
            <p> Телефон:</p>
            <p> Почта:</p>
            <p> Дата приема:</p>
            <p> Должность:</p>
            <p> Подразделение:</p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
              transition: {
                delay: 0.4,
              },
            }}
            className="modChild2"
          >
            {" "}
            <p className="p1">{see.phone}</p> <p>{see.email}</p>{" "}
            <p>{see.hire_date}</p>
            <p>{see.position_name}</p> <p>{see.department}</p>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              transition: {
                delay: 0.4,
                opacity: 1,
              },
            }}
            className="modChild3"
          >
            <h6>Additional Information</h6>
            <p>asfdsssssdsdfsd sdfsdfsdf sdfsgdfg sdfsdg</p>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </>
  );
};
export default Modal;
