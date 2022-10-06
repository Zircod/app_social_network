import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Alex" id="1" />
        <DialogItem name="Anna" id="2" />
        <DialogItem name="Jon" id="3" />
        <DialogItem name="Andrey" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="Hello"/>
        <Message message="Hi"/>
        <Message message="Eee"/>
      </div>
    </div>
  )
};

export default Dialogs;