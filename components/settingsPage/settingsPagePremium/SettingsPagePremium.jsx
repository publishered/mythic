import SettingsPagePlaceholderMessage from '../settingsPagePlaceholderMessage/SettingsPagePlaceholderMessage'
import SettingsPageSection from '../settingsPageSection/SettingsPageSection'

const SettingsPagePremium = () => {
   return <SettingsPageSection title="Primary profile information">
      <SettingsPagePlaceholderMessage text="Premium settings are not available to you" />
   </SettingsPageSection>
}

export default SettingsPagePremium