import styles from './App.module.css'
import Details from './Details.tsx';
import { useCallback, useRef, useState } from 'react';

export type TDetails = {
  isLoading: boolean;
  title: string;
  description: string;
  buttonText: string;
};

function App() {
  const [details, setDetails] = useState<TDetails>({
    isLoading: false,
    title: "First Component",
    description: "Description",
    buttonText: "Click",
  });

  const imageRef = useRef<HTMLImageElement>(null);

  const onClick = () => {
    if (!imageRef.current) return;

    imageRef.current.style.borderRadius = '20px';
    imageRef.current.style.borderRadius = '0 3px 6px rgba(0,0,0,0.1';
    console.log(imageRef.current);
  };

  const handleLoading = useCallback(() => {
    setDetails(prev => ({...prev, isLoading: !prev.isLoading}));
  }, []);

  return (
    <>
      <div className={styles.layout}>
        <img ref={imageRef} src='/Angular_full_color_logo.png' width={300}  alt={'angular'}/>

        <button onClick={onClick}>Click</button>
        <Details details={details} handleLoading={handleLoading} />

        {
          details.isLoading
              ? <p>Loading...</p>
              : ''
        }

      </div>
    </>
  )
}

export default App
