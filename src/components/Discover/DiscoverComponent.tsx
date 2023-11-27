import { noop } from '@assos/helpers';
import { useOnboarding } from '@assos/hooks/useOnboarding';
import { EngagementComp, fetchEngagementInbox } from '@assos/lib/engagement';
import React, { useState } from 'react';
import { Navigation } from 'react-native-navigation';
import { DiscoverGhost } from '../DiscoverGhost';
import WeatherRecommendations from './weather/WeatherRecommendations';

interface DiscoverComponentProps {
  componentId: string;
}

export const DiscoverComponent = ({ componentId }: DiscoverComponentProps) => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<any[]>([]);
  const {launchOnboardingIfNecessary} = useOnboarding();

  const fetchDiscover = React.useCallback(async () => {
    await fetchEngagementInbox({})
      .then(stories => {
        setLoading(false);
        setStories(
          stories.map((message: any) => ({
            id: message.id,
            name: message.title,
            ...message.content
          }))
        );
      })
      .catch(() => {
        setLoading(false);
      });
  }, [setLoading, setStories]);

  React.useEffect(() => {
    launchOnboardingIfNecessary()
      .catch(noop);

    const onboardingListener =
      Navigation.events().registerComponentDidAppearListener(({componentId}) => {
        if (componentId === '/discover') {
          fetchDiscover().catch();
        }
      });
    return () => {
      onboardingListener.remove();
    };
  }, []);


  const json = { private_type: 'feed', private_blocks: stories };

  if (loading) {
    return <DiscoverGhost />;
  }
  return (
    <>
      <WeatherRecommendations />
      <EngagementComp
        discoverPath='/discover'
        componentId={componentId}
        refreshControl={fetchDiscover}
        isLoading={loading}
        json={json}
      />
    </>
  );
};

