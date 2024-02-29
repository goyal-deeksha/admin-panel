import { Row, Col, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import { BillingAddress, CurrentPlan } from 'sub-components'

const Billing = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Billing" />

      <Row className="mt-6">
        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }} md={12} xs={12}>
          <Row>
            {/* Current Plan Overview */}
            <CurrentPlan />

            {/* Billing Address */}
            <BillingAddress />

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Billing