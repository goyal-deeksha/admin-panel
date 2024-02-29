import { Col, Row, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import {
  AboutMe,
  ProfileHeader,
  ProjectsContributions,
} from 'sub-components'

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Overview" />

      {/* Profile Header  */}
      <ProfileHeader />

      {/* content */}
      <div className="py-6">
        <Row>

          {/* About Me */}
          <AboutMe />

          {/* Projects Contributions */}
          <ProjectsContributions />

          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
          </Col>

        </Row>
      </div>

    </Container>
  )
}

export default Profile