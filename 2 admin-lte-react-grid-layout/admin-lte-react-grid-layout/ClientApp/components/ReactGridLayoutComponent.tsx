import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as ReactGridLayout from 'react-grid-layout';


interface CounterState {
    currentCount: number;
}

export class ReactGridLayoutComponent extends React.Component<RouteComponentProps<{}>, ReactGridLayoutState> {
    constructor() {
        super();

        var layout: ReactGridLayoutItem[] = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2 },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 },
            { i: 'd', x: 4, y: 4, w: 1, h: 2 },
            { i: 'e', x: 4, y: 6, w: 1, h: 2 },
            { i: 'f', x: 4, y: 8, w: 1, h: 2 },
        ];

        this.state = { layout: layout, loading: true };
    }

    public render() {
        return <div>
            <ReactGridLayout className="layout" layout={this.state.layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
                <div key="d">d</div>
                <div key="e">e</div>
                <div key="f">f</div>
            </ReactGridLayout>
        </div>;
    }

}


interface ReactGridLayoutItem {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    static?: boolean;
}

interface ReactGridLayoutState {
    layout: Array<ReactGridLayoutItem>;
    loading: boolean;
}



