import React from 'react';

export default (props) => (
    <div className="text">
        <h3>Kontakt oss</h3>

        <div className="row">
            <div className="col-md-6">
                <h6>Tiina Ruohonen <small className="text-muted">styreleder</small></h6>

                <ul>
                    <li>E-post: <a href="mailto:tiina@holderdeord.no">tiina@holderdeord.no</a></li>
                    <li>Telefon: <a href="tel:90983161">90983161</a></li>
                </ul>
            </div>

            <div className="col-md-6">
                <h6>Jari Bakken <small className="text-muted">utvikler</small></h6>

                <ul>
                    <li>E-post: <a href="mailto:jari@holderdeord.no">jari@holderdeord.no</a></li>
                    <li>Telefon: <a href="tel:48185271">48185271</a></li>
                </ul>
            </div>
        </div>

        <hr/>

        <div className="row">
            <div className="col-md-6">
                <div className="p-x-1">
                    <ul className="list-unstyled">
                      <li>Holder de ord</li>
                      <li>c/o <a href="http://www.teknologihuset.no/">Teknologihuset</a></li>
                      <li>Postboks 5163 Majorstuen</li>
                      <li>0302 Oslo</li>
                      <li>Norge</li>
                    </ul>
                </div>
            </div>

            <div className="col-md-6">
                <p>Organisasjonsnummer: 996300528</p>
            </div>
        </div>
    </div>
)