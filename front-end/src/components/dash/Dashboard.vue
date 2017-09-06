<template>
  <!-- Main content -->
  <div class="container-fluid">
      <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 class="page-title">Grid</h4>
        </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          <ol class="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Ui Elements</a></li>
            <li class="active">Grid</li>
          </ol>
        </div>
        <!-- /.col-lg-12 -->
      </div>
      <!--.row-->
      <div class="row">
        <div class="col-md-12">
          <div class="white-box">
            <h3 class="box-title">Grid options</h3>
            <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
                    <th> Small devices <small>Tablets (≥768px)</small> </th>
                    <th> Medium devices <small>Desktops (≥992px)</small> </th>
                    <th> Large devices <small>Desktops (≥1200px)</small> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Grid behavior</th>
                    <td>Horizontal at all times</td>
                    <td colspan="3">Collapsed to start, horizontal above breakpoints</td>
                  </tr>
                  <tr>
                    <th>Max container width</th>
                    <td>None (auto)</td>
                    <td>750px</td>
                    <td>970px</td>
                    <td>1170px</td>
                  </tr>
                  <tr>
                    <th>Class prefix</th>
                    <td><code>.col-xs-</code> </td>
                    <td><code>.col-sm-</code> </td>
                    <td><code>.col-md-</code> </td>
                    <td><code>.col-lg-</code> </td>
                  </tr>
                  <tr>
                    <th># of columns</th>
                    <td colspan="4">12</td>
                  </tr>
                  <tr>
                    <th>Max column width</th>
                    <td class="text-muted">Auto</td>
                    <td>60px</td>
                    <td>78px</td>
                    <td>95px</td>
                  </tr>
                  <tr>
                    <th>Gutter width</th>
                    <td colspan="4">30px (15px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th>Nestable</th>
                    <td colspan="4">Yes</td>
                  </tr>
                  <tr>
                    <th>Offsets</th>
                    <td colspan="4">Yes</td>
                  </tr>
                  <tr>
                    <th>Column ordering</th>
                    <td colspan="4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any <code>.col-md-</code> class to an element will not only affect its styling on medium devices but also on large devices if a <code>.col-lg-</code> class is not present.</p>
          </div>
        </div>
      </div>
      <!--/.row-->
      <!--.row-->
      <div class="row">
        <div class="col-lg-12">
          <div class="white-box">
            <h3 class="box-title">Example: Stacked-to-horizontal</h3>
            <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any <code>.row</code>.</p>
            <div class="row show-grid">
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
              <div class="col-md-1">.col-md-1</div>
            </div>
            <div class="row show-grid">
              <div class="col-md-8">.col-md-8</div>
              <div class="col-md-4">.col-md-4</div>
            </div>
            <div class="row show-grid">
              <div class="col-md-4">.col-md-4</div>
              <div class="col-md-4">.col-md-4</div>
              <div class="col-md-4">.col-md-4</div>
            </div>
            <div class="row show-grid">
              <div class="col-md-6">.col-md-6</div>
              <div class="col-md-6">.col-md-6</div>
            </div>
          </div>
        </div>
      </div>
      <!--/.row-->
      <!--.row-->
      <div class="row">
        <div class="col-lg-12">
          <div class="white-box">
            <h3 class="box-title">Example: Mobile and desktop</h3>
            <p>Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>.col-xs-*</code> <code>.col-md-*</code> to your columns. See the example below for a better idea of how it all works.</p>
            <div class="row show-grid">
              <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
              <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
            </div>
            <div class="row show-grid">
              <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
              <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
              <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
            </div>
            <div class="row show-grid">
              <div class="col-xs-6">.col-xs-6</div>
              <div class="col-xs-6">.col-xs-6</div>
            </div>
          </div>
        </div>
      </div>
      <!--/.row-->
      <!--.row-->
      <div class="row">
        <div class="col-lg-12">
          <div class="white-box">
            <h3 class="box-title">Example: Mobile, tablet, desktops</h3>
            <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet <code>.col-sm-*</code> classes.</p>
            <div class="row show-grid">
              <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
              <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
            </div>
            <div class="row show-grid">
              <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
              <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
              <!-- Optional: clear the XS cols if their content doesn't match in height -->
              <div class="clearfix visible-xs"></div>
              <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
            </div>
          </div>
        </div>
      </div>
      <!--/.row-->
      <!--.row-->
      <div class="row">
        <div class="col-lg-12">
          <div class="white-box">
            <h3 class="box-title">Responsive column resets</h3>
            <p>With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a <code>.clearfix</code> and our responsive utility classes.</p>
            <div class="row show-grid">
              <div class="col-xs-6 col-sm-3"> .col-xs-6 .col-sm-3 <br>
                Resize your viewport or check it out on your phone for an example. </div>
              <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
              <!-- Add the extra clearfix for only the required viewport -->
              <div class="clearfix visible-xs"></div>
              <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
              <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
            </div>
          </div>
        </div>
      </div>
      <!--/.row-->
      <!--.row-->
      <div class="row">
        <div class="col-lg-12">
          <div class="white-box">
            <h3 class="box-title">Offsetting columns</h3>
            <p>Move columns to the right using <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.col-md-offset-4</code> moves <code>.col-md-4</code> over four columns.</p>
            <div class="row show-grid">
              <div class="col-md-4">.col-md-4</div>
              <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
            </div>
            <div class="row show-grid">
              <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
              <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
            </div>
            <div class="row show-grid">
              <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
            </div>
          </div>
        </div>
      </div>
      <!--/.row-->
      <!-- .right-sidebar -->
      <div class="right-sidebar">
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;"><div class="slimscrollright" style="overflow: hidden; width: auto; height: 100%;">
          <div class="rpanel-title"> Service Panel <span><i class="ti-close right-side-toggle"></i></span> </div>
          <div class="r-panel-body">
            <ul>
              <li><b>Layout Options</b></li>
              <li>
                <div class="checkbox checkbox-info">
                  <input id="checkbox1" class="fxhdr" type="checkbox">
                  <label for="checkbox1"> Fix Header </label>
                </div>
              </li>
              <li>
                <div class="checkbox checkbox-warning">
                  <input id="checkbox2" checked="" class="fxsdr" type="checkbox">
                  <label for="checkbox2"> Fix Sidebar </label>
                </div>
              </li>
              <li>
                <div class="checkbox checkbox-success">
                  <input id="checkbox4" class="open-close" type="checkbox">
                  <label for="checkbox4"> Toggle Sidebar </label>
                </div>
              </li>
            </ul>
            <ul id="themecolors" class="m-t-20">
              <li><b>With Light sidebar</b></li>
              <li><a href="javascript:void(0)" theme="default" class="default-theme">1</a></li>
              <li><a href="javascript:void(0)" theme="green" class="green-theme">2</a></li>
              <li><a href="javascript:void(0)" theme="gray" class="yellow-theme">3</a></li>
              <li><a href="javascript:void(0)" theme="blue" class="blue-theme working">4</a></li>
              <li><a href="javascript:void(0)" theme="purple" class="purple-theme">5</a></li>
              <li><a href="javascript:void(0)" theme="megna" class="megna-theme">6</a></li>
              <li><b>With Dark sidebar</b></li>
              <br>
              <li><a href="javascript:void(0)" theme="default-dark" class="default-dark-theme">7</a></li>
              <li><a href="javascript:void(0)" theme="green-dark" class="green-dark-theme">8</a></li>
              <li><a href="javascript:void(0)" theme="gray-dark" class="yellow-dark-theme">9</a></li>

              <li><a href="javascript:void(0)" theme="blue-dark" class="blue-dark-theme">10</a></li>
              <li><a href="javascript:void(0)" theme="purple-dark" class="purple-dark-theme">11</a></li>
              <li><a href="javascript:void(0)" theme="megna-dark" class="megna-dark-theme">12</a></li>
            </ul>
            <ul class="m-t-20 chatonline">
              <li><b>Chat option</b></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/varun.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/genu.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/ritesh.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/arijit.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/govinda.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/hritik.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/john.jpg" alt="user-img" class="img-circle"> <span>Hritik Roshan<small class="text-success">online</small></span></a></li>
              <li><a href="javascript:void(0)"><img src="/static/plugins/images/users/pawandeep.jpg" alt="user-img" class="img-circle"> <span>Pwandeep rajan <small class="text-success">online</small></span></a></li>
            </ul>
          </div>
        </div><div class="slimScrollBar" style="background: rgb(220, 220, 220) none repeat scroll 0% 0%; width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;"></div></div>
      </div>
      <!-- /.right-sidebar -->
    </div>
  <!-- /.content -->
</template>

<script>
// import Chart from 'chart.js'

module.exports = {
  ready: function () {
    // var ctx = document.getElementById('canvas').getContext('2d')
    // var data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'My First dataset',
    //       fillColor: 'rgba(220,220,220,0.2)',
    //       strokeColor: 'rgba(220,220,220,1)',
    //       pointColor: 'rgba(220,220,220,1)',
    //       pointStrokeColor: '#fff',
    //       pointHighlightFill: '#fff',
    //       pointHighlightStroke: 'rgba(220,220,220,1)',
    //       data: [65, 59, 80, 81, 56, 55, 40]
    //     },
    //     {
    //       label: 'My Second dataset',
    //       fillColor: 'rgba(151,187,205,0.2)',
    //       strokeColor: 'rgba(151,187,205,1)',
    //       pointColor: 'rgba(151,187,205,1)',
    //       pointStrokeColor: '#fff',
    //       pointHighlightFill: '#fff',
    //       pointHighlightStroke: 'rgba(151,187,205,1)',
    //       data: [28, 48, 40, 19, 86, 27, 90]
    //     }
    //   ]
    // }

    // new Chart(ctx).Line(data, {responsive: false})
  }
}
</script>
