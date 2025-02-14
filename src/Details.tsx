import { TDetails } from './App.tsx';

type DetailsProps = {
  details: TDetails;
  handleLoading: () => void;
};

export const Details = ({ details, handleLoading }: DetailsProps) => {
  const { title, description, buttonText } = details;

  return (
      <>
        <h1>{title}</h1>
        <div>{description}</div>
        <button onClick={handleLoading}>{buttonText}</button>
      </>
  )
}

export default Details;
