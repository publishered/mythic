import { useState } from 'react';
import SettingsPageSection from '../settingsPageSection/SettingsPageSection';
import SettingsPagesSettingItem from '../settingsPagesSettingItem/SettingsPagesSettingItem';

const SettingsPageProfile = ({setSettings}) => {

   const [avatarFileName, setAvatarFileName] = useState(null)

   const avatarChangeHandler = (e) => {
      setSettings(prevState => ({...prevState, avatar_path: e.target.files[0]})); console.log(e.target.files[0])
      setAvatarFileName(e.target.files[0].name)
   }

   return <SettingsPageSection title="Primary profile information">
      <SettingsPagesSettingItem title="Link" placeholder="id123123" preplaceholder="mythicplay.com/" />
      <SettingsPagesSettingItem title="Avatar" type="file" avatarFileName={avatarFileName} onChange={avatarChangeHandler} />
      <SettingsPagesSettingItem title="Status" placeholder="status" type="locked" prime={true} />
      <SettingsPagesSettingItem title="Background" placeholder="background" type="locked" prime={true} />
      <SettingsPagesSettingItem title="Birthday" placeholder="dd/mm/yyyy " />
      <SettingsPagesSettingItem title="First name" placeholder="Enter your first name" />
      <SettingsPagesSettingItem title="Last name" placeholder="Enter your last name" />
   </SettingsPageSection>
}

export default SettingsPageProfile