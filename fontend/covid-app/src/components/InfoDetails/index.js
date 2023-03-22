import React, { useState, useEffect } from 'react';
import axios from 'axios';
const InfoDetails = () => {
    /*
    const [data, setData] = useState([]);
  
    const fetchData = () => {
      fetch('chart.json')
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          const resultx = embed('#view', actualData);
          setData(actualData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    useEffect(() => {
      fetchData();
      //const result = embed('#view', data);
    }, []);
    */

    const [data, setData] = useState({
        "totalcase":0,
        "deaths":0,
        "recovered":0
    });

    const url = 'overall.json';
    useEffect(() => {
        axios.get(url)
          .then(response => {
            console.log(response);
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="section is-fluid has-background-grey-dark">
        <div class="columns">
                <div class="column py-6">
                    <p className="is-size-1 has-text-white has-text-centered pt-5"><i className="fa-solid has-text-header"></i> ตัวเลขผู้ติดเชื้อ</p>
                    <p className="is-size-1 has-text-white has-text-weight-bold has-text-centered"><i className="fa-solid has-text-header"></i> COVID-19</p>
                </div>
                <div class="column">
                    <div className="tile is-ancestor is-gapless">
                        <div className="tile is-vertical">
                            <div className="tile is-parent">
                                <article className="tile is-child notification has-background-grey-lighter is-radiusless">
                                        <div className="level-right">
                                            <p className="is-size-3 has-text-weight-bold">ผู้ติดเชื้อสะสม</p>
                                        </div>
                                        <div className="level">
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="is-size-1 has-text-weight-bold">
                                                        {
                                                            numberWithCommas(data.totalcase)
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </article>
                            </div>
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-primary is-radiusless">
                                        <div className="level-right">
                                            <p className="is-size-4 has-text-weight-bold">หายแล้ว</p>
                                        </div>
                                        <div className="level">
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="is-size-1 has-text-weight-bold">
                                                        {
                                                            numberWithCommas(data.recovered)
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-danger is-radiusless">
                                        <div className="level-right">
                                            <p className="is-size-4 has-text-weight-bold">เสียชีวิต</p>
                                        </div>
                                        <div className="level">
                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <p class="is-size-1 has-text-weight-bold">
                                                        {
                                                            numberWithCommas(data.deaths)
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  //<div id="view2">{JSON.stringify(data, null, 2)}</div>
  export default InfoDetails;