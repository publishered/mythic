import SettingsPagePlaceholderMessage from '../settingsPagePlaceholderMessage/SettingsPagePlaceholderMessage'
import SettingsPageSection from '../settingsPageSection/SettingsPageSection'

const SettingsPagePremium = () => {
   return <SettingsPageSection title="Premium">
      <SettingsPagePlaceholderMessage text="Premium settings are not available to you" />
   </SettingsPageSection>
}

export default SettingsPagePremium