import { ColorUtil } from '../utils/ColorUtil'

export class ChartData {
    constructor(label, data, i) {
        const color = '#' + new ColorUtil().getColor(i)
        this.backgroundColor = color
        this.borderColor = color + '80'
        this.pointHoverBackgroundColor = color
        this.label = label
        this.data = data
        this.fill = false
    }
}
