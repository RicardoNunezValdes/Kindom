<template>
<!--    TOP MENU   !-->

  <nav class="navbar navbar-default navbar-static-top m-b-0">
        <div class="navbar-header"> <a class="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i class="ti-menu"></i></a>
          <div class="top-left-part">
            <a class="logo" v-link="{name:'home'}">
              <b>
                <img src="/static/plugins/images/eliteadmin-logo.png" alt="home">
              </b>
                <span class="hidden-xs"><img src="/static/plugins/images/eliteadmin-text.png" alt="home"></span>
            </a>
          </div>
          
          <ul class="nav navbar-top-links navbar-left hidden-xs">
            <li><a class="open-close hidden-xs waves-effect waves-light" href="javascript:void(0)"><i class="ti-menu icon-arrow-left-circle"></i></a></li>
            <li class="in">
              <form class="app-search hidden-xs" role="search">
                <input class="form-control" placeholder="Buscar..." type="text">
                <a href="" class="active"><i class="fa fa-search"></i></a>
              </form>
            </li>
          </ul>
          <ul class="nav navbar-top-links navbar-right pull-right">
            <li class="dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i class="icon-envelope"></i>
              <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
              </a>
              <ul class="dropdown-menu mailbox animated bounceInDown">
                <li>
                  <div class="drop-title">You have 4 new messages</div>
                </li>
                <li>
                  <div class="message-center"> <a href="#">
                    <div class="user-img"> <img src="/static/plugins/images/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status online pull-right"></span> </div>
                    <div class="mail-contnet">
                      <h5>Pavan kumar</h5>
                      <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span> </div>
                    </a> <a href="#">
                    <div class="user-img"> <img src="/static/plugins/images/users/sonu.jpg" alt="user" class="img-circle"> <span class="profile-status busy pull-right"></span> </div>
                    <div class="mail-contnet">
                      <h5>Sonu Nigam</h5>
                      <span class="mail-desc">Ive sung a song! See you at</span> <span class="time">9:10 AM</span> </div>
                    </a> <a href="#">
                    <div class="user-img"> <img src="/static/plugins/images/users/arijit.jpg" alt="user" class="img-circle"> <span class="profile-status away pull-right"></span> </div>
                    <div class="mail-contnet">
                      <h5>Arijit Sinh</h5>
                      <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span> </div>
                    </a> <a href="#">
                    <div class="user-img"> <img src="/static/plugins/images/users/pawandeep.jpg" alt="user" class="img-circle"> <span class="profile-status offline pull-right"></span> </div>
                    <div class="mail-contnet">
                      <h5>Pavan kumar</h5>
                      <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
                    </a> </div>
                </li>
                <li> <a class="text-center" href="javascript:void(0);"> <strong>See all notifications</strong> <i class="fa fa-angle-right"></i> </a></li>
              </ul>
              <!-- /.dropdown-messages -->
            </li>
            <!-- /.dropdown -->
            <li class="dropdown"> <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i class="icon-note"></i>
              <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
              </a>
              <ul class="dropdown-menu dropdown-tasks animated bounceInDown">
                <li> <a href="#">
                  <div>
                    <p> <strong>Task 1</strong> <span class="pull-right text-muted">40% Complete</span> </p>
                    <div class="progress progress-striped active">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                    </div>
                  </div>
                  </a> </li>
                <li class="divider"></li>
                <li> <a href="#">
                  <div>
                    <p> <strong>Task 2</strong> <span class="pull-right text-muted">20% Complete</span> </p>
                    <div class="progress progress-striped active">
                      <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div>
                    </div>
                  </div>
                  </a> </li>
                <li class="divider"></li>
                <li> <a href="#">
                  <div>
                    <p> <strong>Task 3</strong> <span class="pull-right text-muted">60% Complete</span> </p>
                    <div class="progress progress-striped active">
                      <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div>
                    </div>
                  </div>
                  </a> </li>
                <li class="divider"></li>
                <li> <a href="#">
                  <div>
                    <p> <strong>Task 4</strong> <span class="pull-right text-muted">80% Complete</span> </p>
                    <div class="progress progress-striped active">
                      <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
                    </div>
                  </div>
                  </a> </li>
                <li class="divider"></li>
                <li> <a class="text-center" href="#"> <strong>See All Tasks</strong> <i class="fa fa-angle-right"></i> </a> </li>
              </ul>
              <!-- /.dropdown-tasks -->
            </li>
            <!-- /.dropdown -->
            <li class="dropdown"> <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> info@koimedia.net </a>
              <ul class="dropdown-menu dropdown-user animated flipInY">
                <li><a href="http://localhost/depilarte/sistema/usuarios/update/1"><i class="ti-user"></i> Mi perfil</a></li>               
                <li role="separator" class="divider"></li>
                <li><a href="http://localhost/depilarte/sistema/site/logout"><i class="fa fa-power-off"></i> Salir</a></li>
              </ul>
              <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
          </ul>
        </div>
        <!-- /.navbar-header -->
        <!-- /.navbar-top-links -->
        <!-- /.navbar-static-side -->
  </nav>
<!--    END TOP MENU   !-->

<!--    ASIDE MENU   !-->
    <div class="navbar-dark sidebar" role="navigation">
              <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;"><div class="sidebar-nav navbar-collapse slimscrollsidebar" style="overflow: hidden; width: auto; height: 100%;">
                <ul class="nav in" id="side-menu">     
                    <li class="nav-small-cap m-t-10">--- Main Menu</li>
              <li> 
                <a href="http://koimedia.net/sistema" class="waves-effect active">
                  <i class="ti-settings"></i> 
                  <span class="hide-menu"> 
                    Mantenedores <span class="fa arrow"></span> 
                    <!-- <span class="label label-rouded label-custom pull-right">26</span> !-->
                  </span>
                </a>                
                <ul class="nav nav-second-level collapse">
                  <li> <a v-link="{name:'productos'}">Productos</a></li>
                  <li> <a v-link="{name:'clientes'}">Clientes</a></li>
                  <li> <a v-link="{name:'rrhh'}">RRHH</a></li>
                </ul>
              </li>
              <li> 
                <a href="http://koimedia.net/sistema" class="waves-effect active">
                  <i class="ti-save"></i> 
                  <span class="hide-menu"> 
                    Carga de informacion <span class="fa arrow"></span> 
                  </span>
                </a>                
                <ul class="nav nav-second-level collapse">
                  <li> <a v-link="{name:'ventas'}">Ventas</a> </li>
                </ul>

              </li></ul>
            </div><div class="slimScrollBar" style="background: rgb(220, 220, 220); width: 0px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 345px;"></div><div class="slimScrollRail" style="width: 0px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
    </div>
<!--    END ASIDE MENU   !-->     

  <!--    WRAPPER   !-->
    <div id="page-wrapper">
      <router-view></router-view>
    </div>
  <!--   END WRAPPER   !-->
</template>

<script>
module.exports = {
  name: 'Dash',
  data: function () {
    return {
      section: 'Dash',
      me: '',
      error: '',
      api: {
        servers: {
          url: '', // Back end server
          result: []
        }
      }
    }
  },
  computed: {
    store: function () {
      return this.$parent.$store
    },
    state: function () {
      return this.store.state
    },
    callAPI: function () {
      return this.$parent.callAPI
    }
  },
  methods: {
    changeloading: function () {
      this.store.dispatch('TOGGLE_SEARCHING')
    },
    toggleMenu: function (event) {
      // remove active from li
      window.$('li.pageLink').removeClass('active')

      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  },
  ready: function () {
    // Page is ready. Let's load our functions!
  }
}
