import { RxExclamationTriangle as Warning } from "react-icons/rx";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="← Back to login"
      backButtonHref="/login"
    >
      <Warning className="w-full justify-center h-10 text-yellow-600" />
    </CardWrapper>
  );
};
