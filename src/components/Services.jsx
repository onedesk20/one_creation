import React from 'react'

import services from '../dataset/serveces'
import { Card } from 'react-bootstrap'

const Services = () => {
  return (
    <div className="cards-services row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
        {services.map((service, i) => {
            return (
              <Card key={i} className="card-service">
                <Card.Body>
                  <Card.Title className="card-service-title">{service.name}</Card.Title>
                  <Card.Text className="card-service-descricao">{service.descrição}</Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
    </div>
  )
}

export default Services