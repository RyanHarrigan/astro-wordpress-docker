export type SettingsFetchData = {
  generalSettings: {
    title: string;
    description: string;
  };
};

export type Settings = SettingsFetchData['generalSettings'];
