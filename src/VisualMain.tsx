/// <reference path="../node_modules/powerbi-visuals/lib/powerbi-visuals.d.ts"/>

import IVisual = powerbi.extensibility.v110.IVisual;
import VisualConstructorOptions = powerbi.extensibility.v110.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.VisualUpdateOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import IVisualHost = powerbi.extensibility.v110.IVisualHost;
import IVisualHostServices = powerbi.IVisualHostServices;

import * as $ from 'jquery';
import  * as React from 'react';
import  * as ReactDOM from 'react-dom';
import  VegaLite from 'react-vega-lite';

   const spec = {
    "description": "A simple bar chart with embedded data.",
    "mark": "bar",
    "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"}
        } 
    };
    const bardata = {
    "values": [
        {"a": "A","b": 80}, {"a": "B","b": 34}, {"a": "C","b": 55},
        {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
        {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
        ] 
    };
      const vlSpec = {
    "data": {
      "values": [
        {"a": "C", "b": 2}, {"a": "C", "b": 7}, {"a": "C", "b": 4},
        {"a": "D", "b": 1}, {"a": "D", "b": 2}, {"a": "D", "b": 6},
        {"a": "E", "b": 8}, {"a": "E", "b": 4}, {"a": "E", "b": 7}
      ]
    },
    "mark": "bar",
    "encoding": {
      "y": {"field": "a", "type": "nominal"},
      "x": {
        "aggregate": "average", "field": "b", "type": "quantitative",
        "axis": {
          "title": "Average of b"
        }
      }
    }
  };
export default class VisualTemplate implements IVisual {

    private target: any;
    private updateCount: number;

    private host: IVisualHost;
    private hostServices: IVisualHostServices;
    private selectionManager: ISelectionManager;

    /* init function for legacy api*/
    constructor(options: VisualConstructorOptions) {
        console.log('Visual init', options);
        this.target = $(options.element);
        this.updateCount = 0;

        /* example to get the host (services) and selection manager using the new API */
        this.host = options.host;
        this.selectionManager = options.host.createSelectionManager();
        this.hostServices = (this.selectionManager as any).hostServices; // `hostServices` is now what we used to call `host`
    }

    public update(options: VisualUpdateOptions) {
     //   debugger;
        console.log('Visual update', options);
        ReactDOM.render(<VegaLite spec={spec} data={bardata} />, this.target[0]);
        // ReactDOM.render(<div> Testing React! </div>,this.target[0]);
        //this.target.html(`<h1> Steven Drucker </h1> <p class="update-count">Update count: <em>${(++this.updateCount)}</em><br />operationKind: <em>${options.operationKind}</em></p>`);
        console.log("testing sdrucker2")
    }

    public destroy(): void {
        // TODO: Perform any cleanup tasks here
    }
}
