import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const FooterComp = () => {
    return (
        <MDBFooter style={{ backgroundColor: '#212529', color: '#fff' }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <i style={{ color: 'white' }} className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3'></i>NAT Service Station
                            </h6>
                            <p>
                                Best Service station ever! Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Developers</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nikita Fedarenchyk
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Alex Shevelyanchik
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Artem Sharahovsky
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Occupation</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Front-end Dev
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Back-end Dev
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Back-end Dev
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact (Github)</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> Fedarenchyk-16
                            </p>
                            <p>
                                <i className='fas fa-home me-3'></i> ShevelyanchikAlex
                            </p>
                            <p>
                                <i className='fas fa-home me-3'></i> BublG
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    Nikita'sServiceStation.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default FooterComp;