import Banner from "./Banner";

const LostBanner: React.FC<{ answer: string; handleRestart: () => void }> = ({
  answer,
  handleRestart,
}) => {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default LostBanner;
