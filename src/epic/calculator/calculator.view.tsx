import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';
import { Calculator } from './calculator';

export const CalculatorView = observer(() => {
  const calculator = useMemo(() => new Calculator(), []);

  const [numbers, setNumbers] = useState(() => ({ first: 0, second: 0 }));

  const handleClick = () => {
    const first = calculator.randomInt(1, 10);
    const second = calculator.randomInt(1, 10);
    setNumbers({ first: first, second: second });
    calculator.add(first, second);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <motion.div
        className="flex flex-col items-center gap-2"
        key={`${numbers.first}-${numbers.second}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <p className="text-2xl">{calculator.result}</p>
        <p className="text-lg">
          {numbers.first} + {numbers.second}
        </p>
      </motion.div>
      <motion.button
        className="px-4 py-2 bg-blue-400 text-white rounded cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.4 }}
        whileTap={{
          scale: 0.8,
          backgroundColor: '#ef4444',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        SUM !
      </motion.button>
    </div>
  );
});
