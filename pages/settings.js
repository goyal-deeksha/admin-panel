import { Container } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import { DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="General" />

      {/* General Settings */}
      <GeneralSetting />

      {/* Email Settings */}
      <EmailSetting />

      {/* Settings for Preferences */}
      <Preferences />

      {/* Delete Your Account */}
      <DeleteAccount />

    </Container>
  )
}

export default Settings