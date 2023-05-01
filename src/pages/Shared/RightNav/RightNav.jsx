import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img className='w-100' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;