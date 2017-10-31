/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  styles: [`
  .router-link-active {
    text-decoration: underline;
  }
  `],
  template: `
  
  <header id="header"><!--header-->
  <div><!--header_top-->
      <div  class=" header_top">
            <div class="row">
              <div class="col-sm-6">
                  <div class="contactinfo">
                      <ul class="nav nav-pills">
                          <li><a href="#"><i></i>&nbsp</a></li>
                          <li><a href="#"><i></i>&nbsp</a></li>
                          <li><a href="#"><img src="images/home/fone.fw.png" width="12" height="10">&nbsp;<FONT color="#FFFFFF">+55 61 991050446</FONT></a></li>
                          <li><a href="#"><img src="images/home/email.png" width="12" height="11">&nbsp;&nbsp;<FONT color="#FFFFFF">cartaoaqui@cartaoaqui.com</FONT></a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-sm-6">
                  <div class="social-icons pull-right">
                      <ul class="nav navbar-nav">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i></i>&nbsp</a></li>
                          <li><a href="#"><i></i>&nbsp</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div><!--/header_top-->
  <header>
      <div>
            <a href="index.html"><img src="images/home/bgbarra.jpg" alt="" /></a>
      </div>
  </header>
  <div class="header-middle"><!--header-middle-->
      <div class="container">
          <div class="row">
              <div class="col-sm-4">
                  <div class="logo pull-left">
                      <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
                  </div>
                  <div class="btn-group pull-right">
                      <div class="btn-group">
                          &nbsp;
                      </div>
                      
                      <div class="btn-group">
                          &nbsp;
                      </div>
                  </div>
              </div>
              <div class="col-sm-8">
                  <div class="shop-menu pull-right">
                      <ul class="nav navbar-nav">
                          <li><a href="Conta.html"><i class="fa fa-user"></i> Conta</a></li>
                          <li><a href="Cart.html"><i class="fa fa-star"></i> Lista de Desejos</a></li>
                          <li><a href="Cart.html"><i class="fa fa-shopping-cart"></i> Carrinho</a></li>
                          <li><a href="login.html"><i class="fa fa-lock"></i> Login</a></li>
                          
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div><!--/header-middle-->

  <div class="header-bottom"><!--header-bottom-->
      <div class="container">
          <div class="row">
              <div class="col-sm-9">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="sr-only">...</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                  </div>
                  <div class="mainmenu pull-left">
                      <ul class="nav navbar-nav collapse navbar-collapse">
                          <li><a href="index.html" class="active">Home</a></li>
                          <li class="dropdown"><a href="#">Produtos<i class="fa fa-angle-down"></i></a>
                              <ul role="menu" class="sub-menu">
                                  <li><a href="Shop.html">Cartao de visita</a></li>
                              </ul>
                          </li> 
                          <li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                              <ul role="menu" class="sub-menu">
                                  <li><a href="blog.html">Acessar Blog </a></li>
                                  
                              </ul>
                          </li> 
                          <li><a href="Corporativo.html">Venda Corporativa</a></li>
                          <li><a href="Contato.html">Contato</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-sm-3">
                  <div class="search_box pull-right">
                      <input type="text" placeholder="Pesquisar"/>
                  </div>
              </div>
          </div>
      </div>
  </div><!--/header-bottom-->
</header><!--/header-->



          <router-outlet></router-outlet>




          
          <footer id="footer"><!--Footer-->
          <div class="footer-top">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-2">
                          <div class="companyinfo">
                              <h2><span>cartao</span><font color="#FFFFFF">aqui</font></h2>
                              <p>Atendimento de Segunda a Sexta de 8 as 18 da tarde!</p>
                          </div>
                      </div>
                      <div class="col-sm-7">
                          <div class="col-sm-3">
                              <div class="video-gallery text-center">
                                  <a href="#">
                                      <div class="iframe-img">
                                          <img src="./images/home/iframe1.png" alt="" />
                                      </div>
                                      <div class="overlay-icon">
                                          <i class="fa fa-play-circle-o"></i>
                                      </div>
                                  </a>
                                  <p>Site Seguro</p>
                                  <h2>&nbsp </h2>
                              </div>
                          </div>
                          
                          <div class="col-sm-3">
                              <div class="video-gallery text-center">
                                  <a href="#">
                                      <div class="iframe-img">
                                          <img src="./images/home/iframe2.png" alt="" />
                                      </div>
                                      <div class="overlay-icon">
                                          <i class="fa fa-play-circle-o"></i>
                                      </div>
                                  </a>
                                  <p>Certificado</p>
                                  <h2>&nbsp </h2>
                              </div>
                          </div>
                          
                          <div class="col-sm-3">
                              <div class="video-gallery text-center">
                                  <a href="#">
                                      <div class="iframe-img">
                                          <img src="./images/home/iframe3.png" alt="" />
                                      </div>
                                      <div class="overlay-icon">
                                          <i class="fa fa-play-circle-o"></i>
                                      </div>
                                  </a>
                                  <p>Cartões</p>
                                  <h2>&nbsp </h2>
                              </div>
                          </div>
                          
                          <div class="col-sm-3">
                              <div class="video-gallery text-center">
                                  <a href="#">
                                      <div class="iframe-img">
                                          <img src="./images/home/iframe4.png" alt="" />
                                      </div>
                                      <div class="overlay-icon">
                                          <i class="fa fa-play-circle-o"></i>
                                      </div>
                                  </a>
                                  <p>Pagamentos</p>
                                  <h2>&nbsp </h2>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-3">
                          <div class="address">
                              <img src="./images/home/map.png" alt="" />
                              <p>Brasilia - DF</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="footer-widget">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-2">
                          <div class="single-widget">
                              <h2>Servicos</h2>
                              <ul class="nav nav-pills nav-stacked">
                              
                                  <li><a href="Contato.html">Contato</a></li>
                                  <li><a href="Corporativo.html">Venda Corporativa</a></li>
                                  <li><a href="Blog.html">Blog</a></li>
                                  
                              </ul>
                          </div>
                      </div>
                      <div class="col-sm-3 col-sm-offset-1">
                          <div class="single-widget">
                              <h2>NEWSLETTER</h2>
                              <form action="#" class="searchform">
                                  <input type="text" placeholder="Seu email Aqui!" />
                                  <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                                  <p>Receba as nossas  <br />atualizações por E-mail...</p>
                              </form>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
          
          <div class="footer-bottom">
              <div class="container">
                  <div class="row">
                      <p class="pull-left">Copyright © 2017 CARTÃO AQUI. Direitos Reservados.</p>
                      <p class="pull-right">Design:<span>RMA DIGITAL</span></p>
                  </div>
              </div>
          </div>
          
      </footer><!--/Footer-->
      


  `
})
export class AppComponent {}
