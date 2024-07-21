import { fetchAPI } from '../core';

import type { Settings, SettingsFetchData } from './types.ts';

export async function getSettings(): Promise<Settings | undefined> {
  const { generalSettings } = await fetchAPI<SettingsFetchData>(`
  query settings {
    generalSettings {
      title
      description
    }
  }
  `) ?? {};

  return generalSettings;
}
