/**
 * The top-level site configuration.
 */
export interface ISiteConfiguration {
  /**
   * The identifier for the site configuration.
   */
  id: string;

  /**
   * The configuration for the various screen size boundaries
   */
  screenSizes: IScreenSizeConfiguration;

  /**
   * The low-level site configuration.
   */
  settings: ISettingsConfiguration;
}

/**
 * The configuration for the various screen size boundaries
 * @todo //TODO: Is this required? Cant see this being used in our actual games. If so, add descriptions to each of the properties on this interface.
 */
interface IScreenSizeConfiguration {
  maxDesktopScreen: number;
  mobileScreen: number;
  mediumScreen: number;
  smallScreen: number;
}

/**
 * The low-level site configuration.
 */
interface ISettingsConfiguration {
  /**
   * The default locale to be used for the game.
   */
  defaultLocale: string;
  defaultLanguage: string;
  fallbackLanguage: string;

  /**
   * A list of language codes that are supported by the game.
   */
  supportedLanguages: string[];
}
