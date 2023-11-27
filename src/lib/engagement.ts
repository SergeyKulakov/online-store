import { InboxFetch } from '@assos/types/engagement';
import { StylePreferences } from '@assos/types/stylePreferences';
import { env } from '@brandingbrand/fsapp';
import fsengagement, { EngagementMessage } from '@brandingbrand/fsengagement';
import { getStylePreferences } from './asyncStorage';

const { engagementLegacy } = env;
const { apiKey, baseURL, cacheTTL, appId } = engagementLegacy;

function getGenderValue(
  mens?: StylePreferences['mens'],
  womens?: StylePreferences['womens']
): string {
  if (mens && womens) {
    return 'both';
  } else if (mens && !womens) {
    return 'male';
  } else if (!mens && womens) {
    return 'female';
  } else {
    return 'none';
  }
}

function getRideValue(
  road?: StylePreferences['road'],
  mountain?: StylePreferences['mountain'],
  gravel?: StylePreferences['gravel']
): string {
  return [
    road && 'road',
    mountain && 'mountain',
    gravel && 'gravel'
  ].filter(Boolean).join(',');
}

function getFitValue(
  racing?: StylePreferences['racing'],
  comfort?: StylePreferences['comfort']
): string {
  return [
    racing && 'racing',
    comfort && 'comfort'
  ].filter(Boolean).join(',');
}

async function getAttributes(userInfo: InboxFetch): Promise<any[]> {
  // get attributes from redux or other datasource
  const preferences = await getStylePreferences();
  const gender = getGenderValue(preferences.mens, preferences.womens);
  const ride = getRideValue(preferences.road, preferences.mountain, preferences.gravel);
  const fit = getFitValue(preferences.racing, preferences.comfort);
  const locale = 'us';

  return [
    {
      key: 'gender',
      value: gender,
      type: 'string'
    },
    {
      key: 'ride',
      value: ride,
      type: 'string'
    },
    {
      key: 'fit',
      value: fit,
      type: 'string'
    },
    {
      key: 'locale',
      value: locale,
      type: 'string'
    }
  ];
}

export const { engagementService, EngagementComp } = fsengagement({
  appId,
  apiKey,
  baseURL,
  cacheTTL
});


export async function fetchEngagementInbox(userInfo: InboxFetch): Promise<any> {
  await engagementService.getProfile(userInfo.login);
  const attributeArr = await getAttributes(userInfo);
  const attributes = JSON.stringify(attributeArr);
  const inboxResponse = await engagementService.getInboxMessages({ attributes });
  const sorted = await engagementService.sortInbox(inboxResponse);
  return sorted.map((inboxMessage: EngagementMessage) => (inboxMessage.message));
}
