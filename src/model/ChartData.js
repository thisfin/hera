import { string } from "postcss-selector-parser";

export class ChartData {
    constructor(label, data, i) {
        const color = getColor(i)
        this.backgroundColor = color
        this.borderColor = color + '80'
        this.pointHoverBackgroundColor = color
        this.label = label
        this.data = data
        this.fill = false
    }

}

function getColor(i) {
    var colors = ['622599', '0054a0', 'aaba0a', 'dd7500', 'e23d28', '3d8e33', '3399ff', 'ff3399', 'fcd116', '999999']
    return '#' + colors[i % colors.length];
}
