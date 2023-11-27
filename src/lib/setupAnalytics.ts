import analytics from '@react-native-firebase/analytics';
import { Navigation } from 'react-native-navigation';


export const setupAnalytics = async () => {
  const appInstanceId = await analytics().getAppInstanceId();
  analytics().setUserId(appInstanceId).catch(e => console.error('setting user id', e));

  Navigation.events()
  .registerComponentDidAppearListener(async ({ componentName, componentType }) => {

    if (componentType === 'Component') {

      await analytics().logScreenView({
        screen_name: componentName,
        screen_class: componentName
      });
    }
  });
};
