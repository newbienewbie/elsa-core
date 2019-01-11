///<reference path="../@types/jsplumb.d.ts"/>
namespace Elsa {
    export class WorkflowDesignerConfig {

        static createJsPlumbInstance(container: HTMLElement): any {
            return jsPlumb.getInstance({
                Anchor: "Continuous",
                DragOptions: {cursor: 'pointer', zIndex: 2000},
                ConnectionOverlays: [
                    ["Arrow", {width: 12, length: 12, location: -5}],
                ],
                Container: container
            });
        }

        static getSourceEndpointOptions(activityId: any, endpointName: any, hasExecuted: boolean, hasFaulted: boolean): any {
            const fill = hasFaulted ? '#d23c3c' : hasExecuted? '#6faa44' : '#7da7f2';
            const stroke = fill;
            return {
                endpoint: 'Dot',
                anchor: 'Continuous',
                paintStyle: {
                    stroke: stroke,
                    fill: fill,
                    radius: 7,
                    strokeWidth: 5
                },
                isSource: true,
                connector: ['Flowchart', {stub: [40, 60], gap: 0, cornerRadius: 5, alwaysRespectStubs: true}],
                connectorStyle: {
                    strokeWidth: 2,
                    stroke: '#999999',
                    joinstyle: 'round',
                    outlineStroke: 'white',
                    outlineWidth: 2
                },
                hoverPaintStyle: {
                    fill: stroke,
                    stroke: fill
                },
                connectorHoverStyle: {
                    strokeWidth: 3,
                    stroke: stroke,
                    outlineWidth: 5,
                    outlineStroke: 'white'
                },
                connectorOverlays: [['Label', {location: [3, -1.5], cssClass: 'endpointSourceLabel'}]],
                dragOptions: {},
                uuid: `${activityId}-${endpointName}`,
                parameters: {
                    endpointName: endpointName
                }
            };
        }
    }
}