import SettingsPageSection from '../settingsPageSection/SettingsPageSection'
import SettingsPagesSettingItem from '../settingsPagesSettingItem/SettingsPagesSettingItem'

const SettingsPageProfile = () => {
   return <SettingsPageSection title="Primary profile information">
      <SettingsPagesSettingItem title="Link" placeholder="id123123" preplaceholder="mythicplay.com/" />
      <SettingsPagesSettingItem title="Avatar" type="file" />
      <SettingsPagesSettingItem title="Status" type="locked" prime={true} />
      <SettingsPagesSettingItem title="Background" type="locked" prime={true} />
      <SettingsPagesSettingItem title="Birthday" placeholder="dd/mm/yyyy " />
      <SettingsPagesSettingItem title="First name" placeholder="Enter your first name" />
      <SettingsPagesSettingItem title="Last name" placeholder="Enter your last name" />
   </SettingsPageSection>
}

export default SettingsPageProfile