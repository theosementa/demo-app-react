import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { GenericButton } from './components/generic-button';
import { CalculatorView } from './epic/calculator/calculator.view';
import './styles/App.css';

export const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-col justify-center gap-8">
        <h1>{t('welcome')}</h1>

        <div className="flex flex-row gap-2 justify-center">
          <GenericButton onClick={() => i18n.changeLanguage('fr')}>Français</GenericButton>
          <GenericButton className="!text-red-500" onClick={() => i18n.changeLanguage('en')}>
            English
          </GenericButton>
        </div>

        <CalculatorView />
        <Link to="/about">About</Link>
      </div>
    </>
  );
};

export default App;
