import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                           <h1 className='Mathi-Mo'>MATHI MO</h1>
                           <p>The Mathematics Solution & Tutorials</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft style-footer1" data-wow-delay="0.4s">
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="/">Company</a></li>
                                    <li><a href="/">Android App</a></li>
                                    <li><a href="/">ios App</a></li>
                                    <li><a href="/">Desktop</a></li>
                                    <li><a href="/">Projects</a></li>
                                    <li><a href="/">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft style-footer1" data-wow-delay="0.6s" >
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Term &amp; conditions</a></li>
                                    <li><a href="/">Reporting</a></li>
                                    <li><a href="/">Documentation</a></li>
                                    <li><a href="/">Support Policy</a></li>
                                    <li><a href="/">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s style-footer1" >
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="/" ><i className="fa fa-facebook"></i></a>
                                    <a href="/" ><i className="fa fa-instagram"></i></a>
                                    <a href="/" ><i className="fa fa-youtube"></i></a>
                                    <a href="/" ><i className="fa fa-whatsapp"></i></a>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© MATHI MO 2019 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i className="icon_heart"></i> in <a href="/" >MATHI MO</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
