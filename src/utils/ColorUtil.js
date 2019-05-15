export class ColorUtil {
    colors = ['622599', '0054a0', 'aaba0a', 'dd7500', 'e23d28', '3d8e33', '3399ff', 'ff3399', 'fcd116', '999999']

    getColor = (index) => {
        return this.colors[index % this.colors.length]
    }
}
