import { ISiteConfiguration } from '../common/interfaces/configurationInterfaces';

const siteConfigurations: ISiteConfiguration[] = [
  {
    id: 'hubble',
    screenSizes: {
      maxDesktopScreen: 768,
      mobileScreen: 480,
      mediumScreen: 420,
      smallScreen: 360,
    },
    settings: {
      defaultLocale: '',
      defaultLanguage: 'es',
      fallbackLanguage: 'es',
      supportedLanguages: ['es, en'],
    },
  },
];

export default siteConfigurations[0];
