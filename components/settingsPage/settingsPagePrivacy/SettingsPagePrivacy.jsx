import SettingsPageSection from '../settingsPageSection/SettingsPageSection'
import SettingsPagesSettingItem from '../settingsPagesSettingItem/SettingsPagesSettingItem'

const SettingsPagePrivacy = () => {
   return <SettingsPageSection title="Privacy">
      <SettingsPagesSettingItem title="Who can see my last seen" placeholder="Everybody" type="locked" prime={true} />
      <SettingsPagesSettingItem title="Who can see my active match" placeholder="Everybody" type="locked" prime={true} />
   </SettingsPageSection>
}

export default SettingsPagePrivacy