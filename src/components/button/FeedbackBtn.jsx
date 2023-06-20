import { Btn } from './FeedbackBTN.styled';

export const FeedbackBTN = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <Btn
        key={item}
        onClick={() => {
          onLeaveFeedback(item);
        }}
      >
        {item}
      </Btn>
    );
  });
};
