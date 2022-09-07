import Button from "../Button";
import { useContext } from "react";
import { UserContext } from "../../providers/User/UserContext";
import { SubsContainer } from "./styles";
import { BiArrowBack } from "react-icons/bi";

const SubscriptionsList = () => {
  function subsList() {
    setNav("devsList");
  }

  const { nav, setNav, recruiterSubs } = useContext(UserContext);
  return (
    <SubsContainer>
      <div className="backArrow">
        <BiArrowBack size={25} onClick={() => subsList()} />
      </div>
      {recruiterSubs.map((subs) => (
        <li key={subs.id}>
          <h1>{subs.name}</h1>
        </li>
      ))}
    </SubsContainer>
  );
};

export default SubscriptionsList;
