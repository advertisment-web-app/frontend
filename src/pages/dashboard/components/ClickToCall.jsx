
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const ClickToCall = () => {
  return <a href="tel:+233595742231"><FontAwesomeIcon icon={faPhone} className="text-[1em] cursor-pointer mr-[1em]" />Call</a>;
}

export default ClickToCall;