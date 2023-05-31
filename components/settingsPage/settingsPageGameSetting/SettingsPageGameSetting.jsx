import SettingsPageSection from '../settingsPageSection/SettingsPageSection'
import SettingsPagesSettingItem from '../settingsPagesSettingItem/SettingsPagesSettingItem'

const SettingsPageGameSetting = () => {
   return <SettingsPageSection title="Game settings">
      <SettingsPagesSettingItem title="Auto-connect to server" type="checkbox" />
      <SettingsPagesSettingItem title="Auto-accept matches" type="checkbox" checkDefault={true} />
   </SettingsPageSection>
}

export default SettingsPageGameSetting