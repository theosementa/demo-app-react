import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Calculator } from './calculator';

export const CalculatorView = observer(() => {
  const calculator = useMemo(() => new Calculator(), []);

  const firstNumber = calculator.randomInt(1, 10);
  const secondNumber = calculator.randomInt(1, 10);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-2xl">{calculator.result}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        onClick={() => calculator.add(firstNumber, secondNumber)}
      >
        Add {firstNumber} + {secondNumber}
      </button>
    </div>
  );
});
