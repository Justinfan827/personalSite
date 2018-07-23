import React, { Component } from 'react';

export default class BlogPost extends Component {

    render() {
        return (
            <div id="wrapper">
                <div class='pt-5 row max-width d-flex justify-content-center text-center'>
                    <div class='col-10'>
                        <div class="card card-cascade wider reverse">
                            <div class="view view-cascade overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"></img>
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body card-body-cascade text-center">
                                <h4 class="card-title"><strong>Summer '18 at Credera</strong></h4>
                                <h6 class="font-weight-bold indigo-text py-2"><i>'Sippin on the Credera Kool-Aid'</i></h6>
                                <p class="card-text"></p>
                                <a class="px-2 fa-lg li-ic"><i class="fa fa-linkedin"></i></a>
                                <a class="px-2 fa-lg tw-ic"><i class="fa fa-twitter"></i></a>
                                <a class="px-2 fa-lg fb-ic"><i class="fa fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}