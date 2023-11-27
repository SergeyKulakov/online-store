import { useNavigator} from '@brandingbrand/fsapp';
import { AsyncStorageKeys, getStorageValue } from '@assos/lib';

export const useOnboarding = () => {
  const navigator = useNavigator();

  const launchOnboardingIfNecessary = async () => {
    const stylePreferences = await getStorageValue(
      AsyncStorageKeys.StylePreferences
    );
    if (stylePreferences) {
      return;
    }
    return navigator.open('/welcome');
  };

  return { launchOnboardingIfNecessary };
};
