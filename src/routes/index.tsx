import { RootState } from "../store/index";
import { useSelector } from "react-redux";
import SignedInRoutes from "./signedIn/idex";
import SignedOutRoutes from "./signedOut/idex";

const SelectRoutes = () => {
  const isUserSignedIn = useSelector(
    (state: RootState) => state.AppDependecies.isUserSignedIn
  );
  if (isUserSignedIn) return <SignedInRoutes />;
  else return <SignedOutRoutes />;
};

export default SelectRoutes;
