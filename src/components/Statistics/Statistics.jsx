import { UL, LI } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <UL>
      <LI>
        <span>Good:</span>
        {good}
      </LI>
      <LI>
        <span>Neutral:</span>
        {neutral}
      </LI>
      <LI>
        <span>Bad:</span>
        {bad}
      </LI>
      <LI>
        <span>Total:</span>
        {total}
      </LI>
      <LI>
        <span>PositivePercentage:</span>
        {positivePercentage}%
      </LI>
    </UL>
  );
};
