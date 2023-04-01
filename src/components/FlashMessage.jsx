import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../contexts/Message";
import { Alert } from "react-bootstrap";

const FlashMessage = () => {
  
  const { message, setMessage } = useContext(MessageContext);

  const [show, setShow] = useState(true);

  const alertHandler = () => {
    console.log('triggered')
    setMessage({
      msgType: null,
      showMsg: null,
      title: null,
      msg: null,
      dismiss: null,
    });
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      //message.showMsg = false;
      setShow(false);
      setMessage({
        msgType: null,
        showMsg: null,
        title: null,
        msg: null,
        dismiss: null,
      })
      //console.log('hide window');

    }, 8000)

    return () => {
      clearTimeout(timeId)
      setMessage({
        msgType: null,
        showMsg: null,
        title: null,
        msg: null,
        dismiss: null,
      })
    }
  }, [show, setMessage]);

  //console.log(message);


  return (
    <Alert
      className="mt-3 w-100 p-3"
      variant={message.variant}
      onClose={alertHandler}
      show={message.msgType === 'info' ? show || message.showMsg : false}
      
      >
        <Alert.Heading>{message.title}</Alert.Heading>
        <p className="mb-0">{message.msg}</p>
      </Alert>
  );
};

export default FlashMessage;
