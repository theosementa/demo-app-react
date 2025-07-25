import { motion } from 'framer-motion';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const GenericButton = ({ onClick, children, className }: Props) => {
  return (
    <motion.button
      className={`px-4 py-2 text-white rounded cursor-pointer ${className || ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};
