import * as React from 'react';
import { NavMenu } from './NavMenu';
import { MainHeader } from './MainHeader';
import { MainSidebar } from './MainSidebar';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='wrapper'>

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
