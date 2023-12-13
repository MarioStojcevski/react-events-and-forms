import styles from './PassingPropsToHandler.module.css';

type Props = {
  message: string;
  onFancyClick?: (message: string) => void;
  children: React.ReactNode;
};

const PassingPropsToHandlers = ({ message, onFancyClick, children }: Props) => {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => {
        if (onFancyClick) {
          onFancyClick(message);
        } else {
          handleClick(message);
        }
      }}>
        {children}
      </button>
    </div>
  );
};

export default PassingPropsToHandlers;