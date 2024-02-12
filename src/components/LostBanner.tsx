import Banner from './Banner';

const LostBanner: React.FC<{ answer: string }> = ({
  answer,
}: {
  answer: string;
}) => {
  return (
    <Banner status='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default LostBanner;
