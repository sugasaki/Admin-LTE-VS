Visual Studio AdminLTE



![image](https://qiita-image-store.s3.amazonaws.com/0/49910/4af44403-37aa-0e15-b1a6-c46af5839d99.png)

[Releases · almasaeed2010/AdminLTE](https://github.com/almasaeed2010/AdminLTE/releases)

[AdminLTE - Installation](https://adminlte.io/docs/2.4/installation)


## source

https://github.com/sugasaki/Admin-LTE-VS

# 環境構築

## package.json

add package

```
    "admin-lte": "2.4.2",
    "font-awesome": "^4.7.0",
    "ionicons": "^3.0.0",
    "morris.js": "^0.5.0",
    "jvectormap": "^1.2.2",
    "bootstrap-datepicker": "^1.7.0",
    "bootstrap-daterangepicker": "^2.1.25",
    "jquery-slimscroll": "1.3.8"

```

## restore package

## webpack.config.js

module.exports > module > rules

```
 { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }

add keyword `|eot|woff2|woff|ttf`

 { test: /\.(png|jpg|jpeg|gif|svg|eot|woff2|woff|ttf)$/, use: 'url-loader?limit=25000' }
```

after.

```
        module: {
            rules: [
                { test: /\.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
                { test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.(png|jpg|jpeg|gif|svg|eot|woff2|woff|ttf)$/, use: 'url-loader?limit=25000' }
            ]
        },
```


## webpack.config.vendor.js

add  module.exports > entry > vendor

```
module: {
    rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
        { test: /\.css(\?|$)/, use: extractCSS.extract([ isDevBuild ? 'css-loader' : 'css-loader?minimize' ]) }
    ]
},
entry: {
    vendor: ['bootstrap', 'bootstrap/dist/css/bootstrap.css', 'event-source-polyfill', 'isomorphic-fetch', 'react', 'react-dom', 'react-router-dom', 'jquery'],
},

```

to

add jpg
```
module: {
    rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?|$)/, use: 'url-loader?limit=100000' },
        { test: /\.css(\?|$)/, use: extractCSS.extract([ isDevBuild ? 'css-loader' : 'css-loader?minimize' ]) }
    ]
},
entry: {
    vendor: [
        'bootstrap',
        'jquery',
        'bootstrap/dist/css/bootstrap.min.css',
        'event-source-polyfill',
        'isomorphic-fetch',
        'react', 'react-dom', 'react-router-dom',
        'moment',
        'bootstrap-datepicker',
        'jquery-slimscroll',
        'fastclick',
        'admin-lte',
        'admin-lte/dist/css/AdminLTE.css',
        'admin-lte/dist/css/skins/_all-skins.min.css',
       ],
},

```

```
```


## CSS 

add to boot.tsx

```
// Font Awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';
//// Ionicons
import '../node_modules/ionicons/dist/css/ionicons.css';

//Morris chart
import '../node_modules/morris.js/morris.css';
// jvectormap
import '../node_modules/jvectormap/jquery-jvectormap.css';
// Date Picker
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
// Daterange picker
import '../node_modules/bootstrap-daterangepicker/daterangepicker.css';

```


## _Layout.cshtml
\Views\Shared\_Layout.cshtml

```
<body>
to
<body class="hold-transition skin-blue sidebar-mini">
```



## rebuild

delete the wwwroot\dist

start rebuild

'wwwroot\dist'  folder is created when starting build





## IE11 compatible

add first line to boot.tsx

```
import 'core-js/fn/promise'; //IE11 compatible
```


# レイアウト変更

## add file

\ClientApp\components\MainHeader.tsx
\ClientApp\components\MainSidebar.tsx


## change Layout.tsx

```js:Layout.tsx
import * as React from 'react';
import { NavMenu } from './NavMenu';
import { MainHeader } from './MainHeader';
import { MainSidebar } from './MainSidebar';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return<div className='wrapper'>

            <header className="main-header">
                <MainHeader />
            </header>


            <aside className="main-sidebar">
                <MainSidebar />
            </aside>


            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard
                    <small>Control panel</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>

                <section className="content">
                    <div className="row">
                        {this.props.children}
                    </div>
                </section>

            </div>


            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
                reserved.
            </footer>


        </div>;
    }
}
```


```js:MainHeader.tsx
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class MainHeader extends React.Component<{}, {}> {
    public render() {
        return <header className="main-header">
            <a href="index2.html" className="logo">
                <span className="logo-mini"><b>A</b>LT</span>
                <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>
 
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>


                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">


                        <li className="dropdown tasks-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-flag-o"></i>
                                <span className="label label-danger">9</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 9 tasks</li>
                                <li>

                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <h3>
                                                    Design some buttons
                                                    <small className="pull-right">20%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-aqua" style={{width: "20%"}} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">20% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <h3>
                                                    Create a nice theme
                                                    <small className="pull-right">40%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green" style={{ width: "40%"}} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">40% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <h3>
                                                    Some task I need to do
                                                    <small className="pull-right">60%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-red" style={{ width: "60%"}} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <h3>
                                                    Make beautiful transitions
                                                    <small className="pull-right">80%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-yellow" style={{ width: "80%"}} role="progressbar"
                                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">80% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all tasks</a>
                                </li>
                            </ul>
                        </li>
                        


                        <li>
                            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>

                    </ul>
                </div>
            </nav>

        </header>;
    }
}

```



```js:MainSidebar.tsx
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class MainSidebar extends React.Component<{}, {}> {
    public render() {
        return <section className="sidebar">

                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>


                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>



                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                            </ul>
                        </li>
                    </ul>


        </section>;
    }
}

```


# result


![image](https://qiita-image-store.s3.amazonaws.com/0/49910/4af44403-37aa-0e15-b1a6-c46af5839d99.png)


