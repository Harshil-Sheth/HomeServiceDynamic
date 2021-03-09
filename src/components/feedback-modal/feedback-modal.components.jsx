import { Box, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import React, { Component } from 'react'
import { Button, Form, FormGroup, FormLabel, Modal } from 'react-bootstrap'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';

const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  



export default class FeedBackModal extends Component {
    render() {
        return (
            <div>
                <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Feedback
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={this.handleSubmit}>
      <Modal.Body>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
                  <FormGroup controlId="ServiceImage">
                    <FormLabel>Ratings</FormLabel>
                    
                  </FormGroup>
      </Modal.Body>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom icon set</Typography>
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box>
      <Modal.Footer>
                  <Form.Group>
                    <Button variant="primary" type="submit" >
                      Update Service
                    </Button>
                  </Form.Group>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
                </Form>
    </Modal>
            </div>
        )
    }
}
