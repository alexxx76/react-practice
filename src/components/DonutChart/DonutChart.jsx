import React from 'react';

export default class DonutChart extends React.Component {
    render() {
        const { radius, holeSize, text, value, total, backgroundColor, valueColor } = this.props;
        const r = radius * (1 - (1 - holeSize)/2);
        const width = radius * (1 - holeSize);
        const circumference = 2 * Math.PI * r;
        const strokeDasharray = ((value * circumference) / total) + ' ' + circumference;
        const transform = 'rotate(-90 ' + radius + ',' + radius + ')';
        const fontSize = r * holeSize * 0.6;
        return (
            <div style = {{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                <svg width = {radius * 2 + 'px'} height = {radius * 2 + 'px'}>
                    <circle 
                        r = {r + 'px'} cx = {radius + 'px'} cy = {radius + 'px'}
                        transform = {transform} fill = 'none'
                        stroke = {backgroundColor} strokeWidth = {width}
                    />
                    <circle
                        r = {r + 'px'} cx = {radius + 'px'} cy = {radius + 'px'}
                        transform = {transform} fill = 'none'
                        stroke = {valueColor} strokeWidth = {width}
                        strokeDasharray = {strokeDasharray}
                    />
                    <text
                        x = {radius + 'px'} y = {radius + 'px' }dy = {fontSize/3 + 'px'}
                        textAnchor = 'middle' fill = {valueColor} fontSize = {fontSize + 'px'}
                    >
                        {~~(value * 1000 / total) / 10}%
                    </text>
                </svg>
                <div style = {{ marginTop: '10px' }}>
                    {text}
                </div>
            </div>
        );
    }
}

DonutChart.defaultProps = {
    holeSize : 0.8,
    radius : 65,
    backgroundColor : '#d1d8e7',
    valueColor : '#49649f'
};
