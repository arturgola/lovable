
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
             <h2 className="font-medium mb-2">Askordoors OÜ</h2> 
            <p className="text-sm text-muted-foreground max-w-xs mb-2">
                askordoors@gmail.com
            </p>
            <p className="text-sm text-muted-foreground max-w-xs mb-2">
                +37256254169
            </p>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h3 className="font-medium mb-4">{t('mainPage')}</h3> */}
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('mainPage')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h3 className="font-medium mb-4">{t('contact')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('termsAndConditions')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Askordoors. {t('rightsReserved')}.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
