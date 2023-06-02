import SettingsPageSection from '../settingsPageSection/SettingsPageSection'
import SettingsPagesSettingItem from '../settingsPagesSettingItem/SettingsPagesSettingItem'

const SettingsPageSocialMedia = () => {
   return <SettingsPageSection title="Social media">
      <SettingsPagesSettingItem title="Twitch" placeholder="Add account" type="locked" />
      <SettingsPagesSettingItem title="Facebook" placeholder="Add account" type="locked" />
      <SettingsPagesSettingItem title="Twitter" placeholder="Add account" type="locked" />
      <SettingsPagesSettingItem title="Google" placeholder="Add account" type="locked" />
   </SettingsPageSection>
}

export default SettingsPageSocialMedia